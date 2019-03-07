/*
let foo = new object()

foo.name = 'foo';
foo.age = 30;
foo.gender = 'male';

console.log(typeof foo);
console.log(foo);
console.log("----------------------------------------------------");
*/
// __붙은 것은 내부 메소드이다. 정보 은닉상에서 보면 내부에서만 쓰는 것.
// 다른 객체지향처럼 외부에서 외부에서 불가하게끔 하는 문법은 없다.
// __proto__ : property라고 한다.
// foo1이라는 객체 안에 (property가 object로 부터 상속을 받는데 그 중에__proto__가있다.

let foo1 ={
    name : 'foo',
    age : 30,
    gender : 'male',
    print: function() { console.log( `${this.name}:${this.age}:${this.gender}` ); }
};

console.log( typeof foo1 );
console.log( foo1 );
console.log( foo1.print() );
console.log( foo1.toString() );
console.log( "------------------------------------" );

//생성자 함수 이용
//익명함수 형태로 만들어 놓는다.
let Person = function( name ){
    this.name = name; //this. 이 property라는 의미를 갖는다. function의 인자가 property에 치환하는것.
}
foo = new Person( 'foo' ); //new-> Object 생성, 연산자, 내부적으로 생성자 함수. 객체로서 사용한다라는 의미로 new연산자를 붙힌다.
console.log( foo.name );
console.log( "------------------------------------" );

function Person2( name, age, gender, position){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

console.log( typeof Person2 );
let bar = new Person2( 'bar', 33, 'woman' );
console.log( typeof bar );
console.dir( bar );

let baz = new Person2( 'baz', 25, 'woman' );
console.log( typeof baz );
console.dir( baz );
console.log( "------------------------------------" );

class Person3 {
    constructor( name, age, gender ) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

bar = new Person3( 'bar', 33, 'woman');
baz = new Person3( 'baz', 25, 'woman');
console.dir( bar );
console.dir( baz );
console.log( "------------------------------------" );

// class는 기본적으로 속성인 property 행위인 method를 쓴다고했다.
// constructor 안에 있는 4개가 property가 되고,
// 미리 설계도를 만드는 역할이 class
// 설계도를 만들 때 기본적으로 property와 method는 반드시 있어야되고
// property에 this._ (언더바) 이런 변수명은 외부에서 접근불가하게 하겠다
// 라고 설정해 놓는 것. ( 정보은닉의 기본문법이 없어서 우리가 의미를 부여한것이다.)
class Car {
    constructor( make, model ){ //constructor 부분이 property가 되는것이고 생성자 부분이다.
        this.make = make; //property를 정의하는 부분이자 생성자 부분이다.
        this.model = model;
        this._userGears = [ 'P', 'N', 'R', 'D' ]; //_userGears라고 이름을 정해주면서 외부에서 접근불가하게하겠다 라고하는것
        this._userGear = this._userGears[0];
    }
    //외부에서 접근할 수 없으니
    get_userGear() { return this._userGear;} //getter(읽기) -> return하는게 있으면 된다. 인수 없이 return값만 있다.
    //외부에서 읽기만 하면 되므로.
    set_userGear( gear ){ //얘는 setter(쓰기) 가 된다. -> 인수를 꼭 써주면 setter가 된다.
        if ( this._userGears.indexOf( gear ) < 0 ){
            console.log( `Error : Invalid gear ${value}` ); }
        this._userGear = gear;
    }
    shift( gear ){ //shift가 인터페이스가 되는데, 외부에서 접근할 수 있는 method가 인터페이스가 된다. function이라는 이름이 없다.
        // 이 method는 묶어놓은거기 때문에 function을 쓰지 않는다.
        //기어봉을 조절하면 기어가 조정되게끔 만들어 준 부분이다.
        /*
        if( this._userGears.indexOf( gear ) < 0 ){
            console.log( `Error : Invalid gear ${gear}` ); }
        this._userGear = gear;
        */
        this.set_userGear( gear );
    }

    toString( str ){
        return `|${this.make}|${this.model}|`
    }
}

let car1 = new Car( "Tesla", "Model S" );
let car2 = new Car( "Mazda", "3i" );

car1.shift( 'D' );
car2.shift( 'R' );

console.log( car1.get_userGear() );
console.log( car2.get_userGear() );
console.log( car1.toString() );
console.log( car2.toString() );
console.log( "------------------------------------" );

function create_object( o ) {
    function F() {}
    F.prototype = o;
    return new F;
}
person = {
    name : "zzoon",
    getName : function() { return this.name; },
    setName : function( arg ) { this.name = arg; }
};

var student = create_object(person);
student.age = 28;
student.getAge = function() { return this.age };

console.log(student);
console.log(student.getName());
console.log(student.getAge());

student.setName("me");
student.toString = function() {return `|${this.name}|`};
console.log(student);
console.log(student.toString());

console.log("--------------------------------");

class Bus extends Car {
    constructor( make, model, personnel ){
        super( make, model );
        this.personnel = personnel;
        console.log("Bus created!!!");
    }
    toString() {
       let str = super.toString();
       str += `${this.personnel}|`;
       return str;
   }
}

let bus = new Bus( "Hyundai", "Bus", 40);
console.log( bus );
console.log( bus.toString() );
