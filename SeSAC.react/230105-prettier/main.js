// var y = 1;
// const x = 1;
// console.log(x);

// @ts-check

// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(...arr);

// const copyArr =arr;
//같은 메모리 주소를 참조하는 것. 배열자체를 갖고 오는 것

// console.log(copyArr);


// const copyArr = [...arr];
//배열 내부의 값만 가져오는 것
// console.log(copyArr);
// console.log(arr === copyArr);

const obj = {
    pororo: '뽀로로',
    lupy : '루피',
    crong: "크롱"
}

const copyObj = {...obj, lupy: 'lupy'} ;

console.log(obj);
console.log(copyObj);
console.log(obj === copyObj);
