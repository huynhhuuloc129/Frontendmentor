window.onload = mainprogram;
function mainprogram() {
    var qlist = document.getElementsByTagName("pre");
    for (let i = 0; i < qlist.length; i++) {
        qlist[i].onclick = showAnswer;
    }
}
function showAnswer(question) {
    var ques = question.target;
    var id = ques.id + "-ans";
    var ans = document.getElementById(id);

    if (ans.style.display != "block") {
        ans.style.display = "block";
        ques.style.fontWeight="1000"
    }
    else {
        ans.style.display = "none";
        ques.style.fontWeight="500"
    }
}