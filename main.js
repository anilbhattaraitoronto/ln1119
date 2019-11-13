
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
        <div class="sound">${this.sound[this.itemIndex]}</div>
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
    ["a.mp3", "aa.mp3", "i.mp3", "ee.mp3", "u.mp3", "oo.mp3", "eh.mp3", "aih.mp3", "o.mp3", "au.mp3", "ahm.mp3", "aha.mp3"],
    ["a.png", "aa.png", "i.png", "ee.png", "u.png", "oo.png", "eh.png", "aih.png", "o.png", "au.png", "ahm.png", "aha.png"]
);
vowelLesson.getItem("vowel-box");
vowelLesson.getDescription("vowel-description");

let syllableLesson = new Lesson(
    ["क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "स", "ष", "श", "ह", "क्ष", "त्र", "ज्ञ"],
    ["ka", "kha", "ga", "gha", "nga", "cha", "chha", "ja", "jha", "yan", "ta", "tha", "da", "dha", "nna", "tta", "ttha", "dda", "ddha", "na", "pa", "pha", "ba", "bha", "ma", "ya", "ra", "la", "va", "sa", "ssha", "sha", "ha", "chya", "tra", "gyan"],
    ["ka.mp3", "kha.mp3", "ga", "gha", "nga", "cha", "chha", "ja", "jha", "yan", "ta", "tha", "da", "dha", "nna", "tta", "ttha", "dda", "ddha", "na", "pa", "pha", "ba", "bha", "ma", "ya", "ra", "la", "va", "sa", "ssha", "sha", "ha", "chya", "tra", "gyan"],
    ["ka.png", "kha.mp3", "ga.mp3", "gha", "nga", "cha", "chha", "ja", "jha", "yan", "ta", "tha", "da", "dha", "nna", "tta", "ttha", "dda", "ddha", "na", "pa", "pha", "ba", "bha", "ma", "ya", "ra", "la", "va", "sa", "ssha", "sha", "ha", "chya", "tra", "gyan"]
);
syllableLesson.getItem("syllable-box");
syllableLesson.getDescription("syllable-description");

let compoundLesson = new Lesson(
    ["क", "का", "कि", "की", "कु", "कू", "के", "कै", "को", "कौ", "कं", "क:"],
    ["ka", "kaa", "ki", "kee", "ku", "koo", "keh", "kaih", "ko", "kau", "kahm", "kaha"],
    ["ka.mp3", "kaa.mp3", "ki.mp3", "kee.mp3", "ku.mp3", "koo.mp3", "keh.mp3", "kaih.mp3", "ko.mp3", "kau.mp3", "kahm.mp3", "kaha.mp3"],
    ["ka.png", "kaa.png", "ki.png", "kee.png", "ku.png", "koo.png", "keh.png", "kaih.png", "ko.png", "kau.png", "kahm.png", "kaha.png"]
);
compoundLesson.getItem("compound-box");
compoundLesson.getDescription("compound-description");
