<template>
  <div class="section background modifier">
    <div class="columns is-mobile is-size-6 is-centered" v-for="(participant, n) in $store.state.participants" :key="n">
      <div :class="responsive" class="column dotted standard-size is-paddingless is-centered is-narrow" v-for="(participant, m) in $store.state.participants" :key="m" v-on:click="changeXY(n,m)">
        <div v-if="n <= 0">
          <h1 class="has-text-centered has-text-weight-bold has-text-centered is-size-5 has-text-white">{{participant}}</h1>
        </div>
        <div class="has-text-centered has-text-weight-bold is-size-5 has-text-white" v-else-if="m <= 0">
          {{$store.state.participants[n]}}
        </div>
        <div class="background-black-fill" v-else-if="m == n">
        </div>
        <div v-else class="fill expand dotted has-text-white">
          <div class="has-text-centered">
            <div class="is-size-6">[{{n}}, {{m}}]</div>
            <div class="wrap" v-for="(ippon, key) in $store.state.round_robin_card[n-1][m-1].points" :key="key" v-on:click="removeIppon({x: n-1, y: m-1, index: key})">
              <img class="top-right-hidden" src="~/static/delete.svg" width="15px" height="15px">
              <img :src="ippon + '.svg'" width="40px">
            </div>
          </div>
          <div class="menu-left has-text-white">
            <div class="dotted">
              <div class="has-text-centered">
                <div class="wrap menu-item" v-on:click="addIppon({x: n-1, y: m-1, ippon: MEN})">
                  <img class="top-right super" src="~/static/add.svg">
                  <img class="icon" src="~/static/men.svg">
                </div>
                <div class="wrap menu-item" v-on:click="addIppon({x: n-1, y: m-1, ippon: KOTE})">
                  <img class="top-right super" src="~/static/add.svg">
                  <img class="icon" src="~/static/kote.svg">
                </div>
                <div class="wrap menu-item" v-on:click="addIppon({x: n-1, y: m-1, ippon: DOU})">
                  <img class="top-right super" src="~/static/add.svg">
                  <img class="icon" src="~/static/dou.svg">
                </div>
                <div class="wrap menu-item" v-on:click="addIppon({x: n-1, y: m-1, ippon: TSUKI})">
                  <img class="top-right super" src="~/static/add.svg">
                  <img class="icon" src="~/static/tsuki.svg">
                </div>
                <div class="wrap menu-item">
                  <img class="icon" src="~/static/win.svg">
                </div>
                <div class="wrap menu-item">
                  <img class="icon" src="~/static/lose.svg">
                </div>
                <div class="wrap menu-item">
                  <img class="icon" src="~/static/tie.svg">
                </div>
              </div>
            </div>
          </div>
          <!-- {{$store.state.round_robin_card[n-1][m-1]}} -->
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { MEN, KOTE, DOU, TSUKI } from '../store/shiai_constants'
import { ADD_IPPON, REMOVE_IPPON } from '../store/mutation-types'

export default {
  data: () => {
    return {
      MEN,
      KOTE,
      DOU,
      TSUKI,
      x: 0,
      y: 0
    }
  },
  computed: {
    responsive: () => {
      // return 'is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd'
      // return ''
    }
  },
  methods: {
    addIppon (data) {
      this.$store.commit(ADD_IPPON, data)
    },
    removeIppon (data) {
      this.$store.commit(REMOVE_IPPON, data)
    },
    changeXY (x, y) {
      this.x = x
      this.y = y
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

  // 15% chance for tie match
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
  background-color: #161616;
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

.standard-size {
  min-width: 125px;
  max-width: 125px;
  min-height: 175px;
}

.fill {
  height: 100%;
  width: 100%;
  background-color: #756d6d;
}

.expand {
  display: inline-block;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.12s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.expand::after {
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  opacity: 0;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.12s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.expand:hover {
  transform: scale(1.3, 1.5);
  z-index: 100;
}

.expand:hover .menu-right {
  opacity: 1;
}

.expand:hover .menu-left {
  opacity: 1;
}

.menu-right {
  position: absolute;
  background-color: green;
  z-index: inherit;
  opacity: 0;
  top: 0;
  left: 100%;
  width: 75%;
  height: 100%;
  border: 3px solid #73AD21;
}

.menu-left {
  position: absolute;
  background-color: white;
  z-index: inherit;
  opacity: 0;
  top: 0;
  right: 100%;
  width: 75%;
  height: 100%;
  min-width: 75%;
  min-height: 100%;
  max-width: 75%;
  max-height: 100%;
}

.menu-item {
  display: inline;
}

.wrap {
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin: 1px;
}

.wrap .top-right {
  position: absolute;
  top: -2px;
  /* Moves to to the right corner of image */
  right: -3px;
  z-index: inherit;
}

.wrap .top-right-hidden {
  position: absolute;
  top: -2px;
  /* Moves to to the right corner of image */
  right: -3px;
  z-index: inherit;
  opacity: 0;
}

.icon {
  width: 30px;
}

.super {
  width: 11px;
  height: 11px;
}

.wrap:hover .top-right-hidden {
  opacity: 1;
}
</style>