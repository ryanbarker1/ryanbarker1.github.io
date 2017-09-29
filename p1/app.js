new Vue({
  el: '#app',
  data: {
      show: true,
      //computer: {rock: false, paper: false,'scisso},
      player: {rock: false, paper: false, scissors: false},
      computerWins: 0,
      playerWins: 0,
      playerWon: {won: false, lose: false, tied: false},
      turns: []
  },
  methods: {
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

      restart: function(){
         // alert("s");
          //show: false,
          //computer: {rock: false, paper: false,'scisso},
          //player: {rock: false, paper: false, scissors: false},
         this.computerWins = 0;
          this.playerWins = 0;
          this.turns = '';
          this.show = true;
          this.rock = false;
          this.paper = false;
          this.scissors = false;
          //playerWon: {won: false, lose: false, tied: false},
      },

        ranComputer: function(){
            var randomChoice = Math.floor((Math.random()*3) + 1)
                    // if(randomChoice === 1);
                    // else if(randomChoice === 2 );
                    // else {return 'scissors'}
            return randomChoice;
        }
  },

    computed: {
      points: function(){
          var cPoints = this.computerWins;
          var pPoints = this.playerWins;
          if(cPoints === 10){
              return alert('Game Over');
          }
          else if(pPoints === 10){
              return alert('Game Over');
          }
            else{}


}
    }
});