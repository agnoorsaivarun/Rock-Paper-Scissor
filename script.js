var userScore=0
var computerScore=0
var userChoice="" 
var computerChoice=""
var noOfRounds=document.getElementById('input').value
var computerArr=["ROCK","PAPER","SCISSORS"]
function gameStart(){
    noOfRounds=document.getElementById('input').value
    document.getElementById('gr').innerText="Game Started"
    document.getElementById('rl').innerText=`${noOfRounds} Rounds Left`    
}
function gameFun(value){
    noOfRounds--
    if(noOfRounds<0){
        document.getElementById('play').innerText="Restart Game by Refreshing the Page"
        setTimeout(() => {
            window.location.reload()
          }, 3000);
        alert("Game Completed. Please restart to continue")
        return
    }
    document.getElementById('rl').innerText=`${noOfRounds} Rounds Left`
    userChoice=value
    computerChoice=computerArr[Math.floor(Math.random()*3)]
    document.getElementById('cc').innerText=`Computer's Choice is ${computerChoice}`
    if(computerChoice=="ROCK" && userChoice=="SCISSORS") {
        computerScore++
        document.getElementById('rr').innerText='LOSE'
    }
    else if(computerChoice=="SCISSORS" && userChoice=="PAPER") {
        computerScore++
        document.getElementById('rr').innerText='LOSE'
    }
    else if(computerChoice=="PAPER" && userChoice=="ROCK") {
        computerScore++
        document.getElementById('rr').innerText='LOSE'
    }
    else if(userChoice=="ROCK" && computerChoice=="SCISSORS") {
        userScore++
        document.getElementById('rr').innerText='WIN'
    }
    else if(userChoice=="SCISSORS" && computerChoice=="PAPER") {
        userScore++
        document.getElementById('rr').innerText='WIN'
    }
    else if(userChoice=="PAPER" && computerChoice=="ROCK") {
        userScore++
        document.getElementById('rr').innerText='WIN'
    }
    else if(computerChoice==userChoice){
        document.getElementById('rr').innerText='TIE'
    }
    document.getElementById('up').innerText=userScore
    document.getElementById('cp').innerText=computerScore
    let result=""
    if(noOfRounds==0){
    if(userScore>computerScore) result="WIN"
    else if(userScore<computerScore) result="LOSE"
    else result="TIE"
    document.getElementById('gr').innerText=result
    }

}