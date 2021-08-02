window.onload = mainprogram();
function mainprogram() {
    var qlist = document.getElementsByClassName("arrow");
    var qlist2 = document.getElementsByClassName("question")
    Array.from(qlist).forEach(element => {
        element.onclick = showAnswer;
    });
    Array.from(qlist2).forEach(element => {
        element.onclick = showAnswer2;
    });
}
function showAnswer(arrow) {
    arrow.preventDefault();

    var img = arrow.target;
    var id = img.parentNode.id + "-ans";
    var ques = document.getElementById(img.parentNode.id);
    var ans = document.getElementById(id);

    if (ans.style.display != "block") {
        ans.style.display = "block";
        ques.style.fontWeight = "1000";
        img.style.transform = 'rotate(180deg)';
    }
    else {
        ans.style.display = "none";
        ques.style.fontWeight = "500";
        img.style.transform = 'rotate(360deg)';
    }
}
function showAnswer2(question) {
    question.preventDefault();

    var ques = question.target;
    var img = ques.firstElementChild;
    let id = ques.id + "-ans";
    var ans = document.getElementById(id);
    if (ans != null) {
        if (ans.style.display != "block") {
            ans.style.display = "block";
            ques.style.fontWeight = "1000";
            img.style.transform = 'rotate(180deg)';

        }
        else {
            ans.style.display = "none";
            ques.style.fontWeight = "500";
            img.style.transform = 'rotate(360deg)';

        }
    }
}