window.onload = main()
var count = 0;
function main() {
    upperpart();
    lowerpart();
}
//      change dark/light mode
function upperpart() {
    let modeicon = document.getElementsByClassName("header-img")[0];
    modeicon.onclick = changeMode;
}
function changeMode(img) {
    $('.header-img').toggleClass("lightmode");
    let classname = img.target.className;

    if (classname.indexOf('lightmode') >= 0) {
        $('head').append('<link class="light" rel="stylesheet" type="text/css" href="light.css">');
        document.getElementsByClassName("sun")[0].src = "./images/icon-moon.svg";
    } else {
        $('.light').remove();
        document.getElementsByClassName("sun")[0].src = "./images/icon-sun.svg";
    }

    img.preventDefault();
}
function changeColor(bgimg, bgcolor, formbgcolor, urlicon, fontcolor) {
    document.body.style.backgroundColor = bgcolor;
    document.body.style.backgroundImage = bgimg;
    document.getElementById("bodyupper").style.background = formbgcolor;
    document.getElementById("middlelower").style.background = formbgcolor;
    Array.from(document.querySelectorAll(".text")).forEach(child => {
        child.style.color = fontcolor;
    });

}
//
//      main program ////////////////////////////////////////////////////////////////////////////////
function lowerpart() {
    let input = document.getElementsByClassName("input")[0];   // lấy form
    let slidepage = document.getElementsByClassName("bodylower-item"); // các nút all, active, completed, ...
    xulicacnut(slidepage);
    input.addEventListener("keyup", function (e) { // Trigger phím Enter
        if (e.key === "Enter" && input.value != "") {
            count++;
            addElement(input.value);
            document.querySelector(".circle" + count).onclick = checkElement; // đặt onclick cho circle
            hoverX(); //hover hiện dấu X;
            document.querySelector(".grandchild" + count).onclick = deleteElement; //xóa x khi click
            showAll();
            input.value = "";
        }
        e.preventDefault;
    });
}
function addElement(value) {  // thêm dãy vừa nhập vào bảng hiển thị listtodo
    $('#listtodo').show();
    $('#listtodo').prepend('<div class="listtodochild listtodochild' + count + '">' +
        '<div class="lchild">' +
        '<div class="circle circle' + count + ' grandchild">&emsp;</div>' +
        '<div class="text text' + count + ' grandchild">' + value + '</div>' +
        '</div>' +
        '<img class="grandchild grandchild' + count + '" src="./images/icon-cross.svg" alt="cross">' +
        '</div>' +
        '<hr class="listtodochild' + count + '">');
    $('.count').text(count + ' items lefts');
}

function checkElement(circle) {  // thêm check vào hình tròn
    $(circle.target).toggleClass("circleactive");
    let circleclass = circle.target.className;
    let index = circleclass.match(/(\d+)/)[0];
    $('.text' + index).toggleClass('textdecor');


    if (circleclass.indexOf("circleactive") >= 0) {
        circle.target.innerHTML = '<img class="check" style ="padding-left: 4px;" src="./images/icon-check.svg" alt="check">';
    } else {
        circle.target.innerHTML = '&emsp;';
    }

    circle.preventDefault();
}
function hoverX() {  // hover hiện dấu X
    let childlist = document.getElementsByClassName('listtodochild');
    Array.from(childlist).forEach(child => {
        childclassname = child.className;
        childclassname = childclassname.slice(childclassname.indexOf(' ') + 1, childclassname.length);
        let index = childclassname.match(/(\d+)/)[0];

        child.onmouseenter = function () {
            document.querySelector('.grandchild' + index).style.display = "inline-block";
        };

        child.onmouseleave = function () {
            document.querySelector('.grandchild' + index).style.display = "none";
        }
    })
}
function deleteElement(X) { // Xóa element
    count--;
    let index = X.target.className.match(/(\d+)/)[0];

    $('.listtodochild' + index).remove();
    $('.count').text(count + ' items lefts');
    X.preventDefault();
}

function xulicacnut(slidepage) {
    slidepage[0].onclick = showAll;
    slidepage[1].onclick = activeOnly;
    slidepage[2].onclick = completedOnly;
    slidepage[3].onclick = clearCompleted;
}
function showAll(e) {
    $(".listtodochild").show();
    $("hr").show();
    if (e!=undefined)e.preventDefault();
}

function activeOnly(e) {
    let circlelist = document.querySelectorAll(".circle");

    Array.from(circlelist).forEach((circlechild, number) => {
        if (number>0){
            let classname = circlechild.className;
            let index = classname.match(/(\d+)/)[0];
            if (classname.indexOf("active")>=0){
                $('.listtodochild'+index).hide();
            } else{
                $('.listtodochild'+index).show();
            }
        }
    });
    e.preventDefault();
}

function completedOnly(e) {
    let circlelist = document.querySelectorAll(".circle");

    Array.from(circlelist).forEach((circlechild, number) => {
        if (number>0){
            let classname = circlechild.className;
            let index = classname.match(/(\d+)/)[0];
            if (classname.indexOf("active")<0){
                $('.listtodochild'+index).hide();
            } else {
                $('.listtodochild'+index).show();
            }
        }
    });
    e.preventDefault();
}
function clearCompleted(e) {
    let circlelist = document.querySelectorAll(".circle");

    Array.from(circlelist).forEach((circlechild, number) => {
        if (number>0){
            let classname = circlechild.className;
            let index = classname.match(/(\d+)/)[0];
            if (classname.indexOf("active")>=0){
                $('.listtodochild'+index).remove();
                count--;
                $('.count').text(count + ' items lefts');

            }
        } 
    });
    e.preventDefault();
    
}