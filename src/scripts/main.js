// /**
//  * Created by soonsung on 2017-06-20.
//  */
//
// window.alert('hello');
//
// for(var i=1; i<=9; i++){
//     for (var j=1; j<=9; j++) {
//         console.log('i*j =' + i*j);
//     }
// }


//8. 논리 연산자

/*
var a ;
var b = a || 0;
console.log(b);


//0.9 배열의 기본
var arr = ['h' , 'e' , 'f'];

/*
arr.push('world');

console.log(arr);

console.log(arr[2]);



for(var item in arr){
    console.log(arr[item]);
}
*/
//10.함수
/*
function addTwoNumbers(a,b) {
    return a+b;
}
console.log(addTwoNumbers(2,3));

 var subTwoNumbers = function (a,b) {
    return a - b;
};

 console.log(subTwoNumbers(5,3));

 var multiplyTwoNumbers = function (a,b) {
     console.log(a*b);
 };

var ret = multiplyTwoNumbers(4,6);
console.log(ret);

function plusThree(a) {
    var resultOutter = a + 3;

    function plusTwo() {
        return resultOutter +2;
    }
    return plusTwo(resultOutter);

}
    console.log(plusThree(3));
*/
/*
function getCalcNumbers(callback) {

    var result = callback(10,60);
    return result;
}
var callbackFunction = function(numberOne,numberTwo) {
    return numberOne + numberTwo;
}
var result = getCalcNumbers(callbackFunction);

console.log(result);


//10-1 콜백함수(함수형 프로그래밍 기본)
var adder = function(a,b){
    return a+b;
};

var subber = function (a,b) {
    return a - b;
};

*/
/*
function getCalcNumber(a,b,func) {
    return func(a,b);
}

function sum(datas){
    var acc=0;
    for(var item in datas){
        acc += datas[item];
    }
    return acc;
}

function average(datas) {
    return sum(datas)/datas.length;
}

function calcNumbers(datas,func) {
    return func(datas);

}
var arr = [1, 2, 3, 4, 5, 6];
console.log(calcNumbers(arr, sum));
console.log(calcNumbers(arr, average));

function makeSquare(val){
    return function () {
       return val*val;
    }
}

var square = makeSquare(3)();

console.log(square);

*/


/*
// 11. 변수의 스코프(scope of variables)
function scopeTest(a) {
    var b = 5;

    if(1) {
        var c = 3;
        console.log(c);
    }
    console.log(c);
}

scopeTest();

window.alert('hello');

var clickConfirm = window.confirm('확인해라');

if (clickConfirm) {
    console.log('확인을 클릭하셨어요');
} else {
    console.log('취소를 클릭하셨어요');
}

*/
// 자바스크립트는 함수 객체 배열 을 제대로 알아야함.

//12. 자바스크립트 객체
/*
var obj = {};   //오브젝트를 표시하는 값임

var num = 5 ;
var str = 'hello';  //
var bool = true; //false
var arr = [];
var obj = {};

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof obj);
console.log(typeof arr);

//

var obj2 = {

};
*/
//자바스크리트는 클래스가 없다. 함수가 존재하고 메소드가 존재하지 않음

//
// var art1 = {
//     articleId :1,
//     title: 'hello',
//     author:'kim',
//     content:'테스트에요..'
//
// };
//
// var art2 = {
//     articleId:2,
//     title : '제목',
//     author:'lee',
//     content:'테스트입니다.',
//     add: function (a,b) {
//         return a+b;
//     },
//     sub: function (a,b) {
//         return a- b;
//     }
// };
//
// console.log(art2.add(3,5));
//
//
// var artList =
//     [
//         {
//             articleId :1,
//              title: 'hello',
//             author:'kim',
//             content:'테스트에요..'
//        },
//         {
//             articleId:2,
//             title : '제목',
//             author:'lee',
//             content:'테스트입니다.'
//          }
//     ];
//
//
//
// var theText =$('h1').text();
// console.log(theText);
//
// $('h1').text('너 어디가니?');
//
// var thecontent = $('p').text();/
// console.log(thecontent);

// $('p').text('hello');

jQuery(document).ready(function () {

    $('#myForm').on('click','input:button',function () {

        $.ajax('https://api.github.com/users/suns303',{
            success:function (response) {
                var login = response.login;
                var id = response.id;
                var loc = response.location;
                var cAt =response.created_at;

                $('#destinations')
                    .children(':first-child')
                    .children('h2')
                    .text(login);
                $('#destinations')
                    .children(':nth-child(2)')
                    .text(id);
                $('#destinations')
                    .children(':nth-child(3)')
                    .text(loc);
                $('#destinations')
                    .children(':nth-child(4)')
                    .text(cAt);

            }
        });
    });

    $('#destinations').on('mouseenter','li:nth-child(2)', function () {
        $(this).parent('#destinations').children('li:last-child').slideUp()

    });

    $('#destinations').on('mouseout','li:nth-child(2)', function () {
        $(this).parent('#destinations').children('li:last-child').fadeIn();

    });

    $('#myForm').on('keyup','input:text', function () {
        //1.텍스트박스에 쓴 숫자를 가지고 온다.
        var howMany = isNaN(+$(this).val()) ? 0 : +$(this).val();
        // console.log(howMany);

        $('#destinations')
            .children('li:last-child')
            .children('span')
            .text(howMany*562);

    });

    // $(document).ready(function () {
    //     $('.vacation').on('keyup','.quantity',function () {
    //         var price = +$(this).closest('.vacation').data('price');
    //         var quantity =+$(this).val();
    //         $('#total').text(price*quantity);
    //
    //     })
    // })


    $('.vacation').on('click','button', function () {



        // $('#destinations').children('li.vacation').children('button').remove();
        // 버튼위치에 가격이 나타나게한다.
        var priceTag = $('<p>From $399.99</p>');
        $(this).after(priceTag);
        // 버튼 사라지게 한다.
        $(this).remove();

    });

    /*
     var priceTag = $('<p>From $399.99</p>');

     $('#destinations').children('li.vacation').prepend(priceTag);

     $('#destinations').children('li.promo').remove;
     */

    // $('li').first().next().text('seoul');



/*
    $('#destinations').find('li').text('seoul');
    $('.promo');
*/
/*

 $('#bookBigCon').children(ul).first().children('li').first().next()
     .children('div.goods_img.bookp').children('span').children('a').children('img')


    //#yDetailTopWrap > div.topColRgt > div.gd_infoBot > div.gd_infoTbArea > div.gd_infoTb > table > tbody > tr.accentRow >
    // td > span > em
 $('#yDetailTopWrap').children('div.topColRgt').children('div.gd_infoBot').children('div.gd_infoTbArea')
     .children('div.gd_infoTb').children('table').children('tbody').children('tr.accentRow').children('td').children('span').children('em')
*/
});








