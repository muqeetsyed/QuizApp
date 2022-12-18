window.onload = function() {

let quiz = [{
  'Question' : 'Which language runs in a web browser?',
   'a' : 'Java',
   'b' :  'Php',
   'c' : 'JavaScript',
   'd' : 'C',
   'Result' : 'c'
},{
    'Question' : 'What does CSS stand for?',
    'a' : 'Central Style Sheets',
    'b' :  'Cascading Style Sheets',
    'c' : 'Cascading Simple Sheets',
    'd' : 'Cars SUVs Sailboats',
    'Result' : 'b'
},{
    'Question' : 'What year was JavaScript launched?',
    'a' : '1992',
    'b' :  '1994',
    'c' : '1996',
    'd' : '1995',
    'Result' : 'd'
}];



const question = document.getElementById('question');
const answers = document.querySelectorAll('.answer');
const text_a = document.getElementById('text_a');
const text_b = document.getElementById('text_b');
const text_c = document.getElementById('text_c');
const text_d = document.getElementById('text_d');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

function loadQuiz(){
    const currentQuizData  = quiz[currentQuiz];
    question.innerText = currentQuizData['Question'];
    text_a.innerText = currentQuizData.a;
    text_b.innerText = currentQuizData.b;
    text_c.innerText = currentQuizData.c;
    text_d.innerText = currentQuizData.d;
}

loadQuiz();

const getSelected = () => {
    let answerel;
    answers.forEach(answer => {
        if(answer.checked == true){
            answerel = answer.id;
        }
    });
    return answerel;
}

const deSelect = () => {
    answers.forEach(answer => {
        answer.checked = false;
    });
}

submit.addEventListener('click',()=>{
    selectedOption = getSelected();

    if(quiz[currentQuiz]?.Result === selectedOption && (selectedOption != undefined)) ++score;
   
    currentQuiz++;
    if(currentQuiz < quiz.length ){
        deSelect();
        loadQuiz();
    }else{
        deSelect();
        
        let main = document.getElementById("main");

        main.remove();
        let h = document.getElementById('test');
        h.innerHTML = `<div style="text-align: center">
        <h2 >You answered ${score}/${quiz.length} questions correctly</h2>
        <button onclick="history.go(0)">Play Again</button>
        </div>
                `
    }
});
}
