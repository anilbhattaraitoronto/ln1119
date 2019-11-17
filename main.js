
startApp();

function switchSections(sectionClass, linkClass, activeClass, index) {
    let sections = document.querySelectorAll(sectionClass);
    let links = document.querySelectorAll(linkClass);
    links.forEach(link => {
        link.className = link.className.replace(activeClass, ' ');
        //what to replace = activeClass, what to replace with = ' '
    })
    sections.forEach(section => {
        section.style.display = 'none';
    })
    sections[index].style.display = 'block';
    links[index].className += activeClass;
}
function startApp() {
    switchSections('.main-pages', '.main-link', ' main-active', 0);
    switchSections('.levels', '.level-link', ' active-level', 0);
    switchSections('.beginner-lesson', '.beginner-lesson-link', ' active-lesson', 0);
    switchSections('.intermediate-lesson', '.intermediate-lesson-link', ' active-lesson', 0);
    switchSections('.advanced-lesson', '.advanced-lesson-link', ' active-lesson', 0);
    switchSections('.about-section', '.about-section-link', ' active-lesson', 0);
}

//function for rendering lessons

function Lesson(nepali, english, sound, picture) {
    this.nepali = nepali;
    this.english = english;
    this.sound = sound;
    this.picture = picture;
    this.itemIndex = 0;

    this.getItem = function (id) {
        let itemBox = document.getElementById(id);
        let item = `
        <div class="nepali">${this.nepali[this.itemIndex]}</div>
        <div class="english">${this.english[this.itemIndex]}</div>
        <audio controls class="sound">
        <source src="${this.sound[this.itemIndex]}" type="audio/ogg"/>
        </audio>
        <div class="picture">${this.picture[this.itemIndex]}</div>
        `
        itemBox.innerHTML = item;
    }
    this.getDescription = function (id) {
        let descriptionBox = document.getElementById(id);
        this.nepali.forEach(item => {
            descriptionBox.innerHTML += `<div>${item}</div>`;
        })
    }

    this.getNextItem = function (id) {
        this.itemIndex++;

        if (this.itemIndex === this.nepali.length) {
            this.itemIndex = 0;
        }
        this.getItem((id = id));
    };

    this.getPreviousItem = function (id) {
        this.itemIndex--;
        if (this.itemIndex < 0) {
            this.itemIndex = this.nepali.length - 1;
        }
        this.getItem((id = id));
    };
}

let vowelLesson = new Lesson(
    ["अ", "आ", "इ", "ई", "उ", "ऊ", "ए", "ऐ", "ओ", "औ", "अं", "अ:"],
    ["a", "aa", "i", "ee", "u", "oo", "eh", "aih", "o", "au", "ahm", "aha"],
    ["./sounds/vowels/mp3/a.mp3", "./sounds/vowels/mp3/aa.mp3", "./sounds/vowels/mp3/i.mp3", "./sounds/vowels/mp3/ee.mp3", "./sounds/vowels/mp3/u.mp3", "./sounds/vowels/mp3/oo.mp3", "./sounds/vowels/mp3/eh.mp3", "./sounds/vowels/mp3/aih.mp3", "./sounds/vowels/mp3/o.mp3", "./sounds/vowels/mp3/au.mp3", "./sounds/vowels/mp3/ahm.mp3", "./sounds/vowels/mp3/aha.mp3"],
    ["a.png", "aa.png", "i.png", "ee.png", "u.png", "oo.png", "eh.png", "aih.png", "o.png", "au.png", "ahm.png", "aha.png"]
);
vowelLesson.getItem("vowel-box");
vowelLesson.getDescription("vowel-description");

