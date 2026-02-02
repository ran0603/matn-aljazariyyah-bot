const TelegramBot = require('node-telegram-bot-api');
const cron = require('node-cron');
require('dotenv').config();

const { matnAlJazariyyah, dailySchedule, quizQuestions } = require('./data/jazariyyah');

// Initialize bot
const token = process.env.BOT_TOKEN;
if (!token) {
  console.error('Error: BOT_TOKEN is not set in environment variables');
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

// Store user progress and settings
const userData = new Map();

// Helper function to get user data
function getUserData(chatId) {
  if (!userData.has(chatId)) {
    userData.set(chatId, {
      currentSection: 1,
      studyStreak: 0,
      lastStudyDate: null,
      quizScores: [],
      dailyReminder: false,
      reminderTime: '08:00'
    });
  }
  return userData.get(chatId);
}

// Helper function to save user data
function saveUserData(chatId, data) {
  userData.set(chatId, data);
}

// Format section message
function formatSection(section) {
  return `
📖 *Section ${section.section}: ${section.title}*

📝 *Arabic:*
${section.arabic}

🔤 *Transliteration:*
${section.transliteration}

🌐 *Translation:*
${section.translation}

💡 *Explanation:*
${section.explanation}
`;
}

// Start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const user = getUserData(chatId);
  
  const welcomeMessage = `
🌟 *Welcome to Matn al-Jazariyyah Bot!* 🌟

Assalamu alaykum! This bot will help you study and memorize *Matn al-Jazariyyah*, the classical poem on Tajweed rules by Imam Ibn al-Jazari.

📚 *What you can do:*
• Study daily sections
• Test your knowledge with quizzes
• Track your progress
• Set daily reminders

*Available Commands:*
/study - Start studying today's section
/section [number] - Study a specific section
/progress - View your progress
/quiz - Test your knowledge
/schedule - View study schedule
/reminder - Set daily reminder
/help - Show all commands

Let's begin your journey to mastering Tajweed! 🎯
`;

  bot.sendMessage(chatId, welcomeMessage, { parse_mode: 'Markdown' });
});

// Help command
bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  
  const helpMessage = `
📖 *Matn al-Jazariyyah Bot - Commands*

*Study Commands:*
/study - Study today's daily section
/section [1-20] - Study a specific section
/next - Go to next section
/prev - Go to previous section

*Progress & Quiz:*
/progress - View your study progress and streak
/quiz - Take a quiz to test your knowledge
/score - View your quiz scores

*Schedule & Reminders:*
/schedule - View the 10-day study schedule
/reminder - Toggle daily reminders on/off
/remindat [HH:MM] - Set reminder time (default: 08:00)

*Other:*
/search [keyword] - Search for a topic
/allsections - List all section titles
/about - About Matn al-Jazariyyah

*Tips:*
• Study daily to maintain your streak!
• Use /quiz after studying to reinforce learning
• Set a daily reminder to stay consistent
`;

  bot.sendMessage(chatId, helpMessage, { parse_mode: 'Markdown' });
});

// Study command - show today's section
bot.onText(/\/study/, (msg) => {
  const chatId = msg.chat.id;
  const user = getUserData(chatId);
  
  // Get current day of the 10-day cycle
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const dayOfCycle = dayOfYear % 10;
  
  const sectionsToday = dailySchedule[dayOfCycle] || [1, 2];
  
  // Send first section
  const section = matnAlJazariyyah.find(s => s.section === sectionsToday[0]);
  if (section) {
    bot.sendMessage(chatId, formatSection(section), { 
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: [
          [{ text: '📖 Next Section', callback_data: `section_${sectionsToday[1]}` }],
          [{ text: '📝 Take Quiz', callback_data: 'quiz' }]
        ]
      }
    });
    
    // Update user progress
    user.currentSection = sectionsToday[0];
    user.lastStudyDate = new Date().toISOString().split('T')[0];
    saveUserData(chatId, user);
  }
});

