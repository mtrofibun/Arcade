let questioncounter = 0;

const questions = [{
    question : 'Question 1',
    type : 'EI',
    option1 : 'Hello',
    option2 : 'Hello2'
},
{
    question : 'Question 2',
    type : 'EI',
    option1 : 'Option1',
    option2 : 'option2'
},
{
    question : 'Question 3',
    type : 'EI',
    option1 : 'question3',
    option2 : 'question3'
},



]


const optionButtons = document.querySelector('#group-buttons');

optionButtons.addEventListener('click', event =>{
    if(event.target.id == "option-one"){
        console.log('one');
    }
    else if(event.target.id == "option-two"){
        console.log('two');
    }
    questioncounter += 1;
    questionFunction();
})



function questionFunction(){
    if(questioncounter < Object.values(questions).length){
    document.getElementById('questions').textContent = questions[questioncounter].question;
    document.getElementById('option-one').textContent = questions[questioncounter].option1;
    document.getElementById('option-two').textContent = questions[questioncounter].option2;
    }
    else{
        results();
    }

}

function results(){
    document.getElementById('questions').style.display = 'none';
    document.getElementById('option-one').style.display = 'none';
    document.getElementById('option-two').style.display= 'none';
    let mbti = '';
    for(let key in data){
        if(questions[key][0] > questions[key][1]){
            
        }
    }
}


const types = [

    {'EI' : { 'E' : 0,'I' : 0,} },

    {'SN' : { 'S' : 0,'N' : 0,} },

    {'TF' : { 'T' : 0,'F' : 0,} },

    {'JP' : { 'J' : 0,'P' : 0,} },


]



document.getElementById('token-button').addEventListener('click', function() {

    const start = document.getElementById('start-page');
    start.style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    questionFunction()

}
);


