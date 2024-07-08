/*Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию 
prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д. 
Выведите на экран фразу: «Меня зовут %Имя%. Мне %Возраст% лет. Я проживаю в 
городе %Город% и работаю в компании %Компания%. Мои контактные данные: 
%Телефон%, %Почта%.». */

let name = prompt("Ваше имя");
let age = prompt("Ваш возраст");
let city = prompt("Ваш город проживания");
let company = prompt("Ваше место работы");
let phone = prompt("Ваш номер телефона");
let email = prompt("Ваша почта");

console.log(`Меня зовут ${name}. Мне ${age} лет. Я проживаю в 
городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}.`);

/*Определите по введенному возрасту (исп. значение из задания 1) год рождения. 
Выведите на экран «%Имя% родился в %Год% году.».*/

let years = 2024 - age;
console.log(`${name} родился(лась) в ${years} году.`);

/*Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение, 
частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму в 
квадрат. */

let a = 10,
    b = 2,
    sum = a + b,
    diff = a - b,
    prod = a * b,
    priv = a / b,
    Sum = sum + diff + prod + priv;
console.log(sum, diff, prod, priv);
if ((Sum > 1)) {
    console.log(Sum ** 2);
} else {
    console.log(Sum);
}

/*В переменной n лежит число от 0 до 59. Определите в какую четверть часа попадает 
это число (в первую, вторую, третью или четвертую).*/

let n = prompt("Введите число от 0 до 59");
if (n >= 0 && n <= 14) {
    console.log ("Первая");
 }
 else if (n >= 15 && n <= 30) {
    console.log ("Вторая");
 }
 else if (n >= 31 && n <= 45) {
    console.log ("Третья");
 }
 else if (n >= 46 && n <= 59) {
    console.log ("Четвертая");
 }

 /*В переменной day лежит число из интервала от 1 до 31. Определите в какую декаду 
месяца попадает это число (в первую, вторую или третью). */

{
    let day = prompt("Введите число от 1 до 31");
    if (day >= 1 && day <= 10) {
        console.log ("Первая");
    }
    else if (day >= 11 && day <= 20) {
        console.log ("Вторая");
    }
    else if (day >= 21 && day <= 31) {
        console.log ("Третья");
    }
}

/*Напишите скрипт, который переводит дни в года (условно 1г = 365дн), в месяцы 
(условно 1м = 31день), в недели, в часы, в минуты и в секунды. Дробные результаты 
вычислений принимаются. Если кол-ва дней не хватает до полного года, месяца, 
недели, вывести сообщение «Меньше года», «Меньше месяца» и «Меньше недели», 
соответственно. */

{
    let day = prompt("Введите количество дней");
    let year = day / 365;
    let month = day / 31;
    let week = day / 7;
    let hour = day * 24;
    let minuts = hour * 60;
    let seconds = minuts * 60;

    if (day < year) {
        console.log('Меньше года')
        } else {
        console.log('year',year);
    }

    if (day < month) {
        console.log('Меньше месяца')
        } else {
        console.log('month',month);
    }

    if (day < week) {
        console.log('Меньше недели')
        } else {
        console.log('week',week);
    }
}

/*Напишите скрипт, который по введенному дню (исп. значение переменной из 8 
задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и 
т.д.). Скрипт определение поры года написать через switch. */

{
    let day = prompt("Введите число от 1 до 365");
    let month = 0;

    if ((day >= 1) && (day <= 31)) {
        month=1;
        console.log('Month',month);
    }
    else if ((day >= 32) && (day <= 59)) {
        month=2;
        console.log('Month',month);
    }
    else if ((day >= 60) && (day <= 90)) {
        month=3;
        console.log('Month',month);
    }
    else if ((day >= 91) && (day <= 120)) {
        month=4;
        console.log('Month',month);
    }
    else if ((day >= 121) && (day <= 151)) {
        month=5;
        console.log('Month',month);
    }
    else if ((day >= 152) && (day <= 181)) {
        month=6;
        console.log('Month',month);
    }
    else if ((day >= 182) && (day <= 212)) {
        month=7;
        console.log('Month',month);
    }
    else if ((day >= 213) && (day <= 243)) {
        month=8;
        console.log('Month',month);
    }
    else if ((day >= 244) && (day <= 273)) {
        month=9;
        console.log('Month',month);
    }
    else if ((day >= 274) && (day <= 304)) {
        month=10;
        console.log('Month',month);
    }
    else if ((day >= 305) && (day <= 334)) {
        month=11;
        console.log('Month',month);
    }
    else if ((day >= 335) && (day <=365)) {
        month=12;
        console.log('Month',month);
    }

    switch(month) {
        case 1: console.log('Winter');
        break;
        case 2: console.log('Winter');
        break;
        case 3: console.log('Spring');
        break;
        case 4: console.log('Spring');
        break;
        case 5: console.log('Spring');
        break;
        case 6: console.log('Summer');
        break;
        case 7: console.log('Summer');
        break;
        case 8: console.log('Summer');
        break;
        case 9: console.log('Autumn');
        break;
        case 10: console.log('Autumn');
        break;
        case 11: console.log('Autumn');
        break;
        case 12: console.log('Winter');
        break;
    }
}