// 1. 1~10000사이의 3의 배수와 5의 배수 개수를 출력하는 프로그램
/*
console.log( "1. 1~10000사이의 3의 배수와 5의 배수 개수를 출력하는 프로그램" );
const MAX = 10000;
const MULTIPLE_3 = 3;
const MULTIPLE_5 = 5;

var multiple_3, multiple_5;
var count = 0;

for ( var i = 1; i <= MAX; ++i ) {
    multiple_3 = i % MULTIPLE_3;
    multiple_5 = i % MULTIPLE_5;
    if ( ( multiple_3 == 0 ) || ( multiple_5 == 0 ) ) {
        console.log( i );
        ++count;
    }
}
console.log( `1. 1~10000사이의 3의 배수와 5의 배수 개수는\n${count}\n` );

console.log( "2. 20개의 data를 배열에 저장한 후 양수/음수, 양수일 때\
 짝수/홀수 개수를 출력하는 프로그램(배열 사용)\n" );
var datas = [ 5, 7, -1, 2, 0, 12, -8, -1, 12, 9, 1, 29, -13, -9, 22, 33, 10, 15, -7, 11 ]
var positive = negative = even = odd = error = 0;
var remain;

for ( var data of datas ) {
    if ( data !== 0 ) {
        if ( data > 0 ) {
            ++positive;
            remain = data % 2;
            if ( remain === 0 ) {
                ++even;
            } else {
                ++odd;
            }
        } else {
            ++negative;
        }
    } else {
        ++error;
    }
}
console.log( `양수 개수 : ${positive}\n\t짝수 개수 : ${even}\n\t홀수 개수 : ${odd}` );
console.log( `음수 개수 : ${negative}` );
console.log( `Error data : ${error}` );

console.log( "\n3. 구구단을 출력하는 프로그램(2단 ~ 9단)\n" );
const MIN_MULTIPLE = 2;
const MAX_MULTIPLE = 9;
var multiple;

for ( var i = MIN_MULTIPLE; i <= MAX_MULTIPLE; ++i ) {
    console.log( `   ${i} 단` );
    for ( var j = 1; j <= 9; ++j ) {
        multiple = i * j;
        console.log( `${i} X ${j} = ${multiple}` );
    }
    console.log();
}

*/

/*
console.log( "\n4. 10명의 학생 성적을 출력하는 프로그램(object 사용)\n" );
const MAX_SUBJECT = 3;
const EXCELLENT = 90;
const FAIL = 60;

var students = [ { name: "hong", subjects: [ 50, 50, 50 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "kim", subjects: [ 90, 90, 90 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "lee", subjects: [ 70, 70, 70 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "park", subjects: [ 60, 60, 60 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "yoon", subjects: [ 40, 40, 40 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "im", subjects: [ 30, 30, 30 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "oh", subjects: [ 20, 20, 20 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "gong", subjects: [ 80, 80, 80 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "kang", subjects: [ 77, 77, 77 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "seo", subjects: [ 66, 86, 89 ], total: 0, average: 0.0, grade: "Normal" } ];

for ( var student of students ) {
    for ( var subject of student["subjects"] ) {
        student["total"] += subject;
    }
    student["average"] = student["total"] / MAX_SUBJECT;
    if ( student["average"] >= EXCELLENT ) {
        student["grade"] = "Excellent";
    } else if ( student["average"] < FAIL ) {
        student["grade"] = "Fail";
    }
    console.log( student );
}

*/

console.log( "\n4. 10명의 학생 성적을 출력하는 프로그램(object 사용)\n" );
const MAX_SUBJECT = 3;
const EXCELLENT = 90;
const FAIL = 60;

var students = [ { name: "hong", subjects: [ 50, 50, 50 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "kim", subjects: [ 90, 90, 90 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "lee", subjects: [ 70, 70, 70 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "park", subjects: [ 60, 60, 60 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "yoon", subjects: [ 40, 40, 40 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "im", subjects: [ 30, 30, 30 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "oh", subjects: [ 20, 20, 20 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "gong", subjects: [ 80, 80, 80 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "kang", subjects: [ 77, 77, 77 ], total: 0, average: 0.0, grade: "Normal" },
{ name: "seo", subjects: [ 66, 86, 89 ], total: 0, average: 0.0, grade: "Normal" } ];

function compares( arr ){
    var temp = [];
    for ( var i = arr.length - 1; i > 0; i-- ){
        for ( var j = 0; j < i; j++ ){
            if ( arr[j] < arr[j+1] )
            {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
var a  = [];
var i = 0;
for ( var student of students ) {
    for ( var subject of student["subjects"] ) {
        student["total"] += subject;
    }
    a[i++] = student[ "total"];
    console.log( a );
    student["average"] = student["total"] / MAX_SUBJECT;
    if ( student["average"] >= EXCELLENT ) {
        student["grade"] = "Excellent";
    } else if ( student["average"] < FAIL ) {
        student["grade"] = "Fail";
    }
    console.log( student );
}
arrcompare = compares( a );
console.log( arrcompare );

for ( var student of students ){
    for ( var i = 0; i < 10; ++i ){
        if (student["total"] == arrcompare[i])
        {
            student.score = i + 1;
        }
    }
    console.log( student );
}
