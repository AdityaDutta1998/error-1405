const question_button = document.getElementById("goto_question_button");
const yes_button = document.getElementById("yes_button");
const no_button = document.getElementById("no_button");

question_button.addEventListener('click', generateQuestion);
yes_button.addEventListener('click', generateYesAction);
no_button.addEventListener('click', generateNoAction);

function generateQuestion(){
    document.getElementById('questionDiv').style.display = "block";
}

function generateYesAction(){
    window.location.href = "wohoo.html";
}

function generateNoAction(){
    document.getElementById('noDiv').style.display = "block";
}