// Section command - study specific section
bot.onText(/\/section\s*(\d*)/, (msg, match) => {
  const chatId = msg.chat.id;
  const sectionNum = parseInt(match[1]);
  
  if (!sectionNum || sectionNum < 1 || sectionNum > 20) {
    bot.sendMessage(chatId, 'Please specify a section number between 1 and 20. Example: /section 5');
    return;
  }
  
  const section = matnAlJazariyyah.find(s => s.section === sectionNum);
  if (section) {
    const keyboard = [];
    if (sectionNum > 1) {
      keyboard.push({ text: '⬅️ Previous', callback_data: `section_${sectionNum - 1}` });
    }
    if (sectionNum < 20) {
      keyboard.push({ text: 'Next ➡️', callback_data: `section_${sectionNum + 1}` });
    }
    
    bot.sendMessage(chatId, formatSection(section), { 
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: [keyboard, [{ text: '📝 Take Quiz', callback_data: 'quiz' }]]
      }
    });
    
    // Update user progress
    const user = getUserData(chatId);
    user.currentSection = sectionNum;
    saveUserData(chatId, user);
  }
});

// Next command
bot.onText(/\/next/, (msg) => {
  const chatId = msg.chat.id;
  const user = getUserData(chatId);
  
  if (user.currentSection < 20) {
    const nextSection = user.currentSection + 1;
    const section = matnAlJazariyyah.find(s => s.section === nextSection);
    if (section) {
      bot.sendMessage(chatId, formatSection(section), { 
        parse_mode: 'Markdown',
        reply_markup: {
          inline_keyboard: [
            [
              { text: '⬅️ Previous', callback_data: `section_${nextSection - 1}` },
              ...(nextSection < 20 ? [{ text: 'Next ➡️', callback_data: `section_${nextSection + 1}` }] : [])
            ],
            [{ text: '📝 Take Quiz', callback_data: 'quiz' }]
          ]
        }
      });
      user.currentSection = nextSection;
      saveUserData(chatId, user);
    }
  } else {
    bot.sendMessage(chatId, '🎉 Congratulations! You have completed all 20 sections of Matn al-Jazariyyah!');
  }
});

// Previous command
bot.onText(/\/prev/, (msg) => {
  const chatId = msg.chat.id;
  const user = getUserData(chatId);
  
  if (user.currentSection > 1) {
    const prevSection = user.currentSection - 1;
    const section = matnAlJazariyyah.find(s => s.section === prevSection);
    if (section) {
      bot.sendMessage(chatId, formatSection(section), { 
        parse_mode: 'Markdown',
        reply_markup: {
          inline_keyboard: [
            [
              ...(prevSection > 1 ? [{ text: '⬅️ Previous', callback_data: `section_${prevSection - 1}` }] : []),
              { text: 'Next ➡️', callback_data: `section_${prevSection + 1}` }
            ],
            [{ text: '📝 Take Quiz', callback_data: 'quiz' }]
          ]
        }
      });
      user.currentSection = prevSection;
      saveUserData(chatId, user);
    }
  } else {
    bot.sendMessage(chatId, 'You are at the first section. Use /next to continue.');
  }
});

// Progress command
bot.onText(/\/progress/, (msg) => {
  const chatId = msg.chat.id;
  const user = getUserData(chatId);
  
  const completedSections = user.currentSection;
  const percentage = Math.round((completedSections / 20) * 100);
  const progressBar = '█'.repeat(Math.floor(percentage / 10)) + '░'.repeat(10 - Math.floor(percentage / 10));
  
  const progressMessage = `
📊 *Your Progress*

${progressBar} ${percentage}%

✅ Sections completed: ${completedSections}/20
📍 Current section: ${user.currentSection}
🔥 Study streak: ${user.studyStreak} days

Keep going! You're doing great! 💪
`;

  bot.sendMessage(chatId, progressMessage, { parse_mode: 'Markdown' });
});

// Quiz command
bot.onText(/\/quiz/, (msg) => {
  const chatId = msg.chat.id;
  sendQuiz(chatId);
});

// Score command
bot.onText(/\/score/, (msg) => {
  const chatId = msg.chat.id;
  const user = getUserData(chatId);
  
  if (user.quizScores.length === 0) {
    bot.sendMessage(chatId, '📝 You haven\'t taken any quizzes yet. Use /quiz to start!');
    return;
  }
  
  const totalQuizzes = user.quizScores.length;
  const averageScore = (user.quizScores.reduce((a, b) => a + b, 0) / totalQuizzes).toFixed(1);
  const highestScore = Math.max(...user.quizScores);
  
  const scoreMessage = `
🏆 *Your Quiz Statistics*

📝 Total quizzes taken: ${totalQuizzes}
⭐ Average score: ${averageScore}%
🥇 Highest score: ${highestScore}%

Keep practicing to improve your Tajweed knowledge!
`;

  bot.sendMessage(chatId, scoreMessage, { parse_mode: 'Markdown' });
});

