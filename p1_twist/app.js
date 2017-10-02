new Vue({
    el: '#app',
    data: {
        show: true,
        player: {rock: false, paper: false, scissors: false},
        computerWins: 0,
        playerWins: 0,
        playerWon: {won: false, lose: false, tied: false},
        turns: [],
        bets: 0,
        round: 0,
        playerBets: 10,
        score: 0,
        hScore: 0
    },
    methods: {
        /*The user picks rock and the computer will choose a random number then compare and display the outcome*/
        rock: function () {
            var computer = this.ranComputer();
            console.log(computer);
            if (computer === 2) { //paper

                this.turns.unshift({
                    lose: true,
                    text: 'computer chooses paper| paper beats rock| computer wins'
                });
                this.computerWins += 1;
                this.bets--;
                this.round++;
            }
            else if (computer === 3) { //scissors

                this.turns.unshift({
                    won: true,
                    text: 'Computer chooses scissors| Rock beats scissors| you win!'
                });
                this.playerWins += 1;
                this.score ++;
                this.playerBets++;
                this.round++;
            }
            else {
                this.turns.unshift({
                    tied: true,
                    text: 'Computer chooses rock| you tied'

                });
                this.round++;
                this.bets -= 2;
            }

        },
        paper: function () {
            /*The user picks paper and the computer will choose a random number then compare and display the outcome*/
            var computer = this.ranComputer();
            if (computer === 3) //scissors
            {
                this.turns.unshift({
                    lose: true,
                    text: 'computer chooses scissors| scissors beats paper| computer wins'
                });
                this.computerWins += 1;
                this.bets--;
                this.round++;
            }
            else if (computer === 1) //rock
            {
                this.turns.unshift({
                    won: true,
                    text: 'Computer chooses Rock| paper beats rock| you win!'
                });
                this.playerWins += 1;
                this.score ++;
                this.playerBets++;
                this.round++;
            }
            else {
                this.turns.unshift({
                    tied: true,
                    text: 'Computer chooses paper| you tied'

                });
                this.round++;
                this.bets -= 2;
            }
        },

        scissors: function () {
            /*The user picks scissors and the computer will choose a random number then compare and display the outcome*/
            var computer = this.ranComputer();
            if (computer === 1) //rock
            {
                this.turns.unshift({
                    lose: true,
                    text: 'computer chooses rock| rock beats scissors| computer wins'
                });
                this.computerWins += 1;
                this.bets--;
                this.round++;
            }
            else if (computer === 2) //paper
            {
                this.turns.unshift({
                    won: true,
                    text: 'Computer chooses paper| scissors beats paper| you win!'
                });
                this.playerWins += 1;
                this.score ++;
                this.playerBets++;
                this.round++;
            }
            else {
                this.turns.unshift({
                    tied: true,
                    text: 'Computer chooses scissors| you tied'
                });

                this.bets -= 2;
                this.round++;
            }
        },
        /*this function resets all data to its original positions*/
        restart: function () {
            this.computerWins = 0;
            this.playerWins = 0;
            this.turns = [];
            this.round = 0;
            this.show = true;
            if(this.score > this.hScore){
                this.hScore = this.score;
            }
           // else{this.score = 0;}
            if(this.playerBets <= 0 && this.bets <= 0){
                this.playerBets = 10;
                this.score = 0;
            }

        },
        /*randomizes and selects the number for the computer to choose*/
        ranComputer: function () {
            var randomChoice = Math.floor((Math.random() * 3) + 1);
            return randomChoice;
        },
        /*once either the computers points or the players reaches to 10 then the game ends*/
        computerPoints: function () {
            var cPoints = this.computerWins;

            if (cPoints === 10) {
                return alert('Game Over! Computer wins. Restart to play again');
            }

        },

        playerPoints: function () {
            var pPoints = this.playerWins;
            if (pPoints === 10) {
                return alert('Game Over! You won! Restart to play again')
            }
        },
/*If the player beats the prvious high score it changes to the new score*/
        totalScore: function () {
            var highScore = this.hScore;
            var pScore = this.score;
            if(pScore > highScore){
               pScore = highScore;
                return alert('You beat the high score: ' + this.hScore);
            }

        },
/*if both bets are empty then it is game over*/
        pStart: function(){
            var points = this.bets;
            var plPoints = this.playerBets;
            if(points <=0 && plPoints <= 0)
            {
                return alert('game over');
            }
        },
/*before the game starts it makes sure the player places a bet*/
        start: function () {
            var points = this.bets;
            if(points <= 0)
            {
                this.bets = 0;
                return alert('Place bets before playing');
            }
        }

      },
/*It will play the game for 9 rounds*/
    computed: {
        rounds: function(){
            var dRounds = this.round;
            if(dRounds === 9){
               return alert('Game Over | Your scored ' + this.score);
            }
        }
    }





});
