new Vue({
  el: '#app',
  data: {
      show: true,
      player: {rock: false, paper: false, scissors: false},
      computerWins: 0,
      playerWins: 0,
      playerWon: {won: false, lose: false, tied: false},
      turns: []
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
            }
           else if (computer === 3) { //scissors

                this.turns.unshift({
                    won: true,
                    text: 'Computer chooses scissors| Rock beats scissors| you win!'
                });
                 this.playerWins += 1;
            }
            else{
                this.turns.unshift({
                    tied: true,
                    text: 'Computer chooses rock| you tied'
                });
            }

        },
     paper: function (){
         /*The user picks paper and the computer will choose a random number then compare and display the outcome*/
            var computer = this.ranComputer();
            if(computer === 3) //scissors
            {
                this.turns.unshift({
                    lose: true,
                    text: 'computer chooses scissors| scissors beats paper| computer wins'
                });
                this.computerWins += 1;
            }
            else if(computer === 1) //rock
            {
                this.turns.unshift({
                    won: true,
                    text: 'Computer chooses Rock| paper beats rock| you win!'
                });
                this.playerWins += 1;
            }
            else
            {
                this.turns.unshift({
                    tied: true,
                    text: 'Computer chooses paper| you tied'

                });
            }
      },

      scissors: function (){
          /*The user picks scissors and the computer will choose a random number then compare and display the outcome*/
          var computer = this.ranComputer();
          if(computer === 1) //rock
          {
              this.turns.unshift({
                  lose: true,
                  text: 'computer chooses rock| rock beats scissors| computer wins'
              });
              this.computerWins += 1;
          }
          else if(computer === 2) //paper
          {
              this.turns.unshift({
                  won: true,
                  text: 'Computer chooses paper| scissors beats paper| you win!'
              });
              this.playerWins += 1;
          }
          else
          {
              this.turns.unshift({
                  tied: true,
                  text: 'Computer chooses scissors| you tied'
              });
          }
      },
/*this function resets all data to its original positions*/
      restart: function(){
         this.computerWins = 0;
          this.playerWins = 0;
          this.turns = [];
          this.show = true;
      },
/*randomizes and selects the number for the computer to choose*/
        ranComputer: function(){
            var randomChoice = Math.floor((Math.random()*3) + 1);
            return randomChoice;
        },
/*once either the computers points or the players reaches to 10 then the game ends*/
      computerPoints: function() {
          var cPoints = this.computerWins;

          if (cPoints === 10) {
              return alert('Game Over! Computer wins. Restart to play again');
          }

      },

      playerPoints: function () {
          var pPoints = this.playerWins;
      if(pPoints === 10)
          {
              return alert('Game Over! You won! Restart to play again')
          }
      }

      },

});