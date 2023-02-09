let whoseTurn = 'player2'
let diceNumber;
let diceHistory = [];


const diceRoll = () => {
    //random number generated and stored in diceNumber variable and pushed in diceHistory as well
    diceNumber= Math.floor(Math.random() * 6 + 1);
    console.log(diceNumber);
    diceHistory.push(diceNumber);
    console.log(diceHistory);
    //clear dicehistory if dicehistory is not equal to 6
    if(diceHistory.length > 0 && diceHistory[diceHistory.length-1] !== 6){
        diceHistory = [];
        //shows result in html
        document.getElementById("results1").innerHTML = `The dice face is ${diceNumber}, now this is ${whoseTurn} turn`
        whoseTurn = "Player1"
    //toggle player
        document.getElementById("player1").addEventListener("click", btnToggle());
        function btnToggle(){
            document.getElementById("player2").disabled = false
           }
        
    }

    if (diceHistory.length > 2 && diceHistory[diceHistory.length-1] == 6 ) {
        //no toggle of player
        alert("Try again")
    } 
    
     
}
diceRoll();

