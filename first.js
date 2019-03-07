var a = 10;
var b = 20;

console.log("Hello, world!!!");
console.log("a = " + a);
console.log("b = " + b);
console.log(a+b);

a=30;
console.log("a = " + a);

const x = 10;
console.log("x = " + x);

//x = 100;
console.log("x = " + x);

console.log("----------------------------------------------------");

var count = 10;
var blue = 0x0000ff;
var umask = 0o0022;
var roomTemp = 21.5;
var c = 3.0e6;
var e = -1.6e-19;
var inf = Infinity;
var ninf = -Infinity;
var nan = NaN;

console.log(count);
console.log(blue);
console.log(umask);
console.log(roomTemp);
console.log(c);
console.log(e);
console.log(inf);
console.log(ninf);
console.log(NaN);

console.log("----------------------------------------------------");

var small = Number.EPSILON;
var bigInt = Number.MAX_SAFE_INTEGER;
var max = Number.MAX_VALUE;
var minInt = Number.MIN_SAFE_INTEGER;
var min = Number.MIN_VALUE;
var nInf = Number.NEGATIVE_INFINITY;
var nan2 = Number.NaN;
var inf2 = Number.POSITIVE_INFINITY;

console.log(small);
console.log(bigInt);
console.log(max);
console.log(minInt);
console.log(min);
console.log(nInf);
console.log(nan2);
console.log(inf2);

console.log("----------------------------------------------------");

var dialog = 'Sam looked up, and said "hello, old friend", as Max walked in.';
var imperative = "Don't do that";
console.log(dialog);
console.log(imperative);

var dialog1 = "He look up, and said \"don't do that!\" to Max.";
var dialog2 = 'He look up, and said "don\'t do that!" to Max.';
console.log(dialog1);
console.log(dialog2);
console.log("Hello, \nworld!!!");

console.log("----------------------------------------------------");
var currentTemp = 19.5;
const message = "The current temperature is" + currentTemp + "\u00b0c";
const message2 = `The current temperature is ${currentTemp}\u00b0c`;
console.log(message);
console.log(message2);
const multiline = "line1\
line2";
const multiline2 = "line1\n\
line2"
const multiline3 = "line1\
line2\
line3";
const multiline4 = "line1\n" + "line2\n" + "line3";
const multiline5 = 'Current temperature: \n' + `\t${currentTemp}\u00b0c\n` +
"Don't worry... the heat is on!";

console.log(multiline);
console.log(multiline2);
console.log(multiline3);
console.log(multiline4);
console.log(multiline5);

console.log("----------------------------------------------------");

const result = 3 + '30';
const result2 = 3 * '30';
console.log(result);
console.log(result2);

console.log("----------------------------------------------------");

const heating = true;
const cooling = false;
console.log(heating);
console.log(cooling);

const RED = Symbol("The color of a sunset!");
const ORANGE = Symbol("The color of a sunset!");
console.log(RED);
console.log(ORANGE);
console.log(RED === ORANGE);

var currentTemp2;
console.log(currentTemp2);
var targetTemp2 = null;
currentTemp2 = 19.5;
console.log(currentTemp2);
console.log(targetTemp2);
currentTemp2 = undefined;
console.log(currentTemp2);

console.log("----------------------------------------------------");

var obj = {};
console.log( obj );
obj.color = "yellow";
console.log( obj );
obj["not an identifier"] = 3;
console.log( obj );
console.log( obj["not an identifier"]);
console.log( obj["color"]);
const SIZE = Symbol();
obj[SIZE] = 8;
console.log( obj );
console.log("----------------------------------------------------");

var sam1 = { name: 'Sam', age: 4};
var sam2 = { name: 'Sam', age: 4};
var sam3 = { name: 'Sam',
classification: {
    kingdom: 'Anamalia', phylum: 'Chordata', class: 'Mamalia',
    order: 'Carnivoria', family: 'Felidas', sumfamily: 'Felinae',
    genus: 'Felis', species: 'catus'}
};
console.log( sam1);
console.log( sam2);
console.log( sam3);
console.log( sam1 === sam2);
console.log( sam3.classification.family);
console.log( sam3["classification"].family);
console.log( sam3.classification["family"]);
console.log( sam3["classification"]["family"]);

console.log("----------------------------------------------------");

sam3.speak = function() {return "Meow!"};
console.log(sam3);
console.log(sam3.speak());

delete sam3.classification;
console.log(sam3);

delete sam3.speak;
console.log(sam3);
console.log("----------------------------------------------------");

var s = "hello";
console.log(s.toUpperCase());

s.rating = 3;
console.log(s.rating);
console.log("----------------------------------------------------");

var now = new Date();
console.log(now);
var hallowen = new Date(2019,9,31);
console.log(hallowen);
var hallowenParty = new Date(2019,9,31,19,0);
console.log(hallowenParty);

console.log(hallowenParty.getFullYear());
console.log(hallowenParty.getMonth());
console.log(hallowenParty.getDate());
console.log(hallowenParty.getDay());
console.log(hallowenParty.getHours());
console.log(hallowenParty.getMinutes());
console.log(hallowenParty.getSeconds());
console.log(hallowenParty.getMilliseconds());
console.log("----------------------------------------------------");
console.log();
var numStr = "33.3";
var num = Number( numStr );
console.log( numStr );
console.log( num );
var a = parseInt( "16 volts", 10);
var b = parseInt( "3a", 16 );
var c2 = parseFloat( "15.5 kph" );
console.log( a );
console.log( b );
console.log( c2 );
var d = new Date();
var ts = d.valueOf();
console.log( d );
console.log( ts );
d2 = true;
var n2 = b ? 1 : 0;
console.log( d2 );
console.log( n2 );

var v = 33.5;
var v2 = v.toString();
console.log( v );
console.log( v2 );

var arr9 = [ 1, true, "hello" ];
console.log( arr9 );
console.log( arr9.toString() );

var n9 = 0;
var b9 = !!n9;
var b10 = Boolean( n9 );
console.log( n9 );
console.log( b9 );
console.log( b10 );

console.log("----------------------------------------------------");
var xx = 5;
var yy = 3 - xx;
console.log( `xx = ${xx} yy = ${yy}` );

var ss = "5";
var yyy = 3 + +ss;
console.log( `\nss = ${ss} yyy = ${yyy}` );

var xx1 = 0, xx2 = 2, xx3 = -1.5, xx4 = -6.33;
var p1 = -xx1 * 1;
var p2 = +xx2 * 2;
var p3 = +xx3 * 3;
var p4 = -xx4 * 4;
console.log( `\nxx1 = ${xx1} xx2 = ${xx2} xx3 = ${xx3} xx4 = ${xx4}` );
console.log( `p1 = ${p1} p2 = ${p2} p3 = ${p3} p4 = ${p4}` );
