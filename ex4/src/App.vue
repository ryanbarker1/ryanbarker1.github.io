<template>
  <div id="app">
    <section class="row">
      <div class="small-6 columns">
        <h1 class="text-center">PLAYER</h1>
        <div class="wins">
          <div class="wins text-center" style="background-color: green; margin: 0; color: white;" :style="{width: playerWins + '0%'}">
            {{playerWins}}
            {{playerPoints()}}
          </div>
        </div>
      </div>
      <div class="small-6 columns">
        <h1 class="text-center">COMPUTER</h1>
        <div class="wins">
          <div class="wins text-center"  style="background-color: green; margin: 0; color: white;" :style="{width: computerWins + '0%'}">
            {{computerWins}}
            {{computerPoints()}}
          </div>
        </div>
      </div>
    </section>
    <section class="row controls">
      <div class="small-12 columns">
        <button @click="show = !show" :class="" id="start-game">START NEW GAME</button>

      </div>
    </section>
    <section v-if="!show" class="row controls">
      <div class="small-12 columns">
        <button @click="rock" :class="player" id="rock">ROCK</button>
        <button  @click="paper" :class="player" id="paper">PAPER</button>
        <button @click="scissors" :class="player" id="scissors">SCISSORS</button>
        <button @click="restart" :class="player" id="restart">RESTART</button>
      </div>
    </section>
    <section class="row log">
      <div class="small-12 columns">

        <ul>
          <li v-for="result in turns" :class="{'player-turn': result.won, 'computer-turn': result.lose, 'tie-turn': result.tied}">
            {{result.text}}

          </li>

        </ul>

      </div>
    </section>
  </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            show: true,
            player: {rock: false, paper: false, scissors: false},
            computerWins: 0,
            playerWins: 0,
            playerWon: {won: false, lose: false, tied: false},
            turns: []
        }
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
            else {
                this.turns.unshift({
                    tied: true,
                    text: 'Computer chooses rock| you tied'
                });
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
            }
            else if (computer === 1) //rock
            {
                this.turns.unshift({
                    won: true,
                    text: 'Computer chooses Rock| paper beats rock| you win!'
                });
                this.playerWins += 1;
            }
            else {
                this.turns.unshift({
                    tied: true,
                    text: 'Computer chooses paper| you tied'

                });
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
            }
            else if (computer === 2) //paper
            {
                this.turns.unshift({
                    won: true,
                    text: 'Computer chooses paper| scissors beats paper| you win!'
                });
                this.playerWins += 1;
            }
            else {
                this.turns.unshift({
                    tied: true,
                    text: 'Computer chooses scissors| you tied'
                });
            }
        },
        /*this function resets all data to its original positions*/
        restart: function () {
            this.computerWins = 0;
            this.playerWins = 0;
            this.turns = [];
            this.show = true;
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
        }

    }
}

</script>

<style>
  .text-center {
    text-align: center;
  }

  .wins {
    width: 80%;
    color: black;
    height: 40px;
    background-color: #eee;
    margin: auto;
    transition: width 1000ms;
  }

  .controls, .log {
    margin-top: 30px;
    text-align: center;
    padding: 10px;
    border: 1px solid #ccc;
    box-shadow: 0px 3px 6px #ccc;
  }

  .turn {
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 22px;
  }

  .log ul {
    list-style: none;
    font-weight: bold;
    text-transform: uppercase;
  }

  .log ul li {
    margin: 5px;
  }

  .log ul .player-turn {
    color: green;
    background-color: #aaffb0;
  }

  .log ul .computer-turn {
    color: red;
    background-color: #ffc0c1;
  }

  .log ul .tie-turn {
    color: blue;
    background-color: #e4e8ff;
  }

  button {
    font-size: 20px;
    background-color: #eee;
    padding: 12px;
    box-shadow: 0 1px 1px black;
    margin: 10px;
  }

  #start-game {
    background-color: #e4e8ff;
  }

  #start-game:hover {
    background-color: #687eff;
  }

  #rock {
    background-color: #ff7367;
  }

  #rock:hover {
    background-color: #ff3f43;
  }

  #paper {
    background-color: #ffaf4f;
  }

  #paper:hover {
    background-color: #ff9a2b;
  }

  #scissors {
    background-color: #aaffb0;
  }

  #scissors:hover {
    background-color: #76ff7e;
  }

  #restart {
    background-color: #ffffff;
  }

  #restart:hover {
    background-color: #c7c7c7;
  }
</style>
