<template>
  <div v-if="$store.state.round_robin_card" class="section background modifiers">
    <!-- <modal v-if="showModal"/> -->
    <div class="columns is-mobile" v-for="(participant, n) in $store.state.participants" :key="n">
      <div class="column is-mobile-font-size is-paddingless is-centered is-narrow" v-for="(participant, m) in $store.state.participants" :key="m">
        <div class="header-size" v-if="n <= 0">
          <h1 class="has-text-centered has-text-weight-bold has-text-white">{{participant}}</h1>
        </div>
        <div class="standard-size has-text-centered has-text-weight-bold has-text-white" v-else-if="m <= 0">
          <div>{{$store.state.participants[n]}} ({{n}})</div>
          <div>{{$store.state.score_card[n].wins}}W-{{$store.state.score_card[n].losses}}L-{{$store.state.score_card[n].ties}}T / {{$store.state.score_card[n].points}}P</div>
        </div>
        <div class="standard-size background-black-fill" v-else-if="m == n">
        </div>
        <div v-else :class="$store.state.round_robin_card[n][m].outcome" class="standard-size fill expand has-text-white"> <!-- $store.state...outcome is win or lose. check .win and .lose class for more info -->
          <div class="has-text-centered">
            <div class="has-text-black">({{n}}, {{m}})</div>
            <div class="fill-width-only">
              <div class="wrap" v-for="(ippon, key) in $store.state.round_robin_card[n][m].points" :key="key" v-on:click="removeIppon({x: n, y: m, index: key})">
                <img class="top-right-hidden super" src="~/static/delete.svg">
                <img class="medium-icon":src="ippon + '.svg'">
              </div>
            </div>
            <div class="fill-width-only">
              <div class="wrap" v-for="(penalty, key) in $store.state.round_robin_card[n][m].penalty" :key="key" v-on:click="removePenalty({x: n, y: m, index: key})">
                <img class="top-right-hidden super" src="~/static/delete.svg">
                <img class="small-icon":src="penalty + '.svg'">
              </div>
            </div>
            <div class="wrap" v-on:click="resetOutcome({x: n, y: m})">
              <img class="top-right-hidden super" src="~/static/delete.svg">
              <img class="big-icon" v-if="$store.state.round_robin_card[n][m].outcome == 'win'" :src="$store.state.round_robin_card[n][m].outcome + '.svg'">
              <img class="big-icon" v-if="$store.state.round_robin_card[n][m].outcome == 'tie'" :src="$store.state.round_robin_card[n][m].outcome + '.svg'">
            </div>
          </div>
          <div class="menu-left has-text-black rounded-corners">
            <div>
              <div class="has-text-centered">
                <div class="has-text-black">[{{n}}, {{m}}]</div>
                <div class="wrap menu-item" v-on:click="addIppon({x: n, y: m, ippon: MEN})">
                  <img class="top-right super" src="~/static/add.svg">
                  <img class="icon" src="~/static/men.svg">
                </div>
                <div class="wrap menu-item" v-on:click="addIppon({x: n, y: m, ippon: KOTE})">
                  <img class="top-right super" src="~/static/add.svg">
                  <img class="icon" src="~/static/kote.svg">
                </div>
                <div class="wrap menu-item" v-on:click="addIppon({x: n, y: m, ippon: DOU})">
                  <img class="top-right super" src="~/static/add.svg">
                  <img class="icon" src="~/static/dou.svg">
                </div>
                <div class="wrap menu-item" v-on:click="addIppon({x: n, y: m, ippon: TSUKI})">
                  <img class="top-right super" src="~/static/add.svg">
                  <img class="icon" src="~/static/tsuki.svg">
                </div>
                <div class="wrap menu-item" v-on:click="addPenalty({x: n, y: m, penalty: PENALTY})">
                  <img class="top-right super" src="~/static/add.svg">
                  <img class="icon" src="~/static/penalty.svg">
                </div>
                <div class="wrap menu-item" v-if="!$store.state.round_robin_card[n][m].outcome" v-on:click="setWin({x: n, y: m, outcome: WIN})">
                  <img class="icon" src="~/static/win.svg">
                </div>
                <div class="wrap menu-item" v-if="!$store.state.round_robin_card[n][m].outcome" v-on:click="setLose({x: n, y: m, outcome: LOSE})">
                  <img class="icon" src="~/static/lose.svg">
                </div>
                <div class="wrap menu-item" v-if="!$store.state.round_robin_card[n][m].outcome" v-on:click="setTie({x: n, y: m, outcome: TIE})" >
                  <img class="icon" src="~/static/tie.svg">
                </div>
                <div class="wrap menu-item" v-on:click="resetOutcome({x: n, y: m})" >
                  <img class="icon" src="~/static/clear.svg">
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
import { MEN, KOTE, DOU, TSUKI, WIN, LOSE, TIE, PENALTY } from '../store/shiai_constants'
import { ADD_IPPON, REMOVE_IPPON, SET_WIN, SET_LOSE, SET_TIE, RESET_OUTCOME, ADD_PENALTY, REMOVE_PENALTY } from '../store/mutation_types'
// import Modal from './Modal.vue'

