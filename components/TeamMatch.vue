<template>
  <div v-if="show" class="section background modifiers">
    <div class="table-container">

      <div class="table-cells-container" v-for="(n, key) in (count/2)" :key="key">
        <div class="player-cell dotted header-size">{{team_red_participants[key]}} {{key}}</div>
        <div class="points-cell dotted standard-size" v-for="(n, k) in 2" :key="k">
          <div else class="points-cell standard-size has-text-centered border-black">
            <div class="score-menu">
            </div>
            <div class="points-menu dotted">
              <div class="wrap menu-item">
                <img class="top-right super" src="~/static/add.svg">
                <img class="icon" src="~/static/men.svg">
              </div>
              <div class="wrap menu-item">
                <img class="top-right super" src="~/static/add.svg">
                <img class="icon" src="~/static/kote.svg">
              </div>
              <div class="wrap menu-item">
                <img class="top-right super" src="~/static/add.svg">
                <img class="icon" src="~/static/dou.svg">
              </div>
              <div class="wrap menu-item">
                <img class="top-right super" src="~/static/add.svg">
                <img class="icon" src="~/static/tsuki.svg">
              </div>
              <div class="wrap menu-item">
                <img class="top-right super" src="~/static/add.svg">
                <img class="icon" src="~/static/penalty.svg">
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
              <div class="wrap menu-item">
                <img class="icon" src="~/static/clear.svg">
              </div>
            </div>
          </div>
        </div>
        <div class="player-cell dotted header-size">{{team_white_participants[key]}}</div>
      </div>
    </div>

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
  computed: {
    team_match_card () { return this.$store.state.team_match.team_match_card },
    team_red_participants () { return this.$store.state.team_match.team_red_participants },
    team_white_participants () { return this.$store.state.team_match.team_white_participants },
    count () { return this.$store.state.team_match.count },
    show () { return this.$store.state.team_match.show }
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

<style lang="scss" scoped>

$screen-min-width: 1024px;
$points-back-color: 'grey';
$player-score-back-color: #121f1f;

.danger {
  color: red;
  font-size: 50px;
}

.dotted {
  border-style: dotted;
}

.background {
  background-color: #161616;;
}

.background-black-fill {
  background-color: black;
  width: 100%;
  height: 100%;
}

.table-container {
  display: flex;
  flex-direction: row;
}

.table-cells-container {
  display: flex;
  flex-direction: column
}

.player-cell {
  display: flex;
  background-color: grey;
}

.points-cell {
  display: flex;
  flex-direction: column;
  background-color: #e3e5e8;
  margin: 0;
  padding: 0;
}

.border-black {
  border: 1px solid black;
}

.empty-cell {
  display: flex;
  background-color: black;
}

.points-menu {
  width: inherit;
  height: 100px;
  background-color: blue;
}

.points-cell:hover {
  background-color: grey;
}

.points-cell:hover .points-menu {
  opacity: 1;
}

.points-cell:hover .menu-left {
  opacity: 1;
}

.wrap {
  position: relative;
  cursor: pointer;
  margin: 0px;
  padding: 0px;
}

.wrap .top-right {
  position: absolute;
  /* Moves to to the right corner of image */
  left: 70%;
  top: 3%;
  z-index: inherit;
}

.wrap .top-right-hidden {
  position: absolute;
  /* Moves to to the right corner of image */
  left: 70%;
  top: 3%;
  z-index: inherit;
  opacity: 0;
}

.wrap:hover .top-right-hidden {
  opacity: 1;
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

  .score-menu {
    height: 150px;
  }

  .menu-item {
    display: inline-block;
    /* border-style: solid; */
    border: 1px red solid;
  }

  .icon {
    width: 20px;
    height: 20px;
  }

  .super {
    width: 7px;
    height: 7px;
  }

}
</style>