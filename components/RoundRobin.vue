<template>
  <div v-if="show" class="section background modifiers">
    <div class="points-cell-container" v-for="(participant, n) in participants" :key="n">
      <div v-for="(participant, m) in participants" :key="m">

        <div v-if="n <= 0" class="header-size fill dotted is-mobile-font-size">
          {{participant}}
        </div>

        <div v-else-if="m <= 0" class="standard-size has-text-centered has-text-weight-bold has-text-white is-mobile-font-size dotted">
          <div>{{participants[n]}} ({{n}})</div>
          <div>{{score_card[n].wins}}W-{{score_card[n].losses}}L-{{score_card[n].ties}}T / {{score_card[n].points}}P</div>
        </div>

        <div class="standard-size background-black-fill dotted" v-else-if="m == n"></div>
          
        <div v-else>
          <div class="points-cell standard-size dotted" :class="round_robin_card[n][m].outcome" v-on:click="showPointsMenu('(' + m + ',' + n + ')')" >
            <div class="score-menu">
              <div class="has-text-black">({{n}}, {{m}})</div>
              <div>
                <div class="wrap score-item" v-for="(ippon, key) in round_robin_card[n][m].points" :key="key" v-on:click="removeIppon({x: n, y: m, index: key})">
                  <img class="top-left-hidden super" src="~/static/delete.svg">
                  <img class="" :src="ippon + '.svg'">
                </div>
              </div>
              <div>
                <div class="wrap penalty-item" v-for="(penalty, key) in round_robin_card[n][m].penalty" :key="key" v-on:click="removePenalty({x: n, y: m, index: key})">
                  <img class="top-left-hidden super" src="~/static/delete.svg">
                  <img class="":src="penalty + '.svg'">
                </div>
              </div>
              <div>
                <div class="wrap outcome-item" v-on:click="resetOutcome({x: n, y: m})">
                  <img class="top-left-hidden super" src="~/static/delete.svg">
                  <img class="" v-if="round_robin_card[n][m].outcome == 'win'" :src="round_robin_card[n][m].outcome + '.svg'">
                  <img class="" v-if="round_robin_card[n][m].outcome == 'tie'" :src="round_robin_card[n][m].outcome + '.svg'">
                </div>
              </div>
            </div>
            <div class="points-menu standard-menu-size dotted" :ref="'(' + m + ',' + n + ')'">
              <div class="wrap menu-item" v-on:click="addIppon({x: n, y: m, ippon: MEN})">
                <img class="top-left-hidden super" src="~/static/add.svg">
                <img class="icon" src="~/static/men.svg">
              </div>
              <div class="wrap menu-item" v-on:click="addIppon({x: n, y: m, ippon: KOTE})">
                <img class="top-left-hidden super" src="~/static/add.svg">
                <img class="icon" src="~/static/kote.svg">
              </div>
              <div class="wrap menu-item" v-on:click="addIppon({x: n, y: m, ippon: DOU})">
                <img class="top-left-hidden super" src="~/static/add.svg">
                <img class="icon" src="~/static/dou.svg">
              </div>
              <div class="wrap menu-item" v-on:click="addIppon({x: n, y: m, ippon: TSUKI})">
                <img class="top-left-hidden super" src="~/static/add.svg">
                <img class="icon" src="~/static/tsuki.svg">
              </div>
              <div class="wrap menu-item" v-on:click="addPenalty({x: n, y: m, penalty: PENALTY})">
                <img class="top-left-hidden super" src="~/static/add.svg">
                <img class="icon" src="~/static/penalty.svg">
              </div>
              <div class="wrap menu-item" v-if="!round_robin_card[n][m].outcome" v-on:click="setWin({x: n, y: m, outcome: WIN})">
                <img class="top-left-hidden super" src="~/static/add.svg">
                <img class="icon" src="~/static/win.svg">
              </div>
              <div class="wrap menu-item" v-if="!round_robin_card[n][m].outcome" v-on:click="setLose({x: n, y: m, outcome: LOSE})">
                <img class="top-left-hidden super" src="~/static/add.svg">
                <img class="icon" src="~/static/lose.svg">
              </div>
              <div class="wrap menu-item" v-if="!round_robin_card[n][m].outcome" v-on:click="setTie({x: n, y: m, outcome: TIE})" >
                <img class="top-left-hidden super" src="~/static/add.svg">
                <img class="icon" src="~/static/tie.svg">
              </div>
              <div class="wrap menu-item" v-on:click="resetOutcome({x: n, y: m})" >
                <img class="icon" src="~/static/clear.svg">
              </div>
            </div>
          </div>
        </div><!-- else -->
      </div><!-- v-for :key="m" -->
    </div><!-- container -->
  </div>
