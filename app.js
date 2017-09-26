new Vue({
  el: '#app',
  data: {
      show: true,
      computer: ['rock','paper','scissors'],
      player: {rock: false, paper: false, scissors: false},
  },
  methods: {
        rock: function () {
            var computer = this.ranComputer();
            if (computer === this.paper) {
                this.player.unshift()
                text: 'lose';
                lose: true;
            }
           else if (computer === this.scissors) {
                this.player.unshift()
                text: 'win';
                won: true;
            }
            else{
                this.player.unshift();
                text: 'ties';
                tied: true;
            }
            alert('works');
        },
      paper: function (){
            var computer = this.ranComputer();
            if(computer === this.scissors)
            {
                text: 'lose';
                lose: true;
                this.player.unshift();
            }
            else if(computer === this.rock)
            {
                text: 'win';
                won: true;
                this.player.unshift();
            }
            else
            {
                text: 'tied';
                tied: true;
                this.player.unshift();
            }
      },

      scissors: function (){
          var computer = this.ranComputer();
          if(computer === this.rock)
          {
              text: 'lose';
              lose: true;
              this.player.unshift();
          }
          else if(computer === this.paper)
          {
              text: 'win';
              won: true;
              this.player.unshift();
          }
          else
          {
              text: 'tied';
              tied: true;
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