var scores, roundScore, activePlayer, gamePlaying;

var endGame = new Audio("end.mp3");

init();

document.querySelector('.btn-roll').addEventListener('click', function (){
    if(gamePlaying){
        var dice = Math.floor(Math.random()*6) + 1;
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
    
        if(dice != 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            changePlayer();
        }
    }
});


document.querySelector('.btn-hold').addEventListener('click', function () {
    if(gamePlaying){
        scores[activePlayer] += roundScore;
        document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
    
        if(scores[activePlayer] >= 20){
            document.getElementById('name-'+ activePlayer).textContent='WINNER!';
            document.querySelector('.dice').style.display='none';
            document.querySelector('.btn-hold').style.display='none';
            document.querySelector('.btn-roll').style.display='none';
            gamePlaying=false;
            document.querySelector('.final-score').style.display = 'block';
            endGame.play();
        } else {
            changePlayer();
        }
     } 
});

function changePlayer () {
    if(activePlayer===0){
            document.getElementById('current-0').textContent = '0';
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.add('active');
            activePlayer=1;
        } else {
            document.getElementById('current-1').textContent = '0';
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');
            activePlayer=0;
        }
    roundScore = 0;
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    activePlayer=0;
    roundScore=0;
    gamePlaying=true;
    document.querySelector('.final-score').style.display = 'none';
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent='Player 1!';
    document.getElementById('name-1').textContent='Player 2!';
    document.querySelector('.btn-hold').style.display='block';
    document.querySelector('.btn-roll').style.display='block';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
}
                                                    
                                                    