// Schedule command
bot.onText(/\/schedule/, (msg) => {
  const chatId = msg.chat.id;
  
  let scheduleMessage = `
📅 *10-Day Study Schedule*

The Matn al-Jazariyyah is divided into a 10-day study plan:

`;

  for (let day = 0; day < 10; day++) {
    const sections = dailySchedule[day];
    const sectionTitles = sections.map(s => {
      const section = matnAlJazariyyah.find(sec => sec.section === s);
      return section ? section.title : '';
    }).join(' & ');
    scheduleMessage += `*Day ${day + 1}:* Sections ${sections[0]}-${sections[1]}\n${sectionTitles}\n\n`;
  }

  scheduleMessage += '\n💡 Use /study to start today\'s sections!';
  
  bot.sendMessage(chatId, scheduleMessage, { parse_mode: 'Markdown' });
});

// Reminder command
bot.onText(/\/reminder/, (msg) => {
  const chatId = msg.chat.id;
  const user = getUserData(chatId);
  
  user.dailyReminder = !user.dailyReminder;
  saveUserData(chatId, user);
  
  const status = user.dailyReminder ? 'ON ✅' : 'OFF ❌';
  const timeMsg = user.dailyReminder ? `\n⏰ Reminder time: ${user.reminderTime}` : '';
  
  bot.sendMessage(chatId, `🔔 Daily reminders are now ${status}${timeMsg}\n\nUse /remindat HH:MM to change the time (e.g., /remindat 07:30)`);
});

// RemindAt command
bot.onText(/\/remindat\s*(\d{1,2}:\d{2})/, (msg, match) => {
  const chatId = msg.chat.id;
  const user = getUserData(chatId);
  const time = match[1];
  
  user.reminderTime = time;
  saveUserData(chatId, user);
  
  bot.sendMessage(chatId, `⏰ Reminder time set to ${time}\n\nMake sure to turn on reminders with /reminder!`);
});

// All sections command
bot.onText(/\/allsections/, (msg) => {
  const chatId = msg.chat.id;
  
  let sectionsMessage = '📚 *All Sections of Matn al-Jazariyyah*\n\n';
  
  matnAlJazariyyah.forEach(section => {
    sectionsMessage += `${section.section}. ${section.title}\n`;
  });
  
  sectionsMessage += '\nUse /section [number] to study a specific section.';
  
  bot.sendMessage(chatId, sectionsMessage, { parse_mode: 'Markdown' });
});

// About command
bot.onText(/\/about/, (msg) => {
  const chatId = msg.chat.id;
  
  const aboutMessage = `
📖 *About Matn al-Jazariyyah*

*Matn al-Jazariyyah* (also known as *al-Muqaddimah al-Jazariyyah*) is a classical poem written by Imam *Muhammad ibn Muhammad al-Jazari* (751-833 AH / 1350-1429 CE).

*About the Author:*
Imam al-Jazari was a renowned scholar of Qira'at (Quranic recitations) and Tajweed. He was born in Damascus and traveled extensively to study under the leading scholars of his time.

*About the Text:*
This poem contains approximately 100 lines covering all the fundamental rules of Tajweed, including:
• Makharij (places of articulation)
• Sifat (characteristics of letters)
• Rules of noon saakinah and tanween
• Rules of meem saakinah
• Madd (prolongation)
• Waqf (stopping rules)

It is one of the most widely studied texts in Tajweed and is memorized by students of the Quran worldwide.

May Allah reward the author and benefit us through his knowledge. 🤲
`;

  bot.sendMessage(chatId, aboutMessage, { parse_mode: 'Markdown' });
});

// Search command
bot.onText(/\/search\s*(.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const keyword = match[1].toLowerCase();
  
  const results = matnAlJazariyyah.filter(section => 
    section.title.toLowerCase().includes(keyword) ||
    section.arabic.includes(keyword) ||
    section.explanation.toLowerCase().includes(keyword)
  );
  
  if (results.length === 0) {
    bot.sendMessage(chatId, `❌ No results found for "${match[1]}". Try another keyword.`);
    return;
  }
  
  let searchMessage = `🔍 *Search Results for "${match[1]}"*\n\n`;
  results.forEach(section => {
    searchMessage += `${section.section}. ${section.title}\n`;
  });
  searchMessage += '\nUse /section [number] to view a section.';
  
  bot.sendMessage(chatId, searchMessage, { parse_mode: 'Markdown' });
});

