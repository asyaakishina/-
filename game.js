const verbs = [
    { base: "be", pastSimple: "was/were", pastParticiple: "been", translation: "быть" },
    { base: "begin", pastSimple: "began", pastParticiple: "begun", translation: "начинать" },
    { base: "break", pastSimple: "broke", pastParticiple: "broken", translation: "ломать" },
    { base: "bring", pastSimple: "brought", pastParticiple: "brought", translation: "приносить" },
    { base: "build", pastSimple: "built", pastParticiple: "built", translation: "строить" },
    { base: "buy", pastSimple: "bought", pastParticiple: "bought", translation: "покупать" },
    { base: "catch", pastSimple: "caught", pastParticiple: "caught", translation: "ловить" },
    { base: "choose", pastSimple: "chose", pastParticiple: "chosen", translation: "выбирать" },
    { base: "come", pastSimple: "came", pastParticiple: "come", translation: "приходить" },
    { base: "cost", pastSimple: "cost", pastParticiple: "cost", translation: "стоить" },
    { base: "cut", pastSimple: "cut", pastParticiple: "cut", translation: "резать" },
    { base: "do", pastSimple: "did", pastParticiple: "done", translation: "делать" },
    { base: "draw", pastSimple: "drew", pastParticiple: "drawn", translation: "рисовать" },
    { base: "drink", pastSimple: "drank", pastParticiple: "drunk", translation: "пить" },
    { base: "drive", pastSimple: "drove", pastParticiple: "driven", translation: "водить машину" },
    { base: "eat", pastSimple: "ate", pastParticiple: "eaten", translation: "есть" },
    { base: "fall", pastSimple: "fell", pastParticiple: "fallen", translation: "падать" },
    { base: "feel", pastSimple: "felt", pastParticiple: "felt", translation: "чувствовать" },
    { base: "find", pastSimple: "found", pastParticiple: "found", translation: "находить" },
    { base: "forget", pastSimple: "forgot", pastParticiple: "forgotten", translation: "забывать" },
    { base: "get", pastSimple: "got", pastParticiple: "got/gotten", translation: "получать" },
    { base: "give", pastSimple: "gave", pastParticiple: "given", translation: "давать" },
    { base: "go", pastSimple: "went", pastParticiple: "gone", translation: "идти" },
    { base: "grow", pastSimple: "grew", pastParticiple: "grown", translation: "расти" },
    { base: "have", pastSimple: "had", pastParticiple: "had", translation: "иметь" },
    { base: "hear", pastSimple: "heard", pastParticiple: "heard", translation: "слышать" },
    { base: "hold", pastSimple: "held", pastParticiple: "held", translation: "держать" },
    { base: "keep", pastSimple: "kept", pastParticiple: "kept", translation: "сохранять" },
    { base: "know", pastSimple: "knew", pastParticiple: "known", translation: "знать" },
    { base: "leave", pastSimple: "left", pastParticiple: "left", translation: "оставлять" },
    { base: "let", pastSimple: "let", pastParticiple: "let", translation: "позволять" },
    { base: "make", pastSimple: "made", pastParticiple: "made", translation: "делать" },
    { base: "meet", pastSimple: "met", pastParticiple: "met", translation: "встречаться" },
    { base: "pay", pastSimple: "paid", pastParticiple: "paid", translation: "платить" },
    { base: "put", pastSimple: "put", pastParticiple: "put", translation: "класть" },
    { base: "read", pastSimple: "read", pastParticiple: "read", translation: "читать" },
    { base: "run", pastSimple: "ran", pastParticiple: "run", translation: "бежать" },
    { base: "say", pastSimple: "said", pastParticiple: "said", translation: "говорить" },
    { base: "see", pastSimple: "saw", pastParticiple: "seen", translation: "видеть" },
    { base: "sell", pastSimple: "sold", pastParticiple: "sold", translation: "продавать" },
    { base: "send", pastSimple: "sent", pastParticiple: "sent", translation: "посылать" },
    { base: "show", pastSimple: "showed", pastParticiple: "shown", translation: "показывать" },
    { base: "sing", pastSimple: "sang", pastParticiple: "sung", translation: "петь" },
    { base: "sit", pastSimple: "sat", pastParticiple: "sat", translation: "сидеть" },
    { base: "speak", pastSimple: "spoke", pastParticiple: "spoken", translation: "говорить" },
    { base: "spend", pastSimple: "spent", pastParticiple: "spent", translation: "тратить" },
    { base: "stand", pastSimple: "stood", pastParticiple: "stood", translation: "стоять" },
    { base: "take", pastSimple: "took", pastParticiple: "taken", translation: "брать" },
    { base: "teach", pastSimple: "taught", pastParticiple: "taught", translation: "учить" },
    { base: "tell", pastSimple: "told", pastParticiple: "told", translation: "рассказывать" },
    { base: "think", pastSimple: "thought", pastParticiple: "thought", translation: "думать" },
    { base: "understand", pastSimple: "understood", pastParticiple: "understood", translation: "понимать" },
    { base: "write", pastSimple: "wrote", pastParticiple: "written", translation: "писать" },

    // Добавляем ещё глаголов для большего количества вопросов
    { base: "become", pastSimple: "became", pastParticiple: "become", translation: "становиться" },
    { base: "bite", pastSimple: "bit", pastParticiple: "bitten", translation: "кусать" },
    { base: "blow", pastSimple: "blew", pastParticiple: "blown", translation: "дуть" },
    { base: "burn", pastSimple: "burnt", pastParticiple: "burnt", translation: "гореть" },
    { base: "burst", pastSimple: "burst", pastParticiple: "burst", translation: "взорваться" },
    { base: "carry", pastSimple: "carried", pastParticiple: "carried", translation: "нести" },
    { base: "deal", pastSimple: "dealt", pastParticiple: "dealt", translation: "иметь дело" },
    { base: "dig", pastSimple: "dug", pastParticiple: "dug", translation: "копать" },
    { base: "dream", pastSimple: "dreamt", pastParticiple: "dreamt", translation: "мечтать" },
    { base: "feed", pastSimple: "fed", pastParticiple: "fed", translation: "кормить" },
    { base: "fight", pastSimple: "fought", pastParticiple: "fought", translation: "драться" },
    { base: "fly", pastSimple: "flew", pastParticiple: "flown", translation: "летать" },
    { base: "forbid", pastSimple: "forbade", pastParticiple: "forbidden", translation: "запрещать" },
    { base: "forgive", pastSimple: "forgave", pastParticiple: "forgiven", translation: "прощать" },
    { base: "freeze", pastSimple: "froze", pastParticiple: "frozen", translation: "замерзать" },
    { base: "hang", pastSimple: "hung", pastParticiple: "hung", translation: "вешать" },
    { base: "have", pastSimple: "had", pastParticiple: "had", translation: "иметь" },
    { base: "hide", pastSimple: "hid", pastParticiple: "hidden", translation: "прятать" },
    { base: "hit", pastSimple: "hit", pastParticiple: "hit", translation: "ударять" },
    { base: "hold", pastSimple: "held", pastParticiple: "held", translation: "держать" },
    { base: "hurt", pastSimple: "hurt", pastParticiple: "hurt", translation: "вредить" },
    { base: "keep", pastSimple: "kept", pastParticiple: "kept", translation: "сохранять" },
    { base: "know", pastSimple: "knew", pastParticiple: "known", translation: "знать" },
    { base: "lay", pastSimple: "laid", pastParticiple: "laid", translation: "класть" },
    { base: "lead", pastSimple: "led", pastParticiple: "led", translation: "вести" },
    { base: "learn", pastSimple: "learnt", pastParticiple: "learnt", translation: "учиться" },
    { base: "leave", pastSimple: "left", pastParticiple: "left", translation: "оставлять" },
    { base: "lend", pastSimple: "lent", pastParticiple: "lent", translation: "одалживать" },
    { base: "lie", pastSimple: "lay", pastParticiple: "lain", translation: "лежать" },
    { base: "lose", pastSimple: "lost", pastParticiple: "lost", translation: "терять" },
    { base: "mean", pastSimple: "meant", pastParticiple: "meant", translation: "значить" },
    { base: "overcome", pastSimple: "overcame", pastParticiple: "overcome", translation: "преодолевать" },
    { base: "prove", pastSimple: "proved", pastParticiple: "proven", translation: "доказывать" },
    { base: "quit", pastSimple: "quit", pastParticiple: "quit", translation: "бросать" },
    { base: "ride", pastSimple: "rode", pastParticiple: "ridden", translation: "ездить верхом" },
    { base: "ring", pastSimple: "rang", pastParticiple: "rung", translation: "звонить" },
    { base: "rise", pastSimple: "rose", pastParticiple: "risen", translation: "подниматься" },
    { base: "set", pastSimple: "set", pastParticiple: "set", translation: "ставить" },
    { base: "shake", pastSimple: "shook", pastParticiple: "shaken", translation: "трясти" },
    { base: "shine", pastSimple: "shone", pastParticiple: "shone", translation: "светить" },
    { base: "shoot", pastSimple: "shot", pastParticiple: "shot", translation: "стрелять" },
    { base: "sink", pastSimple: "sank", pastParticiple: "sunk", translation: "тонуть" },
    { base: "sleep", pastSimple: "slept", pastParticiple: "slept", translation: "спать" },
    { base: "slide", pastSimple: "slid", pastParticiple: "slidden", translation: "скользить" },
    { base: "spoil", pastSimple: "spoilt", pastParticiple: "spoilt", translation: "портить" },
    { base: "steal", pastSimple: "stole", pastParticiple: "stolen", translation: "красть" },
    { base: "stick", pastSimple: "stuck", pastParticiple: "stuck", translation: "приклеивать" },
    { base: "swear", pastSimple: "swore", pastParticiple: "sworn", translation: "ругаться" },
    { base: "swim", pastSimple: "swam", pastParticiple: "swum", translation: "плавать" },
    { base: "swing", pastSimple: "swung", pastParticiple: "swung", translation: "качаться" },
    { base: "tear", pastSimple: "tore", pastParticiple: "torn", translation: "рвать" },
    { base: "throw", pastSimple: "threw", pastParticiple: "thrown", translation: "бросать" },
    { base: "wear", pastSimple: "wore", pastParticiple: "worn", translation: "носить (одежду)" },
    { base: "win", pastSimple: "won", pastParticiple: "won", translation: "побеждать" },
    { base: "write", pastSimple: "wrote", pastParticiple: "written", translation: "писать" }
];

let currentIndex = Math.floor(Math.random() * verbs.length);

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
    } else {
        resultHTML += `<li style='color:red;'>Past Simple: ❌ Ты написал "${form2}", должно быть "${verb.pastSimple}"</li>`;
    }

    if (form3 === verb.pastParticiple.toLowerCase()) {
        resultHTML += `<li style='color:green;'>Past Participle: ✅ ${verb.pastParticiple}</li>`;
    } else {
        resultHTML += `<li style='color:red;'>Past Participle: ❌ Ты написал "${form3}", должно быть "${verb.pastParticiple}"</li>`;
    }

    if (trans === verb.translation.toLowerCase()) {
        resultHTML += `<li style='color:green;'>Перевод: ✅ ${verb.translation}</li>`;
    } else {
        resultHTML += `<li style='color:red;'>Перевод: ❌ Ты написал "${trans}", должно быть "${verb.translation}"</li>`;
    }

    resultHTML += "</ul>";
    messageBox.innerHTML = resultHTML;

    setTimeout(showNextVerb, 2000);
}

// === Запуск игры ===
showCurrentVerb();