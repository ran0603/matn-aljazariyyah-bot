// Matn al-Jazariyyah - Classical Arabic poem on Tajweed rules
// Organized into sections for daily study

const matnAlJazariyyah = [
  {
    section: 1,
    title: "Introduction and Basmalah",
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\n\nالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ وَصَلَّى اللَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ أَجْمَعِينَ",
    transliteration: "Bismillahi r-rahmani r-rahim\n\nAlhamdu lillahi rabbi l-alameen, wa sallallahu ala sayyidina Muhammadin wa ala alihi wa sahbihi ajma'een",
    translation: "In the name of Allah, the Most Gracious, the Most Merciful\n\nAll praise is due to Allah, Lord of the Worlds, and may Allah's peace and blessings be upon our master Muhammad and upon his family and companions all.",
    explanation: "The author begins with the basmalah and hamdalah, following the sunnah of starting books with the name of Allah and praising Him."
  },
  {
    section: 2,
    title: "The Purpose of the Book",
    arabic: "أَمَّا بَعْدُ فَإِنِّي وَإِنْ كُنْتُ ذَا عِلْمٍ بِأُصُولِ التَّجْوِيدِ وَفَرْعِهِ لَكِنَّنِي لَمْ أَكُنْ أَعْرِفُ مَا فِيهِ مِنَ الْمُشْكِلِ مِنْ غَيْرِ مُشْكِلٍ",
    transliteration: "Amma ba'du fa-inni wa in kuntu dha 'ilmin bi usuli t-tajwidi wa far'ihi lakinni lam akun a'rifu ma fihi mina l-mushkili min ghayri mushkilin",
    translation: "As for what follows, although I have knowledge of the principles and branches of Tajweed, I did not know what was difficult in it without difficulty.",
    explanation: "The author explains that despite his knowledge, he found some aspects of Tajweed challenging and sought to clarify them."
  },
  {
    section: 3,
    title: "The Seventeen Makharij",
    arabic: "مَخَارِجُ الْحُرُوفِ سَبْعَةَ عَشَرَ عَلَى الَّذِي يَتَقَرَّبُ فَافْهَمْ وَاعْمَلْ بِمَا أَنْتَ مُسْتَعْلِمُ",
    transliteration: "Makhariju l-hurufi sab'ata 'ashara 'ala lladhi yataqarrabu fa-fham wa'mal bima anta musta'limu",
    translation: "The exits of the letters are seventeen according to what is closest - so understand and act upon what you are learning.",
    explanation: "The author introduces the 17 places of articulation (makharij) for Arabic letters, which is the foundation of correct pronunciation."
  },
  {
    section: 4,
    title: "The Jawf (Empty Space in the Mouth)",
    arabic: "الْجَوْفُ مَخْرَجُ الْهَوَاءِ لِلْمَدِّ وَالْحَرْفِ ثَلَاثَةٌ وَهْيَ أَلِفٌ وَوَاوٌ وَيَاءٌ سَاكِنَانِ فَافْهَمْ",
    transliteration: "Al-jawfu makhraju l-hawa'i li l-maddi wa l-harfi thalathatun wa hiya alifun wa wawun wa ya'un sakinani fa-fham",
    translation: "The jawf (empty space in the mouth) is the exit of air for prolongation (madd) and the letter - three: and they are alif, waw, and ya when they are saakin (have sukoon) - so understand.",
    explanation: "The jawf is the empty space in the mouth and throat. It is the makhraj for the three madd letters: alif (ا), waw (و), and ya (ي) when they are saakin."
  },
  {
    section: 5,
    title: "The Throat Letters (Halq)",
    arabic: "وَأَقْصَى الْحَلْقِ أَلِفٌ وَهْمَزَةٌ وَأَدْنَاهُمَا الْعَيْنُ وَالْحَاءُ وَأَوْسَطُهُمَا حَقِيقَةٌ عِنْدَ أَهْلِ الْعَرَبِيَّةِ الْغُرَّاءِ",
    transliteration: "Wa aqsalu l-halqi alifun wa hamzatun wa adnahuma l-'aynu wa l-ha'u wa awsatuhuma haqeeqatun 'inda ahli l-'arabiyyati l-ghurra'i",
    translation: "And the furthest of the throat is alif and hamzah, and the closest of them is 'ayn and ha, and the middle of them is the reality according to the people of pure Arabic.",
    explanation: "The throat (halq) is divided into three parts: the lowest part for hamzah (ء) and ha (هـ), the middle for 'ayn (ع) and ha (ح), and the highest for ghayn (غ) and kha (خ)."
  },
  {
    section: 6,
    title: "The Tongue Letters (Lisan)",
    arabic: "وَأَكْثَرُ الْحُرُوفِ مِنْ لِسَانٍ وَقَدْ تَمَكَّنَتْ مِنْهُ أَوَائِلُ مَخَارِجِهِ وَهْيَ الْقَافُ وَالْكَافُ وَالْأَشْدَقَانِ",
    transliteration: "Wa aktharu l-hurufi min lisanin wa qad tamakkanat minhu awa'ilu makharijihi wa hiya l-qafu wa l-kafu wa l-ashdaqani",
    translation: "And most of the letters are from the tongue, and the beginnings of its exits are established from it, and they are qaf, kaf, and the two sides (of the tongue).",
    explanation: "The majority of Arabic letters (18 out of 28) are pronounced using the tongue. The furthest back are qaf (ق) and kaf (ك)."
  },
  {
    section: 7,
    title: "The Middle of the Tongue",
    arabic: "وَأَوْسَطُ اللِّسَانِ وَمَا يَحْتَكُّ بِهِ مِنَ الْحَنَكِ الْأَعْلَى الْجِيمُ وَالشِّينُ وَالْيَاءُ مَعَ الضَّادِ وَاللَّامِ",
    transliteration: "Wa awsatu l-lisani wa ma yahtakku bihi mina l-hanaki l-a'la l-jimu wa sh-shinu wa l-ya'u ma'a d-dadi wa l-lami",
    translation: "And the middle of the tongue and what it touches of the upper palate: jeem, sheen, and ya with dad and lam.",
    explanation: "The middle of the tongue touches the hard palate to produce jeem (ج), sheen (ش), ya (ي), dad (ض), and lam (ل)."
  },
  {
    section: 8,
    title: "The Tip of the Tongue",
    arabic: "وَأَطْرَافُ اللِّسَانِ مَعَ أَطْرَافِ الثَّنَايَا النُّونُ وَالرَّاءُ وَالطَّاءُ وَالدَّالُ وَالصَّادُ وَالْفَاءُ وَالْمِيمُ وَالتَّاءُ",
    transliteration: "Wa atrafu l-lisani ma'a atrafi th-thanaya n-nunu wa r-ra'u wa t-ta'u wa d-dalu wa s-sadu wa l-fa'u wa l-mimu wa t-ta'u",
    translation: "And the tip of the tongue with the tips of the front teeth: noon, ra, ta, dal, sad, fa, meem, and ta.",
    explanation: "The tip of the tongue produces several letters when touching or near the front teeth: noon (ن), ra (ر), ta (ط), dal (د), sad (ص), fa (ف), meem (م), and ta (ت)."
  },
  {
    section: 9,
    title: "The Lips (Shafatayn)",
    arabic: "وَالشَّفَتَانِ مِنْهُمَا الْفَاءُ وَالْبَاءُ وَالْمِيمُ وَوَاوُ الْمَدِّ وَالْوَاوُ الْمُضَمَّمَةُ وَالْمُسَكَّنَةُ",
    transliteration: "Wa sh-shafatayni minhima l-fa'u wa l-ba'u wa l-mimu wa wawu l-maddi wa l-wawu l-mudammamu wa l-musakkana",
    translation: "And from the two lips: fa, ba, meem, waw of madd, and the waw that is dammah or sukoon.",
    explanation: "The lips are used for fa (ف), ba (ب), meem (م), and waw (و) when it is a madd letter or has dammah or sukoon."
  },
  {
    section: 10,
    title: "The Nasal Cavity (Khayshum)",
    arabic: "وَالْخَيْشُومُ مَخْرَجُ الْغُنَّةِ وَهْيَ فِي النُّونِ وَالْمِيمِ الْمُشَدَّدَتَيْنِ وَإِذَا أَدْغَمْتَ فِي بَعْضِ الْحُرُوفِ",
    transliteration: "Wa l-khayshumu makhraju l-ghunnati wa hiya fi n-nuni wa l-mimi l-mushaddadayni wa idha adghamta fi ba'di l-hurufi",
    translation: "And the nasal cavity is the exit of the ghunnah (nasalization), and it is in the noon and meem when they are shaddah (doubled), and when you do idgham (merging) into some letters.",
    explanation: "The khayshum (nasal cavity) produces the ghunnah sound, which occurs in doubled noon (ن) and meem (م), and during idgham of noon saakinah or tanween."
  },
  {
    section: 11,
    title: "The Characteristics of Letters (Sifat)",
    arabic: "وَصِفَاتُ الْحُرُوفِ جَمْعُهَا سَبْعَةَ عَشَرَ وَفِي ذِكْرِهَا وَشَرْحِهَا سَعَةٌ وَتَفْصِيلٌ",
    transliteration: "Wa sifatu l-hurufi jami'uha sab'ata 'ashara wa fi dhikriha wa sharhiha sa'atun wa tafsilun",
    translation: "And the characteristics of the letters, their total is seventeen, and in mentioning them and explaining them is breadth and detail.",
    explanation: "Each Arabic letter has specific characteristics (sifat) that distinguish it from other letters. There are 17 main characteristics."
  },
  {
    section: 12,
    title: "The Heavy and Light Letters (Tafkheem & Tarqeeq)",
    arabic: "التَّفْخِيمُ اسْتِعْلَاءُ اللِّسَانِ إِلَى الْحَنَكِ فَافْهَمْ وَالتَّرْقِيقُ اسْفَالُهُ إِلَى لَحَاتِ الْفَمِ",
    transliteration: "At-tafkheemu isti'la'u l-lisani ila l-hanaki fa-fham wa t-tarqiqu isfaluhu ila lahati l-fami",
    translation: "Tafkheem (heaviness) is the raising of the tongue to the palate - so understand, and tarqeeq (lightness) is its lowering to the bottom of the mouth.",
    explanation: "Tafkheem makes the letter heavy and full, while tarqeeq makes it light. Seven letters are always heavy: خ ص ض غ ط ق ظ."
  },
  {
    section: 13,
    title: "The Rules of Noon Saakinah and Tanween",
    arabic: "إِذَا كَانَ النُّونُ السَّاكِنَةُ أَوْ التَّنْوِينُ فَلَهَا أَحْكَامٌ أَرْبَعَةٌ فَامْنَحْهَا كُلَّ حَقٍّ وَافْهَمْ مَعْنَى الْمَعَانِي",
    transliteration: "Idha kana n-nunu s-sakinatu aw t-tanwinu fa-laha ahkamun arba'atun fa-mnahha kulla haqqin wa-fham ma'na l-ma'ani",
    translation: "When there is noon saakinah or tanween, then it has four rules - so give each its right and understand the meaning of the meanings.",
    explanation: "Noon saakinah (نْ) and tanween (ًٌٍ) have four rules: idgham (merging), ikhfa (hiding), iqlab (changing), and izhar (clear pronunciation)."
  },
  {
    section: 14,
    title: "Idgham (Merging)",
    arabic: "فَالْإِدْغَامُ بِحَرْفِ يَرْمُلُونَ وَالْإِخْفَاءُ بِالْحُرُوفِ الْبَاقِيَةِ وَالْإِقْلَابُ بِالْبَاءِ وَالظَّاهِرُ بِالْحَلْقِ",
    transliteration: "Fa-l-idghamu bi-harfi yarmuluna wa-l-ikhfa'u bi-l-hurufi l-baqiyati wa-l-iqlabu bi-l-ba'i wa-z-zahiru bi-l-halqi",
    translation: "So idgham is with the letters of يَرْمُلُونَ, and ikhfa is with the remaining letters, and iqlab is with ba, and the apparent (izhar) is with the throat letters.",
    explanation: "Idgham merges noon saakinah/tanween into ي ر م ل و ن. Ikhfa hides it before the other letters. Iqlab changes it to meem before ب. Izhar makes it clear before throat letters."
  },
  {
    section: 15,
    title: "The Rules of Meem Saakinah",
    arabic: "وَالْمِيمُ السَّاكِنَةُ إِنْ تَسَكَّنَتْ لَهَا أَحْكَامٌ ثَلَاثَةٌ فَافْهَمْهَا مِنِّي وَاعْمَلْ بِالْمَعَانِي",
    transliteration: "Wa l-mimu s-sakinatu in taskanat laha ahkamun thalathatun fa-fhamha minni wa'mal bi-l-ma'ani",
    translation: "And the meem saakinah, if it has sukoon, it has three rules - so understand them from me and act upon the meanings.",
    explanation: "Meem saakinah (مْ) has three rules: idgham shafawi (merging into meem), ikhfa shafawi (hiding before ba), and izhar shafawi (clear pronunciation before other letters)."
  },
  {
    section: 16,
    title: "Prolongation (Madd)",
    arabic: "وَالْمَدُّ حَرَكَتَانِ يَتَوَسَّطُهُمَا حَرْفُ مَدٍّ وَهْوَ الْهَمْزَةُ أَوْ السُّكُونُ فَافْهَمْ وَاعْمَلْ",
    transliteration: "Wa l-maddu harakatani yatawassatuhuma harfu maddin wa huwa l-hamzatu aw s-sukunu fa-fham wa'mal",
    translation: "And madd is two harakahs (vowel counts) with a madd letter between them, and it is hamzah or sukoon - so understand and act.",
    explanation: "Madd (prolongation) occurs when a madd letter (ا و ي) is followed by hamzah or sukoon. The basic madd is 2 counts (harakahs)."
  },
  {
    section: 17,
    title: "Types of Madd",
    arabic: "فَأَمَّا الْمَدُّ الْأَصْلِيُّ فَهُوَ الثَّانِيَانِ وَالْمَدُّ الْفَرْعِيُّ أَرْبَعَةٌ أَقْسَامٌ فَافْهَمْهَا",
    transliteration: "Fa-amma l-maddu l-asliyu fa-huwa th-thaniyani wa l-maddu l-far'iyyu arba'atun aqsamun fa-fhamha",
    translation: "As for the original madd, it is the two (counts), and the branch madd is four categories - so understand them.",
    explanation: "Madd asli (natural prolongation) is 2 counts. Madd far'i (secondary prolongation) has four types: muttasil, munfasil, badal, and lazim."
  },
  {
    section: 18,
    title: "Madd Muttasil and Munfasil",
    arabic: "الْمُتَّصِلُ وَالْمُنْفَصِلُ وَالْبَدَلُ وَاللَّازِمُ الْمُتَّصِلُ خَمْسَةٌ وَأَرْبَعُونَ حَرَكَةً",
    transliteration: "Al-muttasilu wa l-munfasilu wa l-badalu wa l-lazimu l-muttasilu khamsatun wa arba'una harakatan",
    translation: "The connected, the separated, the substitute, and the necessary - the connected is forty-five harakahs (at its longest).",
    explanation: "Madd muttasil (connected) is when hamzah follows the madd letter in the same word. Madd munfasil (separated) is when hamzah is in the next word."
  },
  {
    section: 19,
    title: "Stopping and Starting (Waqf and Ibtida)",
    arabic: "وَأَمَّا الْوَقْفُ فَحَسَنٌ وَكَافٍ وَطَامِسٌ وَقَبِيحٌ وَمَكْرُوهٌ وَمَحْظُورٌ فَافْهَمْ مَعَانِيَهَا",
    transliteration: "Wa amma l-waqfu fa-hasanun wa kafin wa tamisun wa qabihun wa makruhun wa mahzurun fa-fham ma'aniyaha",
    translation: "As for stopping (waqf), it is: good, sufficient, obscure, ugly, disliked, and forbidden - so understand their meanings.",
    explanation: "There are six types of stopping places in the Quran: hasan (good), kafi (sufficient), tamis (obscure), qabih (ugly), makruh (disliked), and mahzur (forbidden)."
  },
  {
    section: 20,
    title: "Conclusion",
    arabic: "فَإِنْ تَحَرَّيْتَ الصَّوَابَ فِي هَذَا الْمَتْنِ فَقَدْ نَلْتَ الْمَطْلُوبَ وَحَازَ الْفَضْلَ مَنْ يَعْمَلُ بِهِ",
    transliteration: "Fa-in taharrayta s-sawaba fi hadha l-matni fa-qad nalta l-matluba wa haza l-fadla man ya'malu bihi",
    translation: "So if you seek correctness in this text, then you have attained what is sought, and he who acts upon it has obtained virtue.",
    explanation: "The author concludes by encouraging the reader to study and apply the rules of this matn to achieve correctness in recitation."
  }
];