export default {
  data: () => {
    return {
      MEN,
      KOTE,
      DOU,
      TSUKI,
      WIN,
      LOSE,
      TIE,
      PENALTY
      // showModal: true
    }
  },
  // components: {
  //   Modal
  // },
  computed: {
  },
  methods: {
    addIppon (data) {
      this.$store.commit(ADD_IPPON, data)
    },
    removeIppon (data) {
      this.$store.commit(REMOVE_IPPON, data)
    },
    addPenalty (data) {
      this.$store.commit(ADD_PENALTY, data)
    },
    removePenalty (data) {
      this.$store.commit(REMOVE_PENALTY, data)
    },
    setWin (data) {
      this.$store.commit(SET_WIN, data)
    },
    setLose (data) {
      this.$store.commit(SET_LOSE, data)
    },
    setTie (data) {
      this.$store.commit(SET_TIE, data)
    },
    resetOutcome (data) {
      this.$store.commit(RESET_OUTCOME, data)
    }
  }
}
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

.rounded-corners {
  border-radius: 5px;
}

@media screen and (min-width: 1024px) {
  .header-size {
    min-width: 175px;
    max-width: 175px;
    min-height: 50px;
    max-height: 550px;
  } 

  .standard-size {
    min-width: 175px;
    max-width: 175px;
    min-height: 225px;
    max-height: 550px;
  }

  .icon {
    width: 30px;
    height: auto;
  }

  .small-icon {
    width: 25px;
    height: auto;
  }

  .medium-icon {
    width: 60px;
    height: auto;
  }

  .big-icon {
    width: 70px;
    height: auto;
  }

  .super {
    width: 11px;
    height: 11px;
  }

}

@media screen and (max-width: 1023px) {
  .header-size {
    min-width: 60px;
    max-width: 60px;
    min-height: 50px;
    max-height: 550px;
  } 

  .is-mobile-font-size {
    font-size: 9px;
  }

  .standard-size {
    min-width: 60px;
    max-width: 60px;
    min-height: 155px;
    max-height: 550px;
  }

  .icon {
    width: 20px;

  }

  .small-icon {
    width: 13px;
  }

  .medium-icon {
    width: 32px;
  }

  .big-icon {
    width: 42px;
  }

  .super {
    width: 8px;
    height: 8px;
  }

}

.fill {
  height: 100%;
  width: 100%;
  background-color: #e3e5e8;
}

.fill-width-only {
  width: 100%;
}

.lose {
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 100 100'><path d='M100 0 L0 100 ' stroke='black' stroke-width='4'/><path d='M0 0 L100 100 ' stroke='black' stroke-width='4'/></svg>");
  background-repeat:no-repeat;
  background-position:center center;
  background-color: #756d6d;
  z-index: -100;
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
  background-color: #bec2c6;
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
  top: -1px;
  /* Moves to to the right corner of image */
  right: -1px;
  z-index: inherit;
}

.wrap .top-right-hidden {
  position: absolute;
  top: -1px;
  /* Moves to to the right corner of image */
  right: 2px;
  z-index: inherit;
  opacity: 0;
}

.wrap:hover .top-right-hidden {
  opacity: 1;
}
</style>