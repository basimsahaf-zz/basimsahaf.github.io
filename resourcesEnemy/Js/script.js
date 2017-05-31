var scores = [0,0];
var roundScore = 0;

var activePlayer = 0;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function (){
    var dice = Math.floor(Math.random()*6) + 1;
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    console.log(diceDOM.src);
    
    if(dice != 1) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        changePlayer();
    }
});


document.querySelector('.btn-hold').addEventListener('click', function () {
    scores[activePlayer] += roundScore;
    document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
    changePlayer();
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
                                                     
                                                     