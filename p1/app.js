new Vue({
  el: '#app',
  data: {
      show: true,
      computer: ['rock','paper','scissors'],
      player: {rock: false, paper: false, scissors: false},
      computerWins: {width: 0},
      playerWins: {width: 0},
      result: {lose: false, won: false, tied: false},

  },
  methods: {
        rock: function () {
            alert('works');
            var computer = this.ranComputer();
            if (computer === this.paper) {

                text: 'lose';
                this.result.lose = true;
                this.player.unshift();
                return this.computerWins.width += '10%';
            }
           else if (computer === this.scissors) {

                text: 'win';
                this.result.won= true;
                this.player.unshift();
                return this.playerWins.width += '10%';
            }
            else{
                text: 'ties';
                this.result.tied = true;
                this.player.unshift();
            }

        },
     paper: function (){
            alert('works');
            var computer = this.ranComputer();
            if(computer === this.scissors)
            {
                text: 'lose';
                this.result.lose = true;
                this.player.unshift();
                return this.computerWins.width += '10%';
            }
            else if(computer === this.rock)
            {
                text: 'win';
                this.result.won= true;
                this.player.unshift();
                return this.playerWins.width += '10%';
            }
            else
            {
                text: 'tied';
                this.result.tied = true;
                this.player.unshift();
            }
      },

      scissors: function (){
         alert('works');
          var computer = this.ranComputer();
          if(computer === this.rock)
          {
              text: 'lose';
              this.result.lose = true;
              this.player.unshift();
                return this.computerWins.width += '10%';
          }
          else if(computer === this.paper)
          {
              text: 'win';
              this.result.won= true;
              this.player.unshift();
                return this.playerWins.width += '10%';
          }
          else
          {
              text: 'tied';
              this.result.tied = true;
              this.player.unshift();
          }
      },

        ranComputer: function(){
            var randomChoice = Math.floor((Math.random()*9) + 1)
                    if(randomChoice < 3){return 'rock';}
                    else if(randomChoice <=6 ){return 'paper';}
                    else {return 'scissors'}
        }
  }
});