# 🤖 Matn al-Jazariyyah Telegram Bot

A Telegram bot to help you study and memorize **Matn al-Jazariyyah**, the classical poem on Tajweed rules by Imam Ibn al-Jazari.

## Features

📚 **Study Features:**
- Daily study sections following a 10-day schedule
- All 20 sections of Matn al-Jazariyyah with Arabic text, transliteration, translation, and explanation
- Progress tracking with study streaks
- Search functionality

📝 **Quiz Features:**
- Interactive quizzes to test your knowledge
- Score tracking and statistics
- Explanations for each question

⏰ **Reminder Features:**
- Daily study reminders
- Customizable reminder times

## Commands

| Command | Description |
|---------|-------------|
| `/start` | Start the bot and see welcome message |
| `/study` | Study today's daily section |
| `/section [number]` | Study a specific section (1-20) |
| `/next` | Go to next section |
| `/prev` | Go to previous section |
| `/progress` | View your study progress and streak |
| `/quiz` | Take a quiz to test your knowledge |
| `/score` | View your quiz statistics |
| `/schedule` | View the 10-day study schedule |
| `/reminder` | Toggle daily reminders on/off |
| `/remindat [HH:MM]` | Set reminder time (e.g., `/remindat 07:30`) |
| `/allsections` | List all section titles |
| `/search [keyword]` | Search for a topic |
| `/about` | About Matn al-Jazariyyah |
| `/help` | Show all commands |

## Deployment to Render.com

### Step 1: Create a Telegram Bot

1. Open Telegram and search for **@BotFather**
2. Start a chat and send `/newbot`
3. Follow the prompts to name your bot
4. Save the **bot token** you receive

### Step 2: Deploy to Render

#### Option A: Deploy with Render Blueprint (Recommended)

1. Fork or push this repository to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com/)
3. Click **"New +"** → **"Blueprint"**
4. Connect your GitHub repository
5. Render will automatically detect `render.yaml`
6. Add your bot token as an environment variable:
   - Key: `BOT_TOKEN`
   - Value: Your bot token from @BotFather
7. Click **"Apply"**

#### Option B: Manual Deployment

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository or upload files
4. Configure:
   - **Name:** `matn-aljazariyyah-bot`
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Add environment variable:
   - Key: `BOT_TOKEN`
   - Value: Your bot token from @BotFather
6. Click **"Create Web Service"**

### Step 3: Test Your Bot

1. Open Telegram and search for your bot by username
2. Send `/start` to begin
3. Use `/study` to start learning!

## Local Development

### Prerequisites

- Node.js 18+ installed
- A Telegram bot token from @BotFather

### Setup

1. Clone the repository:
```bash
git clone <your-repo-url>
cd jazariyyah-bot
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```bash
cp .env.example .env
```

4. Edit `.env` and add your bot token:
```
BOT_TOKEN=your_bot_token_here
```

5. Start the bot:
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

## Project Structure

```
jazariyyah-bot/
├── data/
│   └── jazariyyah.js      # Matn al-Jazariyyah content and quiz questions
├── index.js               # Main bot logic
├── package.json           # Dependencies
├── render.yaml            # Render deployment config
├── Dockerfile             # Docker configuration
├── .env.example           # Environment variables template
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## About Matn al-Jazariyyah

**Matn al-Jazariyyah** (also known as *al-Muqaddimah al-Jazariyyah*) is a classical poem written by Imam **Muhammad ibn Muhammad al-Jazari** (751-833 AH / 1350-1429 CE).

This poem contains approximately 100 lines covering all the fundamental rules of Tajweed, including:
- Makharij (places of articulation)
- Sifat (characteristics of letters)
- Rules of noon saakinah and tanween
- Rules of meem saakinah
- Madd (prolongation)
- Waqf (stopping rules)

It is one of the most widely studied texts in Tajweed and is memorized by students of the Quran worldwide.

## License

MIT License - Feel free to use and modify!

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

---

May Allah accept our efforts and make us among those who recite the Quran with proper Tajweed. 🤲
