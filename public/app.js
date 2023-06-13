var questions = [
    {
        question: 'HTML stands for ___________________________',
        options: ["HTML", "Hypertext markup language", "javascript", "CSS"],
        correctAnswer: "Hypertext markup language",
    },

    

    {
        question: 'SQL stands for _________________________',
        options: ["Structured Query Language", "Random Access Memory", "Central Superior Service", "None"],
        correctAnswer: "Structured Query Language",
    },

    {
        question: 'How many tags are in a regular element ______',
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
    },

    {
        question: 'CSS stands for ______________________',
        options: ["Cascanding Style Sheet", "CSS", "Class Style sheet", "JavaScript"],
        correctAnswer: "Cascanding Style Sheet",
    },

    {
        question: '<body> is this an opening tag or a closing tag ______________________',
        options: ["No", "Yes"],
        correctAnswer: "Yes",
    },

    {
        question: 'How do you declare a JavaScript variable _____________',
        options: ["variable carname", "var carName", "v carName", "none of these"],
        correctAnswer: "var carName",
    },

    {
        question: 'How to you select an element based on its css class __________________',
        options: ["getElementById", "getelementByClass", "querySelector", "getelementByCss"],
        correctAnswer: "querySelector",
    },

    {
        question: 'Inside which HTML element do we put the JavaScript?',
        options: ["javascript", "script", "js", "scripting"],
        correctAnswer: "script",
    },

];

var currentQuestionNumber = document.getElementById("currentQuestionNumber");
var totalQuestionNumber = document.getElementById("totalQuestionNumber")
var question = document.getElementById("question")
var optionParent = document.getElementById("optionParent");
var indexNum = 0;
var score = 0;

function renderQuestion(){
    currentQuestionNumber.innerHTML = indexNum + 1
    totalQuestionNumber.innerHTML = questions.length;
    var obj = questions[indexNum];
    question.innerHTML = obj.question;
    optionParent.innerHTML = "";
    for(var i = 0; i<obj.options.length; i++){
        optionParent.innerHTML += `<div class="col-md-4">
        <div class="py-2">
        <button onclick="checkQuestion('${obj.options[i]}','${obj.correctAnswer}')" class="btn btn-dark fs-4 rounded-pill w-100">
          ${obj.options[i]}
        </button>
        </div>
    </div> `
    }

}
renderQuestion();

function nextQuestion(){
     indexNum++;
     renderQuestion();
}

function checkQuestion(a, b){
    if(a == b)
    {
        score++;
        console.log(score);
    }
    nextQuestion()
}