let syllableLesson = new Lesson(
    ["क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "स", "ष", "श", "ह", "क्ष", "त्र", "ज्ञ"],
    ["ka", "kha", "ga", "gha", "nga", "cha", "chha", "ja", "jha", "yan", "ta", "tha", "da", "dha", "nna", "tta", "ttha", "dda", "ddha", "na", "pa", "pha", "ba", "bha", "ma", "ya", "ra", "la", "va", "sa", "ssha", "sha", "ha", "chya", "tra", "gyan"],
    ["./sounds/root_syllables/syllables/ka.mp3", "./sounds/root_syllables/syllables/kha.mp3", "./sounds/root_syllables/syllables/ga.mp3", "./sounds/root_syllables/syllables/gha.mp3", "./sounds/root_syllables/syllables/nga.mp3", "./sounds/root_syllables/syllables/cha.mp3", "./sounds/root_syllables/syllables/chha.mp3", "./sounds/root_syllables/syllables/ja.mp3", "./sounds/root_syllables/syllables/jha.mp3", "./sounds/root_syllables/syllables/yan.mp3", "./sounds/root_syllables/syllables/ta.mp3", "./sounds/root_syllables/syllables/tha.mp3", "./sounds/root_syllables/syllables/da.mp3", "./sounds/root_syllables/syllables/dha.mp3", "./sounds/root_syllables/syllables/nna.mp3", "./sounds/root_syllables/syllables/tta.mp3", "./sounds/root_syllables/syllables/ttha.mp3", "./sounds/root_syllables/syllables/dda.mp3", "./sounds/root_syllables/syllables/ddha.mp3", "./sounds/root_syllables/syllables/na.mp3", "./sounds/root_syllables/syllables/pa.mp3", "./sounds/root_syllables/syllables/pha.mp3", "./sounds/root_syllables/syllables/ba.mp3", "./sounds/root_syllables/syllables/bha.mp3", "./sounds/root_syllables/syllables/ma.mp3", "./sounds/root_syllables/syllables/ya.mp3", "./sounds/root_syllables/syllables/ra.mp3", "./sounds/root_syllables/syllables/la.mp3", "./sounds/root_syllables/syllables/va.mp3", "./sounds/root_syllables/syllables/sa.mp3", "./sounds/root_syllables/syllables/ssha.mp3", "./sounds/root_syllables/syllables/sha.mp3", "./sounds/root_syllables/syllables/ha.mp3", "./sounds/root_syllables/syllables/chya.mp3", "./sounds/root_syllables/syllables/tra.mp3", "./sounds/root_syllables/syllables/gyan.mp3"],
    ["ka.png", "kha.mp3", "ga.mp3", "gha", "nga", "cha", "chha", "ja", "jha", "yan", "ta", "tha", "da", "dha", "nna", "tta", "ttha", "dda", "ddha", "na", "pa", "pha", "ba", "bha", "ma", "ya", "ra", "la", "va", "sa", "ssha", "sha", "ha", "chya", "tra", "gyan"]
);
syllableLesson.getItem("syllable-box");
syllableLesson.getDescription("syllable-description");

let compoundLesson = new Lesson(
    ["क", "का", "कि", "की", "कु", "कू", "के", "कै", "को", "कौ", "कं", "क:"],
    ["ka", "kaa", "ki", "kee", "ku", "koo", "keh", "kaih", "ko", "kau", "kahm", "kaha"],
    ["./sounds/root_syllables/compounds/ka.mp3", "./sounds/root_syllables/compounds/kaa.mp3", "./sounds/root_syllables/compounds/ki.mp3", "./sounds/root_syllables/compounds/kee.mp3", "./sounds/root_syllables/compounds/ku.mp3", "./sounds/root_syllables/compounds/koo.mp3", "./sounds/root_syllables/compounds/ke.mp3", "./sounds/root_syllables/compounds/kai.mp3", "./sounds/root_syllables/compounds/ko.mp3", "./sounds/root_syllables/compounds/kau.mp3", "./sounds/root_syllables/compounds/kam.mp3", "./sounds/root_syllables/compounds/kaha.mp3"],
    ["ka.png", "kaa.png", "ki.png", "kee.png", "ku.png", "koo.png", "ke.png", "kai.png", "ko.png", "kau.png", "kam.png", "kaha.png"]
);
compoundLesson.getItem("compound-box");
compoundLesson.getDescription("compound-description");

//Words Lessons
let nounLesson = new Lesson(
    [],
    [],
    [],
    []
);
nounLesson.getItem("noun-box");

let pronounLesson = new Lesson(
    [],
    [],
    [],
    [],
);
pronounLesson.getItem("pronoun-box");

let verbLesson = new Lesson(
    [],
    [],
    [],
    [],
);
verbLesson.getItem("verb-box");

let adjectiveLesson = new Lesson(
    [],
    [],
    [],
    [],
);
adjectiveLesson.getItem("adjective-box");

let adverbLesson = new Lesson(
    [],
    [],
    [],
    [],

);
adverbLesson.getItem("adverb-box");

let conjunctionLesson = new Lesson(
    [],
    [],
    [],
    [],
);
conjunctionLesson.getItem("conjunction-box");

let prepositionLesson = new Lesson(
    [],
    [],
    [],
    [],
);
prepositionLesson.getItem("preposition-box");


//Sentences Lessons

let presentLesson = new Lesson(
    ["मेरो नाम अनिल हो।"],
    ["My name is Anil."],
    [""],
    ["picture"],
);
presentLesson.getItem("present-box")

let pastLesson = new Lesson(
    ["मेरो नाम अनिल थियो।"],
    ["My name was Anil."],
    [""],
    ["picture"],
);
pastLesson.getItem("past-box");

let futureLesson = new Lesson(
    ["मेरो नाम अनिल हुनेछ।"],
    ["My name will be Anil."],
    [""],
    ["picture"],
);
futureLesson.getItem("future-box");

// Readings Lessons

let beginnerReadings = new Lesson(
    [
        "१।",
        "२।",
        "३।",
        "४।",
        "५।",
        "६।",
        "७।",
        "८।",
        "९।",
        "१०।",
        "११।",
        "१२।",
        "१३",
        "१४",
        "१५",
        "१६",
        "१७",
        "१८",
        "१९",
        "२०",
    ],
    [
        "१", "२", "३", "४", "५", "६", "७", "८", "९", "१०", "११", "१२", "१३", "१४", "१५", "१६", "१७", "१८", "१९", "२०",
    ],
    [
        "१", "२", "३", "४", "५", "६", "७", "८", "९", "१०", "११", "१२", "१३", "१४", "१५", "१६", "१७", "१८", "१९", "२०",
    ],
    [
        "१", "२", "३", "४", "५", "६", "७", "८", "९", "१०", "११", "१२", "१३", "१४", "१५", "१६", "१७", "१८", "१९", "२०",
    ],
);
beginnerReadings.getItem("beginner-box");

let intermediateReadings = new Lesson(
    [
        "१।",
        "२।",
        "३।",
        "४।",
        "५।",
        "६।",
        "७।",
        "८।",
        "९।",
        "१०।",
        "११।",
        "१२।",
        "१३",
        "१४",
        "१५",
        "१६",
        "१७",
        "१८",
        "१९",
        "२०",
    ],
    [
        "१", "२", "३", "४", "५", "६", "७", "८", "९", "१०", "११", "१२", "१३", "१४", "१५", "१६", "१७", "१८", "१९", "२०",
    ],
    [
        "१", "२", "३", "४", "५", "६", "७", "८", "९", "१०", "११", "१२", "१३", "१४", "१५", "१६", "१७", "१८", "१९", "२०",
    ],
    [
        "१", "२", "३", "४", "५", "६", "७", "८", "९", "१०", "११", "१२", "१३", "१४", "१५", "१६", "१७", "१८", "१९", "२०",
    ],
);
intermediateReadings.getItem("intermediate-box");

let advancedReadings = new Lesson(
    [
        "१।",
        "२।",
        "३।",
        "४।",
        "५।",
        "६।",
        "७।",
        "८।",
        "९।",
        "१०।",
        "११।",
        "१२।",
        "१३",
        "१४",
        "१५",
        "१६",
        "१७",
        "१८",
        "१९",
        "२०",
    ],
    [
        "१", "२", "३", "४", "५", "६", "७", "८", "९", "१०", "११", "१२", "१३", "१४", "१५", "१६", "१७", "१८", "१९", "२०",
    ],
    [
        "१", "२", "३", "४", "५", "६", "७", "८", "९", "१०", "११", "१२", "१३", "१४", "१५", "१६", "१७", "१८", "१९", "२०",
    ],
    [
        "१", "२", "३", "४", "५", "६", "७", "८", "९", "१०", "११", "१२", "१३", "१४", "१५", "१६", "१७", "१८", "१९", "२०",
    ],
);
advancedReadings.getItem("advanced-box");

let nativeReadings = new Lesson(
    [
        "१।",
        "२।",
        "३।",
        "४।",
        "५।",
        "६।",
        "७।",
        "८।",
        "९।",
        "१०।",
        "११।",
        "१२।",
        "१३",
        "१४",
        "१५",
        "१६",
        "१७",
        "१८",
        "१९",
        "२०",
    ],
    [
        "१", "२", "३", "४", "५", "६", "७", "८", "९", "१०", "११", "१२", "१३", "१४", "१५", "१६", "१७", "१८", "१९", "२०",
    ],
    [
        "१", "२", "३", "४", "५", "६", "७", "८", "९", "१०", "११", "१२", "१३", "१४", "१५", "१६", "१७", "१८", "१९", "२०",
    ],
    [
        "१", "२", "३", "४", "५", "६", "७", "८", "९", "१०", "११", "१२", "१३", "१४", "१५", "१६", "१७", "१८", "१९", "२०",
    ],
);
nativeReadings.getItem("native-box");

