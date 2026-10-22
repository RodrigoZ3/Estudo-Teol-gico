document.addEventListener("DOMContentLoaded", () => {
    const translations = {
        pt: {
            currentLang: "Português",
            "menu-old": "Velho Testamento",
            "menu-pentateuch": "Pentateuco",
            "menu-historical": "Livros Históricos",
            "menu-poetic": "Livros Poéticos",
            "menu-major": "Profetas Maiores",
            "menu-minor": "Profetas Menores",
            "menu-inter": "Período Inter-testamentario",
            "menu-babylon": "Babilônia",
            "menu-persia": "Média-Pérsia",
            "menu-greece": "Grécia",
            "menu-rome": "Roma",
            "menu-new": "Novo Testamento",
            "menu-gospels": "Evangelhos",
            "menu-acts": "Atos",
            "menu-epistles": "Epístolas Paulinas",
            "menu-revelation": "Apocalipse",
            title: "A História através da Bíblia",
            desc1: "Este é um projeto de estudo teológico que explora a história através do texto bíblico.",
            desc2: "O estudo teológico é uma disciplina que busca compreender..."
        },
        en: {
            currentLang: "English",
            "menu-old": "Old Testament",
            "menu-pentateuch": "Pentateuch",
            "menu-historical": "Historical Books",
            "menu-poetic": "Poetic Books",
            "menu-major": "Major Prophets",
            "menu-minor": "Minor Prophets",
            "menu-inter": "Intertestamental Period",
            "menu-babylon": "Babylon",
            "menu-persia": "Medo-Persia",
            "menu-greece": "Greece",
            "menu-rome": "Rome",
            "menu-new": "New Testament",
            "menu-gospels": "Gospels",
            "menu-acts": "Acts",
            "menu-epistles": "Pauline Epistles",
            "menu-revelation": "Revelation",
            title: "History Through the Bible",
            desc1: "It is a theological study project that explores history through the biblical text.",
            desc2: "Theological study is a discipline that seeks to understand..."
        },
        fr: {
            currentLang: "Français",
            "menu-old": "Ancien Testament",
            "menu-pentateuch": "Pentateuque",
            "menu-historical": "Livres Historiques",
            "menu-poetic": "Livres Poétiques",
            "menu-major": "Prophètes Majeurs",
            "menu-minor": "Prophètes Mineurs",
            "menu-inter": "Période Intertestamentaire",
            "menu-babylon": "Babylone",
            "menu-persia": "Mèdes-Perses",
            "menu-greece": "Grèce",
            "menu-rome": "Rome",
            "menu-new": "Nouveau Testament",
            "menu-gospels": "Évangiles",
            "menu-acts": "Actes",
            "menu-epistles": "Épîtres Pauliniennes",
            "menu-revelation": "Apocalypse",
            title: "L'Histoire à travers la Bible",
            desc1: "C'est un projet d'étude théologique qui explore l'histoire à travers le texte biblique.",
            desc2: "L'étude théologique est une discipline qui cherche à comprendre..."
        },
        es: {
            currentLang: "Español",
            "menu-old": "Antiguo Testamento",
            "menu-pentateuch": "Pentateuco",
            "menu-historical": "Libros Históricos",
            "menu-poetic": "Libros Poéticos",
            "menu-major": "Profetas Mayores",
            "menu-minor": "Profetas Menores",
            "menu-inter": "Período Intertestamentario",
            "menu-babylon": "Babilonia",
            "menu-persia": "Medo-Persia",
            "menu-greece": "Grecia",
            "menu-rome": "Roma",
            "menu-new": "Nuevo Testamento",
            "menu-gospels": "Evangelios",
            "menu-acts": "Hechos",
            "menu-epistles": "Epístolas Paulinas",
            "menu-revelation": "Apocalipsis",
            title: "La Historia a través de la Biblia",
            desc1: "Este es un proyecto de estudio teológico que explora la historia a través del texto bíblico.",
            desc2: "El estudio teológico es una disciplina que busca comprender..."
        },
        de: {
            currentLang: "Deutsch",
            "menu-old": "Altes Testament",
            "menu-pentateuch": "Pentateuch",
            "menu-historical": "Geschichtsbücher",
            "menu-poetic": "Poetische Bücher",
            "menu-major": "Große Propheten",
            "menu-minor": "Kleine Propheten",
            "menu-inter": "Intertestamentarische Zeit",
            "menu-babylon": "Babylon",
            "menu-persia": "Medo-Persien",
            "menu-greece": "Griechenland",
            "menu-rome": "Rom",
            "menu-new": "Neues Testament",
            "menu-gospels": "Evangelien",
            "menu-acts": "Apostelgeschichte",
            "menu-epistles": "Paulusbriefe",
            "menu-revelation": "Offenbarung",
            title: "Geschichte durch die Bibel",
            desc1: "Dies ist ein theologisches Studienprojekt, das die Geschichte anhand des biblischen Textes erforscht.",
            desc2: "Die theologische Studie ist eine Disziplin, die versucht zu verstehen..."
        }
    };

    const currentLangSpan = document.getElementById("current-lang");
    const langLinks = document.querySelectorAll(".language-link");

    function changeLanguage(lang) {
        if (!translations[lang]) return;

        if (currentLangSpan) {
            currentLangSpan.textContent = translations[lang].currentLang;
        }

        document.querySelectorAll("[data-i18n]").forEach(element => {
            const key = element.getAttribute("data-i18n");
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        localStorage.setItem("selectedLanguage", lang);
    }

    langLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const lang = link.getAttribute("data-lang");
            changeLanguage(lang);
        });
    });

    const savedLang = localStorage.getItem("selectedLanguage") || "pt";
    changeLanguage(savedLang);
});