</template>

<script>
import { MEN, KOTE, DOU, TSUKI, WIN, LOSE, TIE, PENALTY } from '../store/shiai_constants'
import { ADD_IPPON, REMOVE_IPPON, SET_WIN, SET_LOSE, SET_TIE, RESET_OUTCOME, ADD_PENALTY, REMOVE_PENALTY } from '../store/round_robin'

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
    round_robin_card () { return this.$store.state.round_robin.round_robin_card },
    participants () { return this.$store.state.round_robin.participants },
    score_card () { return this.$store.state.round_robin.score_card },
    show () { return this.$store.state.round_robin.show }
  },
  methods: {
    addIppon (data) {
      this.$store.commit(`round_robin/${ADD_IPPON}`, data)
    },
    removeIppon (data) {
      this.$store.commit(`round_robin/${REMOVE_IPPON}`, data)
    },
    addPenalty (data) {
      this.$store.commit(`round_robin/${ADD_PENALTY}`, data)
    },
    removePenalty (data) {
      this.$store.commit(`round_robin/${REMOVE_PENALTY}`, data)
    },
    setWin (data) {
      this.$store.commit(`round_robin/${SET_WIN}`, data)
    },
    setLose (data) {
      this.$store.commit(`round_robin/${SET_LOSE}`, data)
    },
    setTie (data) {
      this.$store.commit(`round_robin/${SET_TIE}`, data)
    },
    resetOutcome (data) {
      this.$store.commit(`round_robin/${RESET_OUTCOME}`, data)
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 1px) {
  .header-size {
    min-width: 175px;
    max-width: 175px;
    min-height: 50px;
    max-height: 50px;
  } 

  .standard-size {
    min-width: 175px;
    max-width: 175px;
    min-height: 225px;
    max-height: 225px;
    margin: 0;
    padding: 0;
  }

  .score-menu {
    height: 150px;
  }

  .points-menu {
    height: 75px;
    background-color:grey;
    opacity: 0;
  }

  .icon {
    width: auto;
    height: auto;
  }

  .score-icon {
    width: 25%;
    height: 25%;
  }

  .small-icon {
    width: 10%;
    height: 10%;
  }

  .super {
    width: 25%;
    height: 25%;
  }

  .score-item {
    display: inline-block;
    width: 20%;
  }

  .penalty-item {
    display: inline-block;
    width: 10%;
  }

  .outcome-item {
    display: inline-block;
    width: 20%;
  }

  .menu-item {
    display: inline-block;
    width: 20px;
  }

  .wrap .top-left-hidden {
    opacity: 0;
    position: absolute;
    /* Moves to to the right corner of image */
  }
}

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

.points-cell-container {
  display: flex;
  flex-direction: row;
}

.dotted {
  border-style: dotted;
}

.points-cell {
  display: flex;
  flex-direction: column;
  background-color: #e3e5e8;
  margin: 0;
  padding: 0;
}

.points-cell:hover {
  background-color: grey;
}

.points-cell:hover .points-menu {
  opacity: 1;
}

.score-item:hover, .penalty-item:hover, .outcome-item:hover, .menu-item:hover {
  opacity: 0.5;
}

.wrap {
  position: relative;
  cursor: pointer;
  margin: 0px;
  padding: 0px;
}

.wrap:hover .top-left-hidden {
  opacity: 1;
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
</style>