let firstAnswer  = window.prompt('Do you head left or right?')
if(firstAnswer === 'left'){
    let secondAnswer = window.prompt(`You come across a stray cat. 
It scampers off down a small hole, just large enough for you to crawl through. 
Do you follow it, or continue on your path?`)

} else if(answer === 'right') {
    let secondAnswer = window.prompt(`You come across a snoring dragon. 
On the other side of him, you see a shiny chest of treasure. Another path would 
lead you away from the dragon altogether. Which path do you take?`)

}

let userScore = 0;

for(let i = 0; i < questions.length; i++){
    let question = questions[i]
    let userAnswer = window.prompt(question.text)
    if(userAnswer === question.correctAnswer){
        userScore = userScore + 10
    }
}

window.alert('Your score is: '+userScore)

let serializedGames = localStorage.getItem('games')


let highestScoringGame = games[0]
for(let i = 0; i < games.length; i++){
    let game = games[i]
    if(game.score > highestScoringGame.score){
        highestScoringGame = game
    }
}
window.alert('The high score is: '+highestScoringGame.score)