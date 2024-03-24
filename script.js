//Створити 5 функцій, які працюють з різними типами даних
console.log('Створити 5 функцій, які працюють з різними типами даних');
console.log('-');


console.log('Перевірка числа на парність - для виклику прописати checkEvenNumber')
console.log('-')
console.log('Вивід назви місяця за числом - для виклику прописати getMontName')
console.log('-')
console.log('Перевірка слова на паліндром - для виклику прописати checkPalindrome')
console.log('-')
console.log('Перевірка числа на знак - для виклику прописати checkNum')
console.log('-')
console.log('Чи є обєкт порожнім - для виклику прописати checkEmptyObject')


//Використати switch…case в тілі функцій, функція по перевірці на парність
function checkEvenNumber(num) {
  if (typeof num !== 'number') {
    return "Помилка";
  }
  let cheking = num % 2;

  switch(cheking){
    case 0: console.log('парне');;
    break;
    case 1:console.log('не парне');
    break;
    default:
      'помилка'
  }
  
}



//Використати switch…case в тілі функцій, функція по виводу назви місяця за числом
function getMonthName(monthNumber) {
	if (typeof monthNumber !== 'number' || monthNumber < 1 || monthNumber > 12) {
		return 'Помилка'
	}

	let monthName
	switch (monthNumber) {
		case 1:
			monthName = 'Січень'
			break
		case 2:
			monthName = 'Лютий'
			break
		case 3:
			monthName = 'Березень'
			break
		case 4:
			monthName = 'Квітень'
			break
		case 5:
			monthName = 'Травень'
			break
		case 6:
			monthName = 'Червень'
			break
		case 7:
			monthName = 'Липень'
			break
		case 8:
			monthName = 'Серпень'
			break
		case 9:
			monthName = 'Вересень'
			break
		case 10:
			monthName = 'Жовтень'
			break
		case 11:
			monthName = 'Листопад'
			break
		case 12:
			monthName = 'Грудень'
			break
		default:
			monthName = 'Невідомий місяць'
	}
	return monthName
}


// Перевірка на паліндром стрілковою функцією arrow function
let checkPalindrome = (str) => {
	if (typeof str !== 'string') {
		return 'Помилка'
	}
	let reversedStr = str.split('').reverse().join('')
	if (str === reversedStr) {
		return true
	} else {
		return false
	}
};

//перевірка знаку числа function expression
function checkNum(num) {
	if (typeof num !== 'number') {
		return 'Помилка'
	}
	if (num > 0) {
		return 'Додатнє число'
	} else if (num < 0) {
		return "Від'ємне число"
	} else {
		return 'Нуль'
	}
}


//Перевірка чи об'єкт порожній function declaration
const checkEmptyObject = function (obj) {
	if (typeof obj !== 'object') {
		return "Помилка"
	}
	if (Object.keys(obj).length === 0) {
		return true
	} else {
		return false
	}
}


console.log('-');
console.log('-')
console.log('-')
//Використовуючи class, створити Animal -> Dog та Cat
console.log('Використовуючи class, створити Animal -> Dog та Cat')
class Animal {
	constructor(name) {
		this.name = name
	}
}

let owl = new Animal('owl')
console.log(owl);

class Dog extends Animal {
	constructor(name) {
		super(name)
		this.type = 'Собака'
	}
}
let doggi = new Dog('floki')
console.log(doggi);

class Cat extends Animal {
	constructor(name) {
		super(name)
		this.type = 'Кіт'
	}
}
let cattie = new Cat('pepe')
console.log(cattie)

