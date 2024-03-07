// Перевірка на парність(num)
function checkEvenNumber(num) {
  if (typeof num !== 'number') {
    return "Помилка";
  }
  let cheking = num % 2;

  switch(cheking){
    case 0: true;
    break;
    case 1: false;
    break;
    default:
      'помилка'
  }
  
}

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


// Перевірка на паліндром стрілковою функцією(string)
let checkPalindrome = (str) => {
  if (typeof str !== 'string') {
    return "Помилка";
  }

  let reversedStr = str.split('').reverse().join('');
  if (str === reversedStr) {
    return true;
  } else {
    return false;
  }
};


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


//Перевірка чи об'єкт порожній
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



class Animal {
	constructor(name) {
		this.name = name
	}
}

class Dog extends Animal {
	constructor(name) {
		super(name)
		this.type = 'Собака'
	}
}

class Cat extends Animal {
	constructor(name) {
		super(name)
		this.type = 'Кіт'
	}
}
