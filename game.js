// === Список неправильных глаголов ===
const verbs = [
    { base: "be", pastSimple: "was/were", pastParticiple: "been", translation: "быть", correctCount: 0 },
    { base: "begin", pastSimple: "began", pastParticiple: "begun", translation: "начинать", correctCount: 0 },
    { base: "break", pastSimple: "broke", pastParticiple: "broken", translation: "ломать", correctCount: 0 },
    { base: "bring", pastSimple: "brought", pastParticiple: "brought", translation: "приносить", correctCount: 0 },
    { base: "build", pastSimple: "built", pastParticiple: "built", translation: "строить", correctCount: 0 },
    { base: "buy", pastSimple: "bought", pastParticiple: "bought", translation: "покупать", correctCount: 0 },
    { base: "catch", pastSimple: "caught", pastParticiple: "caught", translation: "ловить", correctCount: 0 },
    { base: "choose", pastSimple: "chose", pastParticiple: "chosen", translation: "выбирать", correctCount: 0 },
    { base: "come", pastSimple: "came", pastParticiple: "come", translation: "приходить", correctCount: 0 },
    { base: "cost", pastSimple: "cost", pastParticiple: "cost", translation: "стоить", correctCount: 0 },
    { base: "cut", pastSimple: "cut", pastParticiple: "cut", translation: "резать", correctCount: 0 },
    { base: "do", pastSimple: "did", pastParticiple: "done", translation: "делать", correctCount: 0 },
    { base: "draw", pastSimple: "drew", pastParticiple: "drawn", translation: "рисовать", correctCount: 0 },
    { base: "drink", pastSimple: "drank", pastParticiple: "drunk", translation: "пить", correctCount: 0 },
    { base: "drive", pastSimple: "drove", pastParticiple: "driven", translation: "водить машину", correctCount: 0 },
    { base: "eat", pastSimple: "ate", pastParticiple: "eaten", translation: "есть", correctCount: 0 },
    { base: "fall", pastSimple: "fell", pastParticiple: "fallen", translation: "падать", correctCount: 0 },
    { base: "feel", pastSimple: "felt", pastParticiple: "felt", translation: "чувствовать", correctCount: 0 },
    { base: "find", pastSimple: "found", pastParticiple: "found", translation: "находить", correctCount: 0 },
    { base: "forget", pastSimple: "forgot", pastParticiple: "forgotten", translation: "забывать", correctCount: 0 },
    { base: "get", pastSimple: "got", pastParticiple: "got/gotten", translation: "получать", correctCount: 0 },
    { base: "give", pastSimple: "gave", pastParticiple: "given", translation: "давать", correctCount: 0 },
    { base: "go", pastSimple: "went", pastParticiple: "gone", translation: "идти", correctCount: 0 },
    { base: "grow", pastSimple: "grew", pastParticiple: "grown", translation: "расти", correctCount: 0 },
    { base: "have", pastSimple: "had", pastParticiple: "had", translation: "иметь", correctCount: 0 },
    { base: "hear", pastSimple: "heard", pastParticiple: "heard", translation: "слышать", correctCount: 0 },
    { base: "hold", pastSimple: "held", pastParticiple: "held", translation: "держать", correctCount: 0 },
    { base: "keep", pastSimple: "kept", pastParticiple: "kept", translation: "сохранять", correctCount: 0 },
    { base: "know", pastSimple: "knew", pastParticiple: "known", translation: "знать", correctCount: 0 },
    { base: "leave", pastSimple: "left", pastParticiple: "left", translation: "оставлять", correctCount: 0 },
    { base: "let", pastSimple: "let", pastParticiple: "let", translation: "позволять", correctCount: 0 },
    { base: "make", pastSimple: "made", pastParticiple: "made", translation: "делать", correctCount: 0 },
    { base: "meet", pastSimple: "met", pastParticiple: "met", translation: "встречаться", correctCount: 0 },
    { base: "pay", pastSimple: "paid", pastParticiple: "paid", translation: "платить", correctCount: 0 },
    { base: "put", pastSimple: "put", pastParticiple: "put", translation: "класть", correctCount: 0 },
    { base: "read", pastSimple: "read", pastParticiple: "read", translation: "читать", correctCount: 0 },
    { base: "ride", pastSimple: "rode", pastParticiple: "ridden", translation: "ездить верхом", correctCount: 0 },
    { base: "ring", pastSimple: "rang", pastParticiple: "rung", translation: "звонить", correctCount: 0 },
    { base: "rise", pastSimple: "rose", pastParticiple: "risen", translation: "подниматься", correctCount: 0 },
    { base: "run", pastSimple: "ran", pastParticiple: "run", translation: "бежать", correctCount: 0 },
    { base: "say", pastSimple: "said", pastParticiple: "said", translation: "говорить", correctCount: 0 },
    { base: "see", pastSimple: "saw", pastParticiple: "seen", translation: "видеть", correctCount: 0 },
    { base: "sell", pastSimple: "sold", pastParticiple: "sold", translation: "продавать", correctCount: 0 },
    { base: "send", pastSimple: "sent", pastParticiple: "sent", translation: "посылать", correctCount: 0 },
    { base: "set", pastSimple: "set", pastParticiple: "set", translation: "ставить", correctCount: 0 },
    { base: "shake", pastSimple: "shook", pastParticiple: "shaken", translation: "трясти", correctCount: 0 },
    { base: "shine", pastSimple: "shone", pastParticiple: "shone", translation: "светить", correctCount: 0 },
    { base: "shoot", pastSimple: "shot", pastParticiple: "shot", translation: "стрелять", correctCount: 0 },
    { base: "show", pastSimple: "showed", pastParticiple: "shown", translation: "показывать", correctCount: 0 },
    { base: "sing", pastSimple: "sang", pastParticiple: "sung", translation: "петь", correctCount: 0 },
    { base: "sit", pastSimple: "sat", pastParticiple: "sat", translation: "сидеть", correctCount: 0 },
    { base: "speak", pastSimple: "spoke", pastParticiple: "spoken", translation: "говорить", correctCount: 0 },
    { base: "spend", pastSimple: "spent", pastParticiple: "spent", translation: "тратить", correctCount: 0 },
    { base: "stand", pastSimple: "stood", pastParticiple: "stood", translation: "стоять", correctCount: 0 },
    { base: "steal", pastSimple: "stole", pastParticiple: "stolen", translation: "красть", correctCount: 0 },
    { base: "take", pastSimple: "took", pastParticiple: "taken", translation: "брать", correctCount: 0 },
    { base: "teach", pastSimple: "taught", pastParticiple: "taught", translation: "учить", correctCount: 0 },
    { base: "tell", pastSimple: "told", pastParticiple: "told", translation: "рассказывать", correctCount: 0 },
    { base: "think", pastSimple: "thought", pastParticiple: "thought", translation: "думать", correctCount: 0 },
    { base: "throw", pastSimple: "threw", pastParticiple: "thrown", translation: "бросать", correctCount: 0 },
    { base: "understand", pastSimple: "understood", pastParticiple: "understood", translation: "понимать", correctCount: 0 },
    { base: "wear", pastSimple: "wore", pastParticiple: "worn", translation: "носить (одежду)", correctCount: 0 },
    { base: "win", pastSimple: "won", pastParticiple: "won", translation: "побеждать", correctCount: 0 },
    { base: "write", pastSimple: "wrote", pastParticiple: "written", translation: "писать", correctCount: 0 },
    { base: "become", pastSimple: "became", pastParticiple: "become", translation: "становиться", correctCount: 0 },
    { base: "bite", pastSimple: "bit", pastParticiple: "bitten", translation: "кусать", correctCount: 0 },
    { base: "blow", pastSimple: "blew", pastParticiple: "blown", translation: "дуть", correctCount: 0 },
    { base: "burn", pastSimple: "burnt", pastParticiple: "burnt", translation: "гореть", correctCount: 0 },
    { base: "burst", pastSimple: "burst", pastParticiple: "burst", translation: "взорваться", correctCount: 0 },
    { base: "carry", pastSimple: "carried", pastParticiple: "carried", translation: "нести", correctCount: 0 },
    { base: "deal", pastSimple: "dealt", pastParticiple: "dealt", translation: "иметь дело", correctCount: 0 },
    { base: "dig", pastSimple: "dug", pastParticiple: "dug", translation: "копать", correctCount: 0 },
    { base: "dream", pastSimple: "dreamt", pastParticiple: "dreamt", translation: "мечтать", correctCount: 0 },
    { base: "feed", pastSimple: "fed", pastParticiple: "fed", translation: "кормить", correctCount: 0 },
    { base: "fight", pastSimple: "fought", pastParticiple: "fought", translation: "драться", correctCount: 0 },
    { base: "fly", pastSimple: "flew", pastParticiple: "flown", translation: "летать", correctCount: 0 },
    { base: "forbid", pastSimple: "forbade", pastParticiple: "forbidden", translation: "запрещать", correctCount: 0 },
    { base: "forgive", pastSimple: "forgave", pastParticiple: "forgiven", translation: "прощать", correctCount: 0 },
    { base: "freeze", pastSimple: "froze", pastParticiple: "frozen", translation: "замерзать", correctCount: 0 },
    { base: "hang", pastSimple: "hung", pastParticiple: "hung", translation: "вешать", correctCount: 0 },
    { base: "hide", pastSimple: "hid", pastParticiple: "hidden", translation: "прятать", correctCount: 0 },
    { base: "hit", pastSimple: "hit", pastParticiple: "hit", translation: "ударять", correctCount: 0 },
    { base: "hurt", pastSimple: "hurt", pastParticiple: "hurt", translation: "вредить", correctCount: 0 },
    { base: "lay", pastSimple: "laid", pastParticiple: "laid", translation: "класть", correctCount: 0 },
    { base: "lead", pastSimple: "led", pastParticiple: "led", translation: "вести", correctCount: 0 },
    { base: "learn", pastSimple: "learnt", pastParticiple: "learnt", translation: "учиться", correctCount: 0 },
    { base: "lend", pastSimple: "lent", pastParticiple: "lent", translation: "одалживать", correctCount: 0 },
    { base: "lie", pastSimple: "lay", pastParticiple: "lain", translation: "лежать", correctCount: 0 },
    { base: "lose", pastSimple: "lost", pastParticiple: "lost", translation: "терять", correctCount: 0 },
    { base: "mean", pastSimple: "meant", pastParticiple: "meant", translation: "значить", correctCount: 0 },
    { base: "overcome", pastSimple: "overcame", pastParticiple: "overcome", translation: "преодолевать", correctCount: 0 },
    { base: "prove", pastSimple: "proved", pastParticiple: "proven", translation: "доказывать", correctCount: 0 },
    { base: "quit", pastSimple: "quit", pastParticiple: "quit", translation: "бросать", correctCount: 0 },
    { base: "ride", pastSimple: "rode", pastParticiple: "ridden", translation: "ездить верхом", correctCount: 0 },
    { base: "ring", pastSimple: "rang", pastParticiple: "rung", translation: "звонить", correctCount: 0 },
    { base: "rise", pastSimple: "rose", pastParticiple: "risen", translation: "подниматься", correctCount: 0 },
    { base: "set", pastSimple: "set", pastParticiple: "set", translation: "ставить", correctCount: 0 },
    { base: "sew", pastSimple: "sewed", pastParticiple: "sewn", translation: "шить", correctCount: 0 },
    { base: "shine", pastSimple: "shone", pastParticiple: "shone", translation: "светить", correctCount: 0 },
    { base: "shoot", pastSimple: "shot", pastParticiple: "shot", translation: "стрелять", correctCount: 0 },
    { base: "sink", pastSimple: "sank", pastParticiple: "sunk", translation: "тонуть", correctCount: 0 },
    { base: "sleep", pastSimple: "slept", pastParticiple: "slept", translation: "спать", correctCount: 0 },
    { base: "slide", pastSimple: "slid", pastParticiple: "slidden", translation: "скользить", correctCount: 0 },
    { base: "smell", pastSimple: "smelt", pastParticiple: "smelt", translation: "нюхать", correctCount: 0 },
    { base: "speed", pastSimple: "sped", pastParticiple: "sped", translation: "спешить", correctCount: 0 },
    { base: "spell", pastSimple: "spelt", pastParticiple: "spelt", translation: "писать по буквам", correctCount: 0 },
    { base: "spoil", pastSimple: "spoilt", pastParticiple: "spoilt", translation: "портить", correctCount: 0 },
    { base: "spread", pastSimple: "spread", pastParticiple: "spread", translation: "распространять", correctCount: 0 },
    { base: "spring", pastSimple: "sprang", pastParticiple: "sprung", translation: "прыгать", correctCount: 0 },
    { base: "steal", pastSimple: "stole", pastParticiple: "stolen", translation: "воровать", correctCount: 0 },
    { base: "stick", pastSimple: "stuck", pastParticiple: "stuck", translation: "приклеивать", correctCount: 0 },
    { base: "sting", pastSimple: "stung", pastParticiple: "stung", translation: "жалить", correctCount: 0 },
    { base: "strike", pastSimple: "struck", pastParticiple: "struck", translation: "ударять", correctCount: 0 },
    { base: "swear", pastSimple: "swore", pastParticiple: "sworn", translation: "ругаться", correctCount: 0 },
    { base: "swim", pastSimple: "swam", pastParticiple: "swum", translation: "плавать", correctCount: 0 },
    { base: "swing", pastSimple: "swung", pastParticiple: "swung", translation: "качаться", correctCount: 0 },
    { base: "tear", pastSimple: "tore", pastParticiple: "torn", translation: "рвать", correctCount: 0 },
    { base: "wake", pastSimple: "woke", pastParticiple: "woken", translation: "просыпаться", correctCount: 0 },
    { base: "wear", pastSimple: "wore", pastParticiple: "worn", translation: "носить (одежду)", correctCount: 0 },
    { base: "win", pastSimple: "won", pastParticiple: "won", translation: "побеждать", correctCount: 0 },
    { base: "write", pastSimple: "wrote", pastParticiple: "written", translation: "писать", correctCount: 0 },
    { base: "beat", pastSimple: "beat", pastParticiple: "beaten", translation: "бить", correctCount: 0 },
    { base: "become", pastSimple: "became", pastParticiple: "become", translation: "становиться", correctCount: 0 },
    { base: "bite", pastSimple: "bit", pastParticiple: "bitten", translation: "кусать", correctCount: 0 },
    { base: "blow", pastSimple: "blew", pastParticiple: "blown", translation: "дуть", correctCount: 0 },
    { base: "burn", pastSimple: "burnt", pastParticiple: "burnt", translation: "гореть", correctCount: 0 },
    { base: "burst", pastSimple: "burst", pastParticiple: "burst", translation: "взорваться", correctCount: 0 },
    { base: "buy", pastSimple: "bought", pastParticiple: "bought", translation: "покупать", correctCount: 0 },
    { base: "cast", pastSimple: "cast", pastParticiple: "cast", translation: "бросать", correctCount: 0 },
    { base: "cling", pastSimple: "clung", pastParticiple: "clung", translation: "цепляться", correctCount: 0 },
    { base: "creep", pastSimple: "crept", pastParticiple: "crept", translation: "ползать", correctCount: 0 },
    { base: "deal", pastSimple: "dealt", pastParticiple: "dealt", translation: "иметь дело", correctCount: 0 },
    { base: "dive", pastSimple: "dived", pastParticiple: "dove/dived", translation: "нырять", correctCount: 0 },
    { base: "dream", pastSimple: "dreamt", pastParticiple: "dreamt", translation: "мечтать", correctCount: 0 },
    { base: "eat", pastSimple: "ate", pastParticiple: "eaten", translation: "есть", correctCount: 0 },
    { base: "fall", pastSimple: "fell", pastParticiple: "fallen", translation: "падать", correctCount: 0 },
    { base: "feed", pastSimple: "fed", pastParticiple: "fed", translation: "кормить", correctCount: 0 },
    { base: "feel", pastSimple: "felt", pastParticiple: "felt", translation: "чувствовать", correctCount: 0 },
    { base: "fight", pastSimple: "fought", pastParticiple: "fought", translation: "драться", correctCount: 0 },
    { base: "find", pastSimple: "found", pastParticiple: "found", translation: "находить", correctCount: 0 },
    { base: "fly", pastSimple: "flew", pastParticiple: "flown", translation: "летать", correctCount: 0 },
    { base: "forget", pastSimple: "forgot", pastParticiple: "forgotten", translation: "забывать", correctCount: 0 },
    { base: "forgive", pastSimple: "forgave", pastParticiple: "forgiven", translation: "прощать", correctCount: 0 },
    { base: "freeze", pastSimple: "froze", pastParticiple: "frozen", translation: "замерзать", correctCount: 0 },
    { base: "get", pastSimple: "got", pastParticiple: "got/gotten", translation: "получать", correctCount: 0 },
    { base: "give", pastSimple: "gave", pastParticiple: "given", translation: "давать", correctCount: 0 },
    { base: "go", pastSimple: "went", pastParticiple: "gone", translation: "идти", correctCount: 0 },
    { base: "grind", pastSimple: "ground", pastParticiple: "ground", translation: "толочь", correctCount: 0 },
    { base: "grow", pastSimple: "grew", pastParticiple: "grown", translation: "расти", correctCount: 0 },
    { base: "hang", pastSimple: "hung", pastParticiple: "hung", translation: "вешать", correctCount: 0 },
    { base: "have", pastSimple: "had", pastParticiple: "had", translation: "иметь", correctCount: 0 },
    { base: "hear", pastSimple: "heard", pastParticiple: "heard", translation: "слышать", correctCount: 0 },
    { base: "hide", pastSimple: "hid", pastParticiple: "hidden", translation: "прятать", correctCount: 0 },
    { base: "hit", pastSimple: "hit", pastParticiple: "hit", translation: "ударять", correctCount: 0 },
    { base: "hold", pastSimple: "held", pastParticiple: "held", translation: "держать", correctCount: 0 },
    { base: "hurt", pastSimple: "hurt", pastParticiple: "hurt", translation: "вредить", correctCount: 0 },
    { base: "keep", pastSimple: "kept", pastParticiple: "kept", translation: "сохранять", correctCount: 0 },
    { base: "know", pastSimple: "knew", pastParticiple: "known", translation: "знать", correctCount: 0 },
    { base: "lay", pastSimple: "laid", pastParticiple: "laid", translation: "класть", correctCount: 0 },
    { base: "lead", pastSimple: "led", pastParticiple: "led", translation: "вести", correctCount: 0 },
    { base: "learn", pastSimple: "learnt", pastParticiple: "learnt", translation: "учиться", correctCount: 0 },
    { base: "leave", pastSimple: "left", pastParticiple: "left", translation: "оставлять", correctCount: 0 },
    { base: "lend", pastSimple: "lent", pastParticiple: "lent", translation: "одалживать", correctCount: 0 },
    { base: "let", pastSimple: "let", pastParticiple: "let", translation: "позволять", correctCount: 0 },
    { base: "lie", pastSimple: "lay", pastParticiple: "lain", translation: "лежать", correctCount: 0 },
    { base: "light", pastSimple: "lit", pastParticiple: "lit", translation: "освещать", correctCount: 0 },
    { base: "lose", pastSimple: "lost", pastParticiple: "lost", translation: "терять", correctCount: 0 },
    { base: "mean", pastSimple: "meant", pastParticiple: "meant", translation: "означать", correctCount: 0 },
    { base: "meet", pastSimple: "met", pastParticiple: "met", translation: "встречаться", correctCount: 0 },
    { base: "overcome", pastSimple: "overcame", pastParticiple: "overcome", translation: "преодолевать", correctCount: 0 },
    { base: "overhear", pastSimple: "overheard", pastParticiple: "overheard", translation: "подслушивать", correctCount: 0 },
    { base: "overdo", pastSimple: "overdid", pastParticiple: "overdone", translation: "переусердствовать", correctCount: 0 },
    { base: "pay", pastSimple: "paid", pastParticiple: "paid", translation: "платить", correctCount: 0 },
    { base: "prove", pastSimple: "proved", pastParticiple: "proven", translation: "доказывать", correctCount: 0 },
    { base: "put", pastSimple: "put", pastParticiple: "put", translation: "класть", correctCount: 0 },
    { base: "quit", pastSimple: "quit", pastParticiple: "quit", translation: "бросать", correctCount: 0 },
    { base: "read", pastSimple: "read", pastParticiple: "read", translation: "читать", correctCount: 0 },
    { base: "ride", pastSimple: "rode", pastParticiple: "ridden", translation: "ездить верхом", correctCount: 0 },
    { base: "ring", pastSimple: "rang", pastParticiple: "rung", translation: "звонить", correctCount: 0 },
    { base: "rise", pastSimple: "rose", pastParticiple: "risen", translation: "подниматься", correctCount: 0 },
    { base: "run", pastSimple: "ran", pastParticiple: "run", translation: "бежать", correctCount: 0 },
    { base: "saw", pastSimple: "sawed", pastParticiple: "sawn/sawed", translation: "пилить", correctCount: 0 },
    { base: "seek", pastSimple: "sought", pastParticiple: "sought", translation: "искать", correctCount: 0 },
    { base: "sell", pastSimple: "sold", pastParticiple: "sold", translation: "продавать", correctCount: 0 },
    { base: "send", pastSimple: "sent", pastParticiple: "sent", translation: "посылать", correctCount: 0 },
    { base: "set", pastSimple: "set", pastParticiple: "set", translation: "ставить", correctCount: 0 },
    { base: "sew", pastSimple: "sewed", pastParticiple: "sewn", translation: "шить", correctCount: 0 },
    { base: "shine", pastSimple: "shone", pastParticiple: "shone", translation: "светить", correctCount: 0 },
    { base: "shoot", pastSimple: "shot", pastParticiple: "shot", translation: "стрелять", correctCount: 0 },
    { base: "sink", pastSimple: "sank", pastParticiple: "sunk", translation: "тонуть", correctCount: 0 },
    { base: "sit", pastSimple: "sat", pastParticiple: "sat", translation: "сидеть", correctCount: 0 },
    { base: "sleep", pastSimple: "slept", pastParticiple: "slept", translation: "спать", correctCount: 0 },
    { base: "slide", pastSimple: "slid", pastParticiple: "slidden", translation: "скользить", correctCount: 0 },
    { base: "smell", pastSimple: "smelt", pastParticiple: "smelt", translation: "нюхать", correctCount: 0 },
    { base: "speak", pastSimple: "spoke", pastParticiple: "spoken", translation: "говорить", correctCount: 0 },
    { base: "speed", pastSimple: "sped", pastParticiple: "sped", translation: "спешить", correctCount: 0 },
    { base: "spell", pastSimple: "spelt", pastParticiple: "spelt", translation: "писать по буквам", correctCount: 0 },
    { base: "spend", pastSimple: "spent", pastParticiple: "spent", translation: "тратить", correctCount: 0 },
    { base: "spoil", pastSimple: "spoilt", pastParticiple: "spoilt", translation: "портить", correctCount: 0 },
    { base: "spread", pastSimple: "spread", pastParticiple: "spread", translation: "распространять", correctCount: 0 },
    { base: "spring", pastSimple: "sprang", pastParticiple: "sprung", translation: "прыгать", correctCount: 0 },
    { base: "stand", pastSimple: "stood", pastParticiple: "stood", translation: "стоять", correctCount: 0 },
    { base: "steal", pastSimple: "stole", pastParticiple: "stolen", translation: "красть", correctCount: 0 },
    { base: "stick", pastSimple: "stuck", pastParticiple: "stuck", translation: "приклеивать", correctCount: 0 },
    { base: "sting", pastSimple: "stung", pastParticiple: "stung", translation: "жалить", correctCount: 0 },
    { base: "strike", pastSimple: "struck", pastParticiple: "struck", translation: "ударять", correctCount: 0 },
    { base: "swear", pastSimple: "swore", pastParticiple: "sworn", translation: "ругаться", correctCount: 0 },
    { base: "swim", pastSimple: "swam", pastParticiple: "swum", translation: "плавать", correctCount: 0 },
    { base: "swing", pastSimple: "swung", pastParticiple: "swung", translation: "качаться", correctCount: 0 },
    { base: "tear", pastSimple: "tore", pastParticiple: "torn", translation: "рвать", correctCount: 0 },
    { base: "think", pastSimple: "thought", pastParticiple: "thought", translation: "думать", correctCount: 0 },
    { base: "throw", pastSimple: "threw", pastParticiple: "thrown", translation: "бросать", correctCount: 0 },
    { base: "understand", pastSimple: "understood", pastParticiple: "understood", translation: "понимать", correctCount: 0 },
    { base: "wear", pastSimple: "wore", pastParticiple: "worn", translation: "носить (одежду)", correctCount: 0 },
    { base: "win", pastSimple: "won", pastParticiple: "won", translation: "побеждать", correctCount: 0 },
    { base: "write", pastSimple: "wrote", pastParticiple: "written", translation: "писать", correctCount: 0 }
];

