// 1
const isDog = false;
const solution1 = isDog ? "pat pat" : "Finde einen Hund zum Streicheln!";
console.log(solution1);

// 2

const currentSpeed = 160;
const solution2 =
    currentSpeed < 50
        ? "Du fährst unter dem Tempolimit, Oma"
        : "Du fährst zu schnell";
console.log(solution2);

// 3

const age = 14;
const solution3 = age < 16 ? "serviere Butterbier" : "serviere Bier";
console.log(solution3);

// 4

const isStudent = false;
const solution4 = isStudent
    ? "Das Ticket kostet 5,00 €"
    : "Das Ticket kostet 12,00 €";
console.log(solution4);

// 5

const dieHeutigeNachspeise = "kuchen";
const solution5 =
    dieHeutigeNachspeise === "kuchen" ? "Lass sie Kuchen essen" : "Oh, Mist";
console.log(solution5);

// 6

const zahl1 = 30;
const antwort30 =
    zahl1 % 2 === 0 ? `${zahl1} ist gerade` : `${zahl1} ist ungerade`;
console.log(antwort30);

const zahl2 = 939;
const antwort939 =
    zahl2 % 2 === 0 ? `${zahl2} ist gerade` : `${zahl2} ist ungerade`;
console.log(antwort939);

const zahl3 = 40.9;
const antwort409 =
    zahl3 % 2 === 0 ? `${zahl3} ist gerade` : `${zahl3} ist ungerade`;
console.log(antwort409);
