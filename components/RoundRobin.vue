<template>
  <div class="section background modifiers">
    <div class="columns is-mobile is-size-6" v-for="(participant, n) in $store.state.participants" :key="n">
      <div class="column standard-size is-marginless is-paddingless" v-for="(participant, m) in $store.state.participants" :key="m">
        <div v-if="n <= 0">
          <h1 class="has-text-centered has-text-weight-bold has-text-centered centering is-size-5">{{participant}}</h1>
        </div>
        <div class="has-text-centered has-text-weight-bold centering is-size-5" v-else-if="m <= 0">
          {{$store.state.participants[n]}}
        </div>
        <div class="background-black-fill" v-else-if="m == n">
        </div>
        <div v-else class="fill expand dotted is-size-4">
          [{{n-1}}, {{m-1}}]
          <!-- {{$store.state.score_card[n-1][m-1]}} -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {MEN, KOTE, DOU, TSUKI, RED, WHITE, ONEPOINTMATCH, TWOPOINTMATCH, TWOTOONEMATCH, TIEMATCH} from '../store/shiai_constants'

export default {
  data: () => {
    return {
    }
  },
  methods: {
    toggleHello () {

    }
  }
}
/*
console.log(simulateRoundRobinKendoMatches(8))

function simulateRoundRobinKendoMatches (playerCount) {
  console.log(WHITE)
  console.log(RED)

  let scoreCard = []

  for (let i = 0; i < playerCount; i++) {
    for (let i = 0; i < playerCount; i++) {
      scoreCard[i] = []
    }
  }

  // Simulation
  for (let n = 0; n < playerCount; n++) {
    for (let m = 0; m < playerCount; m++) {
      if (n === m) {
        scoreCard[n][m] = 'N/A'
      } else {
        scoreCard[n][m] = simulate()
      }
    }
  }

  return scoreCard

  function simulate () {
    let score = {'encho': false, 'tie': false, RED: [], WHITE: [], 'outcome': ''}

    if (onePointMatch()) {
      if (encho()) { score['encho'] = true } else { score['encho'] = false }
      score['outcome'] = ONEPOINTMATCH
      switch (redOrWhiteWon()) {
        case true:
          score.RED.push(ippon())
          break
        case false:
          score.WHITE.push(ippon())
          break
      }
      return score
    } else if (twoPointMatch()) {
      // if (encho()) { score[ENCHO] = true } else { score[ENCHO] = false }
      score['outcome'] = TWOPOINTMATCH
      switch (redOrWhiteWon()) {
        case true:
          score.RED.push(ippon())
          score.RED.push(ippon())
          break
        case false:
          score.WHITE.push(ippon())
          score.WHITE.push(ippon())
          break
      }
      return score
    } else if (twoToOnePointMatch()) {
      score['outcome'] = TWOTOONEMATCH
      if (encho()) { score['encho'] = true } else { score['encho'] = false }
      switch (redOrWhiteWon()) {
        case true:
          score.RED.push(ippon())
          score.RED.push(ippon())
          score.WHITE.push(ippon())
          break
        case false:
          score.WHITE.push(ippon())
          score.WHITE.push(ippon())
          score.RED.push(ippon())
          break
      }
      return score
    } else {
      score['tie'] = true
      score['outcome'] = TIEMATCH
      return score
    }
  }

  // 50% chance to win between red or white.
  function redOrWhiteWon () {
    return Math.random() <= 0.5
  }

  // 30% chance for onePointMatch
  function onePointMatch () {
    return Math.random() <= 0.3
  }

  // 20% chance for Over Time
  function encho () {
    return Math.random() <= 0.2
  }

  // 60% chance for twoPointMatch
  function twoPointMatch () {
    return Math.random() <= 0.6
  }

  function twoToOnePointMatch () {
    return Math.random() <= 0.4
  }

  // 20% chance for tie match
  // function tieMatch () {
  //   return Math.random() <= 0.15
  // }

  // Random number between 1 and 4. 1 = Men, 2 = Kote, 3 = Dou, 4 = Tsuki
  function ippon () {
    const ippon = Math.floor(Math.random() * 4) + 1
    switch (ippon) {
      case 1: return MEN
      case 2: return KOTE
      case 3: return DOU
      case 4: return TSUKI
    }
    return 0
  }
}
*/
</script>

<style scoped>
.background {
  background-color: lavenderblush;
}

.background-black-fill {
  background-color: black;
  width: 100%;
  height: 100%;
}

.modifiers {
  overflow-x: auto;
}

.dotted {
  border-style: dotted;
}

.background-black {
  background-color: black;
  height: 100%;
  width: 100%;
}

.centering {
  margin-top: 50px;
}

.standard-size {
  min-width: 150px;
  min-height: 175px;
}

.fill {
  height: 100%;
  width: 100%;
  background-color: red;
}

.expand {
  display: inline-block;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.expand::after {
  border-radius: 5px;
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  opacity: 0;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

/* Scale up  */
.expand:hover {
  transform: scale(1.6, 1.6);
}



</style>