let currentIndex = Math.floor(Math.random() * verbs.length);
const requiredCorrect = 3;

function updateStatsDisplay() {
    const known = verbs.filter(v => v.correctCount >= requiredCorrect).length;
    document.getElementById("stats").textContent = `Выучено: ${known} из ${verbs.length}`;
}

function showNextVerb() {
    currentIndex = Math.floor(Math.random() * verbs.length);
    document.getElementById("form2").value = "";
    document.getElementById("form3").value = "";
    document.getElementById("translation").value = "";
    document.getElementById("message").innerHTML = "";
    showCurrentVerb();
}

function showCurrentVerb() {
    const verb = verbs[currentIndex];
    document.getElementById("verb").textContent = `Глагол: ${verb.base}`;
}

function checkAnswer() {
    const verb = verbs[currentIndex];
    const form2 = document.getElementById("form2").value.trim().toLowerCase();
    const form3 = document.getElementById("form3").value.trim().toLowerCase();
    const trans = document.getElementById("translation").value.trim().toLowerCase();

    const messageBox = document.getElementById("message");
    messageBox.innerHTML = "";

    let resultHTML = "<ul>";

    if (form2 === verb.pastSimple.toLowerCase()) {
        resultHTML += `<li style='color:green;'>Past Simple: ✅ ${verb.pastSimple}</li>`;
        verb.correctCount++;
    } else {
        resultHTML += `<li style='color:red;'>Past Simple: ❌ Ты написал "${form2}", должно быть "${verb.pastSimple}"</li>`;
    }

    if (form3 === verb.pastParticiple.toLowerCase()) {
        resultHTML += `<li style='color:green;'>Past Participle: ✅ ${verb.pastParticiple}</li>`;
        verb.correctCount++;
    } else {
        resultHTML += `<li style='color:red;'>Past Participle: ❌ Ты написал "${form3}", должно быть "${verb.pastParticiple}"</li>`;
    }

    if (trans === verb.translation.toLowerCase()) {
        resultHTML += `<li style='color:green;'>Перевод: ✅ ${verb.translation}</li>`;
        verb.correctCount++;
    } else {
        resultHTML += `<li style='color:red;'>Перевод: ❌ Ты написал "${trans}", должно быть "${verb.translation}"</li>`;
    }

    resultHTML += "</ul>";
    messageBox.innerHTML = resultHTML;

    updateStatsDisplay();

    setTimeout(() => {
        if (verb.correctCount >= requiredCorrect) {
            messageBox.innerHTML += `<p style="color: green;">✅ Вы уже знаете это слово!</p>`;
        }
        setTimeout(showNextVerb, 2000); // 2 секунды до следующего слова
    }, 5000); // 5 секунд показываем результат
}

function showNextVerb() {
    currentIndex = Math.floor(Math.random() * verbs.length);
    document.getElementById("form2").value = "";
    document.getElementById("form3").value = "";
    document.getElementById("translation").value = "";
    document.getElementById("message").innerHTML = "";
    showCurrentVerb();
}

document.addEventListener("DOMContentLoaded", () => {
    showCurrentVerb();
    updateStatsDisplay();
});
