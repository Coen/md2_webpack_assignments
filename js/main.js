/**
 * Uitleg van deze opdrachten:
 * Kijk hoever je komt met deze opdrachten. Ik zal deze lijst in de toekomst nog wat uitbreiden met nieuwere opdrachten
 * Je mag me bij elke opdracht om hulp vragen
 * Sowieso wil ik je werk zien. Dus loop even bij me langs als je 1 of meerdere opdrachten af hebt
 */

/**
 * Opdracht 1: primitives
 * Maak voor de volgende primitives 5 goed bedachte variabelen per primitive
 * 
 * 5 variabelen met daarin een string
 * 5 variabelen met daarin een number
 * 5 variabelen met daarin een boolean
 *
 * Geef ze een goede engelse naam en sla er iets in op wat een goed voorbeeld geeft
 * van Media Development producten (apps, sites, etc.)
 * Bijvoorbeeld een string variabele met de naam 'teacherName' en als waarde 'Berend'
 */

    var auto = "auto";
    var auto1 = "auto1";
    var auto2 = "auto2";
    var auto3 = "auto3";
    var auto4 = "auto4";

    var cijferVoorEngels = "5";
    var cijferVoorWiskunde = "9";
    var cijferVoorDuits = "9";
    var cijferVoorFop = "7";
    var cijferVoorBerend = "6";

    var faaalse = true;
    var truth = false;
    var niks = 0;
    var iets = 1;


/**
 * Opdracht 2: Arrays
 * Bedenk 3 arrays en vul ze met primitives
 * console.log de lengte van de arrays
 *
 * Bijvoorbeeld een Array met de naam 'students' en als waarde ['Berend', "Erwin']
 */


    var teachers = ['Berend', 'Erwin', 'Ingrid'];
    var students = ['Coen','Floris', 'Amin'];
    var rooms = ['1.06','1.05','1.04'];

    console.log(teachers.length);


/**
 * Opdracht 3: Arrays push
 * Maak een lege array aan
 * push er een string in
 */


    var legeArray = [];
    legeArray.push("Kiwi");

/**
 * Opdracht 4: Array splice
 * Maak een array aan en vul hem met namen
 * Gooi de naam op de 1e plek weg
 * Gooi de naam op de 3e plek weg
 */

    var eenArray = ['hoi','haollo','huis'];
    eenArray.splice(2, 1);
    console.log(eenArray);



/**
 * Opdracht 5: Objects
 * Maak van 10 objecten uit je dagelijkse leven een object
 *
 * Bijvoorbeeld een object met de gegevens van je mobiel zoals welk merk, type en hoe oud hij is
 */



let student1 = {
    naam : 'Quenten',
    leeftijd : '19',
    geslacht : 'man'
};

let student2 = {
    naam : 'Coen',
    leeftijd : '18',
    geslacht : 'man'
};
let student3 = {
    naam : 'Karahan',
    leeftijd : '17',
    geslacht : 'Nuhh'
};
let student4 = {
    naam : 'Remy',
    leeftijd : '18',
    geslacht : 'man'
};
let student5 = {
    naam : 'Floris',
    leeftijd : '19',
    geslacht : 'man'
};
let student6 = {
    naam : 'Rick',
    leeftijd : '21',
    geslacht : 'man'
};
let student7 = {
    naam : 'Stijn',
    leeftijd : '17',
    geslacht : 'man'
};
let student8 = {
    naam : 'viktor',
    leeftijd : '22',
    geslacht : 'genderfluid'
};
let student9 = {
    naam : 'job',
    leeftijd : '14',
    geslacht : 'man'
};
let student10 = {
    naam : 'angie',
    leeftijd : '18',
    geslacht : 'vrouw'
};

/**
 * Opdracht 6: Functions
 * Bedenk 4 functies die handig zouden kunnen zijn
 * Bijvoorbeeld een functie met de naam 'multiply'. Deze functie verwacht 2 parameters value & multiplier
 * console.log( value * multiplier)
 */


    function multiply() {
        console.log(value * multiplier)
    }

    function add() {
        console.log(value + value)
    }

    function aftrekken() {
        console.log(value - value)
    }

    function delen() {
        console.log (value / value)
    }

/**
 * Opdracht 7: Function & objects
 * Maak een functie die een firstName en lastName verwacht als parameter
 * vervolgens returned de functie een object met daarin de firstname en lastname opgeslagen
 * roep deze functie aan en console.log() de waarde
 */


/**
 * Opdracht 8: Functions, objects
 * Maak een object genaamd 'student'
 * Maak in dit object bij het aanmaken een functie aan met de naam 'showName'
 */

/**
 * Opdracht 9: Functions, objects
 * Maak een object genaamd 'student'
 * Voeg nadat je het object hebt aangemaakt een functie toe aan 'student' met de naam 'showName'
 */

/**
 * Opdracht 10: Arrays & for loops
 * Maak een array genaamd 'students' met daarin 10 namen van je medeleerlingen
 * Schrijf een for loop om alle namen in de Array te laten zien
 */

