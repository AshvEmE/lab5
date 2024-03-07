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


// Функція що перевіряє чи об'єкт порожній(object)
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
