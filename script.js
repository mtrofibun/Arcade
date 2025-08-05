let questioncounter = 0;

const questions = [{
    question : 'You step into a buzzing arcade full of flashing lights and noise. Do you....',
    type : 'EI',
    option1 : 'Jump right into the middle of the action! The flashy bright colors have already caught your attention',
    option2 : 'Analyze the layout, you want to find the games that suit your own rhythm'
},
{
    question : 'Before you start playing, do you....',
    type : 'JP',
    option1 : 'Take a moment to figure out what games you should spend your tokens on, there is no rush',
    option2 : 'Wander freely, letting whatever catches your eye guide your play'
},
{
    question : 'When you pick a game to play, what do you prefer?',
    type : 'SN',
    option1 : `I prefer games with straight forward paths, it's more enjoyable seeing immediate results!`,
    option2 : 'I want games that invite me to explore patterns. I find unique strategies are more fun!'

},
{
    question : 'When faced with the option to pick a new game, what do you usually choose?',
    type : 'SN',
    option1 : 'I want to stick with a familiar game it is good to know exactly what to expect and how to win',
    option2 : 'I would like to try a brand-new game, the more challenging it is the better!'
},
{
    question : 'While waiting your turn on a popular game you spot a group of people...',
    type : 'EI',
    option1 : 'Strike up a conversation with other players, to pass the time I like to share tips',
    option2 : 'Silently observe the current player, I am too focused on the game to notice the group up ahead'

},
{
    question : `It's finally your turn! You're on the track of setting a new record that a crowd has appeared around you!`,
    type : 'EI',
    option1 : `The pressure is on, you can't disappoint your newly made fans!`,
    option2 : `All these eyes on you make you feel like you're going to make a mistake`
},
{
    question : `Oh no! It seems like you've lost the game,`,
    type : 'TF',
    option1 : ``,
    option2 : ``
},
{
    question : 'Time to spend your tickets!',
    type : 'JP',
    option1 : `I'll come back next time, better to save my tickets for a bigger yet better prize!`,
    option2 : `Candy, stamps, fake tattoos! I don't want to leave the arcade empty handed!`
},
{
    question : 'The arcade has already closed, what was the most memorable part of each game?',
    type : 'SN',
    option1 : 'The exact details — like the timing, layout, and mechanics of the games!',
    option2 : 'The amazing plot and storyline, the characters outshined the games!'
},
{
    question : 'Question 3',
    type : 'EI',
    option1 : 'question3',
    option2 : 'question3'
},


]


let scores = {
  E: 0, I: 0,
  S: 0, N: 0,
  T: 0, F: 0,
  J: 0, P: 0
};

const optionButtons = document.querySelector('#group-buttons');
audios_array = [ '/Arcade/graphics/Button.mp3','/Arcade/graphics/Button2.mp3','/Arcade/graphics/Button3.mp3','/Arcade/graphics/Button4.mp3','/Arcade/graphics/Button5.mp3']


optionButtons.addEventListener('click', event =>{
    let mbtitype = ''
    audio_picked = audios_array[Math.floor(Math.random() * audios_array.length)]

    if(event.target.id == "option-one"){
        mbtitype = questions[questioncounter].type.charAt(0)
        scores[mbtitype] += 1;

    }
    else if(event.target.id == "option-two"){
        mbtitype = questions[questioncounter].type.charAt(1)
        scores[mbtitype] += 1;
    }

    let audio = new Audio(audio_picked)
    audio.play();
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

    let mbtiarr = [];
    types = ['E','I','S','N','T','F','J','P']
    for(let i = 0; i < types.length -1; i++){
        if(scores[types[i]] > scores[types[i+1]]){
            mbtiarr.push(types[i])
        }
        else{
            mbtiarr.push(types[i+1])
        }
        i += 1;
    }
    let mbti = mbtiarr.join('')


    
    console.log(mbti)
    document.getElementById('results').style.display = 'block';
    document.getElementById('result-img').src = `graphics/${mbti}.png`
    
}






document.getElementById('token-button').addEventListener('click', function() {

    const start = document.getElementById('start-page');
    start.style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    questionFunction()

}
);