// Daily study schedule - maps day to sections
const dailySchedule = {
  0: [1, 2],      // Sunday
  1: [3, 4],      // Monday
  2: [5, 6],      // Tuesday
  3: [7, 8],      // Wednesday
  4: [9, 10],     // Thursday
  5: [11, 12],    // Friday
  6: [13, 14],    // Saturday
  7: [15, 16],    // Week 2 Sunday
  8: [17, 18],    // Week 2 Monday
  9: [19, 20]     // Week 2 Tuesday
};

// Quiz questions for memorization testing
const quizQuestions = [
  {
    question: "How many makharij (places of articulation) are there for Arabic letters?",
    options: ["14", "15", "17", "19"],
    correct: 2,
    explanation: "There are 17 makharij for the Arabic letters."
  },
  {
    question: "Which letters are pronounced from the jawf (empty space in the mouth)?",
    options: ["Alif, Waw, Ya", "Hamzah, Ha, Ayn", "Qaf, Kaf", "Fa, Ba, Meem"],
    correct: 0,
    explanation: "The three madd letters - alif (ا), waw (و), and ya (ي) - are pronounced from the jawf when they are saakin."
  },
  {
    question: "What are the letters of idgham (merging) for noon saakinah?",
    options: ["ق ط ب ج د", "ي ر م ل و ن", "ء ه ع ح غ خ", "ص ض ط ظ ك"],
    correct: 1,
    explanation: "The letters of idgham are ي ر م ل و ن (yarmulun)."
  },
  {
    question: "How many rules does noon saakinah and tanween have?",
    options: ["2", "3", "4", "5"],
    correct: 2,
    explanation: "Noon saakinah and tanween have four rules: idgham, ikhfa, iqlab, and izhar."
  },
  {
    question: "What is the makhraj of ghunnah (nasalization)?",
    options: ["The tongue", "The throat", "The nasal cavity (khayshum)", "The lips"],
    correct: 2,
    explanation: "The khayshum (nasal cavity) is the makhraj of ghunnah."
  },
  {
    question: "Which letters are always pronounced with tafkheem (heaviness)?",
    options: ["خ ص ض غ ط ق ظ", "ب ت ث ج ح خ", "د ذ ر ز س ش", "ف ق ك ل م ن"],
    correct: 0,
    explanation: "The seven letters that are always heavy are: خ ص ض غ ط ق ظ."
  },
  {
    question: "How many rules does meem saakinah have?",
    options: ["2", "3", "4", "5"],
    correct: 1,
    explanation: "Meem saakinah has three rules: idgham shafawi, ikhfa shafawi, and izhar shafawi."
  },
  {
    question: "What is the basic duration of madd asli (original prolongation)?",
    options: ["1 harakah", "2 harakahs", "4 harakahs", "6 harakahs"],
    correct: 1,
    explanation: "Madd asli (natural/original madd) is 2 harakahs (counts)."
  }
];

module.exports = {
  matnAlJazariyyah,
  dailySchedule,
  quizQuestions
};
