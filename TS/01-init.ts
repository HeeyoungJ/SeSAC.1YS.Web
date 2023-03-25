// 변수
// 키워드 변수이름:타입 = 값;
// 타입표기( type annotation )
const str:string = "string";
const num:number = 1;
const bool:boolean = true;

// object
const arr1:number[] = [1, 2, 3];
const arr2:string[] = ['a', 'w', 'e'];
const arr3:Array<number> = [1, 2, 3];
console.log( arr2[0].concat('!') )

// tuple : 고정되어서 바꿀 수 없는 것.
// 배열의 길이와 타입이 고정된 것.
const arr4:[boolean, string] = [true, 'a'];

// enum
// 어떤 특정 집합들을 열거
enum Names { sesac, 새싹 }
// 열거형을 타입으로 지정
let name1:Names = Names.sesac;

// any : 최대한 안 쓰는 게 좋다.
// 모든 타입에 대해서 허용한다.
const any1: any = [1,2,3]

// void : undefined 와 null 만 들어갈 수 있는 타입
const var1: void = undefined;

// never : 절대 끝에 도달하지 않는 것에 부여하는 타입
function neverEnd():never {
    while(true) {

    }
}

///////////////함수
// ( 매개변수: type ) : <return>
// function 함수이름 ( 매개변수:type ) : 반환타입 {}
//?는 선택적으로 받을 수 있음.
function sum1(a:number = 1, b?:number) :number {
    if ( b == undefined ) return a;
    else return a + b ; //number + number / number + undefined
}
sum1(1)
sum1(1,2)


// interface : 미리 정의해놓는 약속
interface Student {
    name: string,
    age: number,
    nickname?: string
    //nickname은 필수값이 아님.
}
const Student1: Student = {
    name: '이름1',
    age: 10
    //name이나 age 중 하나라도 없으면 오류
}
const Student2: Student = {
    name: '이름2',
    age: 20,
    nickname: '닉네임2'
}
function check( stu: Student ){
    console.log( stu.name )
}
check(Student1);
check(Student2)

// class 클래스이름 {
//    변수명: 타입;
//    constructor(변수:타입){
//        this.변수명 = 변수
//    }
//}
class Person {
    id: string;
    constructor(name:string, age:number) {
        this.id = name + age;
    }
}
const person1 = new Person('이름3 :', 30);
console.log( person1.id );

interface Shape {
    width: number;
    getLength(): number;
}
//constructor에는 readonly private 등이 들어갈 수 있다.
class Square implements Shape {
    constructor(readonly width:number){}

    getLength():number {
        return this.width;
    }
}
const square1 = new Square(10);
console.log(square1.getLength());

class Person2 {
    constructor(public name: string, private age: number){
        this.name = name;
        this.age = age;
    }
}
const person3 = new Person2('a',1);
console.log(person3.name)
//console.log(person3.age);

//제네릭 ( Generic ) <T>
function getText<T>(text:T):T{
    return text;
}
console.log( '제네릭 :', getText<string>('a') )
console.log( '제네릭 :', getText<number>(1) );
