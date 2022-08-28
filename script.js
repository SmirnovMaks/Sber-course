// 3.1

const name = '  Max   '

const last_name = 'Smirnov   '

const x = (name, last_name) => {
    let result = name.trim().length + last_name.trim().length
    console.log(result);
}

x(name, last_name)

/////////////////////

// 3.2

const word = "велосипед"

const result = word[0].toLocaleUpperCase()

console.log(result);

///////////////////

// 3.5

const str = 'Имя: ' + '"' + obj.name + '" ' + 'Фамилия: ' + "'" + obj.last_name + "' " + 'Возраст: ' + obj.age

console.log(str)

/////////////////

//3.6

const obj = {
    name: name,
    last_name: last_name,
    age: age
}
console.log(obj)

//////////////

// 3.7



if (!value) {
    console.log('null');
} else {
    console.log(typeof value);
}

//////////////

// 3.8

console.log(+num_1 + +num_2)

//////////////

// 3.9

let size = '500.5px'



console.log(parseFloat(size))

//////////////

// 3.10

console.log((a * b) ** 2)

//////////////

// 3.11

console.log(Math.sqrt((a ** 2) + (b ** 2)))

//////////////

// 3.12

let a = "5px"

let b = "7px"

let c = "10px"

console.log(parseFloat(a) * parseFloat(b) * parseFloat(c));

//////////////

// 4.1

const speed = 65

if (speed > 0 && speed <= 30) {
    console.log('Вы едете слишком медленно')
} else if (speed >= 31 && speed <= 70) {
    console.log('Вы едете с нормальной скоростью')
} else {
    console.log('Вы едете слишком быстро, сбавьте скорость')
}