

var userName = prompt('Введіть своє імя');
var a = Number(prompt('Введіть число-значення для "a"'));
var b = Number(prompt('Введіть число-значення для "b"'));
var c = Number(prompt('Введіть число-значення для "c"'));
document.write( 'Привіт, ' + userName + ' !');

document.write('<br>')

document.write('<br>')
document.write('Рівння з значеннями які Ви ввели:');
document.write('<br>')
document.write('<br>')
document.write(a + 'x<sup>2</sup> + ' + b + 'x + ' + c + ' = 0');
document.write('<br>')
document.write('<br>')
document.write('Ваші корені: ');
document.write('<br>');
document.write('<br>');

var result = equation(a,b,c);
document.write(result);

function discriminator(a,b,c){
    var d = b*b-4*a*c;
    return d;
}

function equation(a,b,c){
    var result;
    if (a===0){
        document.write('Помилка у рівнянні!');
        result=-c/b;
        return  result;
    }
    var d = discriminator(a,b,c);
    if (d<0) {
        return 'Помилка у рівнянні!'
    }
    if(d===0){
        var x1= (-b+Math.sqrt(d))/2*a;
        return ' x<sub>1</sub>= ' + x1;
    }
    var x1= (-b+Math.sqrt(d))/(2*a);
    var x2= (-b-Math.sqrt(d))/(2*a);
    return 'x<sub>1</sub>= ' + x1 + '; x<sub>2</sub>= ' + x2;
}