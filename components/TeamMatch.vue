<template>
  <div v-if="show" class="section background modifiers">
    <div class="table-container">
      <div class="table-cells-container" v-for="(n, key) in (count/2)" :key="key">
        <div style="background-color: #cfd2d2" class="player-cell has-text-centered border-black header-size">{{team_red_participants[key]}} {{key}}</div>
        <div class="points-cell border-black standard-size" v-for="(n, k) in 2" :key="k">
          <div else class="points-cell standard-size has-text-centered border-black">
            <div class="score-menu">
            </div>
            <div class="points-menu">
              <div class="wrap menu-item">
                <img class="top-right-hidden-small super-small" src="~/static/add.svg">
                <img class="icon-small" src="~/static/men.svg">
              </div>
              <div class="wrap menu-item">
                <img class="top-right-hidden-small super-small" src="~/static/add.svg">
                <img class="icon-small" src="~/static/kote.svg">
              </div>
              <div class="wrap menu-item">
                <img class="top-right-hidden-small super-small" src="~/static/add.svg">
                <img class="icon-small" src="~/static/dou.svg">
              </div>
              <div class="wrap menu-item">
                <img class="top-right-hidden-small super-small" src="~/static/add.svg">
                <img class="icon-small" src="~/static/tsuki.svg">
              </div>
              <div class="wrap menu-item">
                <img class="top-right-hidden-small super-small" src="~/static/add.svg">
                <img class="icon-small" src="~/static/penalty.svg">
              </div>
            </div>
            <div class="points-menu">
              <div class="wrap menu-item">
                <img class="icon-small" src="~/static/win.svg">
              </div>
              <div class="wrap menu-item">
                <img class="icon-small" src="~/static/lose.svg">
              </div>
              <div class="wrap menu-item">
                <img class="icon-small" src="~/static/tie.svg">
              </div>
              <div class="wrap menu-item">
                <img class="icon-small" src="~/static/clear.svg">
              </div>
            </div>
          </div>
        </div>
        <div style="background-color: #cfd2d2" class="player-cell has-text-centered border-black header-size">{{team_white_participants[key]}}</div>
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

/* Scoped Globals */
$screen-min-width: 1024px;
$points-back-color: 'grey';
$player-score-back-color: #121f1f;

$standard-width-desktop: 175px;
$standard-height-desktop: 225px;

.points-cell:hover {
  background-color: grey;
}

.wrap {
  position: relative;
  cursor: pointer;
  margin: 0px;
  padding: 0px;

  .top-right-hidden-small {
    position: absolute;
    /* Moves to to the right corner of image */
    left: 13px;
    top: 0px;
    z-index: inherit;
    opacity: 0;
  }
  &:hover .top-right-hidden-small {
    opacity: 1;
  }
}

@media screen and (min-width: $screen-min-width) {
  .header-size {
    min-width: $standard-width-desktop;
    max-width: $standard-width-desktop;
    min-height: 50px;
    max-height: 50px;
  } 

  .standard-size {
    min-width: $standard-width-desktop;
    max-width: $standard-width-desktop;
    min-height: $standard-height-desktop;
    max-height: $standard-height-desktop;
    margin: 0;
    padding: 0;
  }

  .score-menu {
    height: $standard-height-desktop * 3/4;
  }

  .points-menu {
    height: $standard-height-desktop * 1/4;
    background-color: $points-back-color;
    opacity: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .menu-item {
    border-style: 1px solid red;
  }

  .icon-small {
    width: 20px;
    height: 20px;
  }

  .super-small {
    width: 7px;
    height: 7px;
  }
}

/* Code frozen */
.dotted {
  border-style: dotted;
}

.border-black {
  border: 1px solid black;
}

.background {
  background-color: #161616;
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
  background-color: grey;
}

.points-cell {
  display: flex;
  flex-direction: column;
  background-color: #e3e5e8;
  margin: 0;
  padding: 0;

  &:hover .points-menu {
    opacity: .95;
  }
}
</style>