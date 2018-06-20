var scores,roundScore,activePlayer,gamePlay;

init();

function rolling(){
    if(gamePlay) {
        var dice = Math.ceil(Math.random() * 6);
        var dom = document.querySelector('.dice');

        dom.style.display = 'block';
        dom.src = 'dice-' + dice + '.png';

        if (dice !== 1) {
            roundScore += dice;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        }
        else {
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';
        }
    }
};

function score(){
    document.querySelector('.dice').style.display='none';
    scores[activePlayer]+=roundScore;
    document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
    if(scores[activePlayer]>=20){
        document.getElementById('name-'+activePlayer).textContent='Winner!';
        document.getElementById('name-'+activePlayer).style.color='red';
        document.querySelector('.dice').style.display='none';
        gamePlay=false;
    }
    activePlayer===0?activePlayer=1:activePlayer=0;
    roundScore=0;
    document.getElementById('current-'+activePlayer).textContent='0';
};

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlay=true;


    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    document.getElementById('name-0').style.color='black';
    document.getElementById('name-1').style.color='black';
};
document.querySelector('.btn-roll').addEventListener('click',rolling);
document.querySelector('.btn-hold').addEventListener('click',score);
document.querySelector('.btn-new').addEventListener('click',init);