// Handle callback queries
bot.on('callback_query', (callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const data = callbackQuery.data;
  
  if (data.startsWith('section_')) {
    const sectionNum = parseInt(data.split('_')[1]);
    const section = matnAlJazariyyah.find(s => s.section === sectionNum);
    
    if (section) {
      const keyboard = [];
      if (sectionNum > 1) {
        keyboard.push({ text: '⬅️ Previous', callback_data: `section_${sectionNum - 1}` });
      }
      if (sectionNum < 20) {
        keyboard.push({ text: 'Next ➡️', callback_data: `section_${sectionNum + 1}` });
      }
      
      bot.editMessageText(formatSection(section), {
        chat_id: chatId,
        message_id: callbackQuery.message.message_id,
        parse_mode: 'Markdown',
        reply_markup: {
          inline_keyboard: [keyboard, [{ text: '📝 Take Quiz', callback_data: 'quiz' }]]
        }
      });
      
      // Update user progress
      const user = getUserData(chatId);
      user.currentSection = sectionNum;
      saveUserData(chatId, user);
    }
  } else if (data === 'quiz') {
    sendQuiz(chatId);
  } else if (data.startsWith('quiz_')) {
    const parts = data.split('_');
    const questionIndex = parseInt(parts[1]);
    const selectedOption = parseInt(parts[2]);
    const correctOption = parseInt(parts[3]);
    
    const isCorrect = selectedOption === correctOption;
    const question = quizQuestions[questionIndex];
    
    // Update user score
    const user = getUserData(chatId);
    if (!user.currentQuiz) {
      user.currentQuiz = { score: 0, total: 0 };
    }
    user.currentQuiz.total++;
    if (isCorrect) user.currentQuiz.score++;
    saveUserData(chatId, user);
    
    const resultEmoji = isCorrect ? '✅' : '❌';
    const resultText = isCorrect ? 'Correct!' : `Wrong! The correct answer was: ${question.options[correctOption]}`;
    
    bot.answerCallbackQuery(callbackQuery.id, { text: resultText });
    
    // Send explanation and next question
    setTimeout(() => {
      bot.sendMessage(chatId, `${resultEmoji} ${resultText}\n\n💡 *Explanation:* ${question.explanation}`, { parse_mode: 'Markdown' });
      
      // Send next question after a delay
      setTimeout(() => {
        const nextIndex = Math.floor(Math.random() * quizQuestions.length);
        sendQuizQuestion(chatId, nextIndex);
      }, 2000);
    }, 500);
  }
});

// Send quiz to user
function sendQuiz(chatId) {
  const randomIndex = Math.floor(Math.random() * quizQuestions.length);
  sendQuizQuestion(chatId, randomIndex);
}

// Send a specific quiz question
function sendQuizQuestion(chatId, questionIndex) {
  const question = quizQuestions[questionIndex];
  
  const keyboard = question.options.map((option, index) => [{
    text: option,
    callback_data: `quiz_${questionIndex}_${index}_${question.correct}`
  }]);
  
  bot.sendMessage(chatId, `📝 *Quiz Question*\n\n${question.question}`, {
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: keyboard
    }
  });
}

// Daily reminder cron job (runs every minute to check for reminders)
cron.schedule('* * * * *', () => {
  const now = new Date();
  const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  
  userData.forEach((user, chatId) => {
    if (user.dailyReminder && user.reminderTime === currentTime) {
      bot.sendMessage(chatId, `
🌅 *Good Morning! Time to Study!*

It's time for your daily Matn al-Jazariyyah study session.

Use /study to begin today's lesson.

May Allah bless your efforts! 🤲
      `, { parse_mode: 'Markdown' });
    }
  });
});

// Error handler
bot.on('error', (error) => {
  console.error('Bot error:', error);
});

// Polling error handler
bot.on('polling_error', (error) => {
  console.error('Polling error:', error);
});

console.log('🤖 Matn al-Jazariyyah Bot is running!');
console.log('📚 Ready to help you study Tajweed!');

// Keep the process alive
process.on('SIGINT', () => {
  console.log('\n👋 Bot is shutting down...');
  bot.stopPolling();
  process.exit(0);
});
