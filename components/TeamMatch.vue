<template>
  <div v-if="show" class="section background modifiers">
    <div class="table-container">
      <div class="table-cells-container" v-for="(n, p_key) in (count/2)" :key="p_key">
        <div style="background-color: #cfd2d2" class="player-cell has-text-centered border-black header-size">{{team_red_participants[p_key]}} {{p_key}}</div>
        <div class="points-cell border-black standard-size" v-for="(m, t_key) in 2" :key="t_key">
          <div else class="points-cell standard-size has-text-centered border-black">
            <div class="score-menu">
              <div class="has-text-black">({{n}}, {{m}})</div>
              <div>
                <div class="wrap" v-for="(ippon, index) in team_match_card[t_key][p_key].points" :key="index" v-on:click="removeIppon({player: p_key, team: t_key, index: index})">
                  <img class="hidden-small super-small" src="~/static/delete.svg">
                  <img class="icon-ippon" :src="ippon + '.svg'">
                </div>
              </div>
              <!-- <div>
                <div class="wrap penalty-item" v-for="(penalty, key) in round_robin_card[n][m].penalty" :key="key" v-on:click="removePenalty({x: n, y: m, index: key})">
                  <img class="top-right-hidden-penalty super" src="~/static/delete.svg">
                  <img class="":src="penalty + '.svg'">
                </div>
              </div>
              <div>
                <div class="wrap outcome-item" v-on:click="resetOutcome({x: n, y: m})">
                  <img class="top-right-hidden super" src="~/static/delete.svg">
                  <img class="" v-if="round_robin_card[n][m].outcome == 'win'" :src="round_robin_card[n][m].outcome + '.svg'">
                  <img class="" v-if="round_robin_card[n][m].outcome == 'tie'" :src="round_robin_card[n][m].outcome + '.svg'">
                </div>
              </div> -->
            </div>
            <div class="points-menu">
              <div class="wrap" v-on:click="addIppon({player: p_key, team: t_key, ippon: MEN})">
                <img class="top-right-hidden-small-x super-small" src="~/static/add.svg">
                <img class="icon-small" src="~/static/men.svg">
              </div>
              <div class="wrap">
                <img class="top-right-hidden-small-x super-small" src="~/static/add.svg">
                <img class="icon-small" src="~/static/kote.svg">
              </div>
              <div class="wrap">
                <img class="top-right-hidden-small-x super-small" src="~/static/add.svg">
                <img class="icon-small" src="~/static/dou.svg">
              </div>
              <div class="wrap">
                <img class="top-right-hidden-small-x super-small" src="~/static/add.svg">
                <img class="icon-small" src="~/static/tsuki.svg">
              </div>
              <div class="wrap">
                <img class="top-right-hidden-small-x super-small" src="~/static/add.svg">
                <img class="icon-small" src="~/static/penalty.svg">
              </div>
            </div>
            <div class="points-menu">
              <div class="wrap">
                <img class="icon-small" src="~/static/win.svg">
              </div>
              <div class="wrap">
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
        <div style="background-color: #cfd2d2" class="player-cell has-text-centered border-black header-size">{{team_white_participants[p_key]}} {{p_key}}</div>
      </div>
    </div>

  </div>
</template>

<script>
import { MEN, KOTE, DOU, TSUKI, WIN, LOSE, TIE, PENALTY, RED, WHITE } from '../store/shiai_constants'
import { ADD_IPPON, REMOVE_IPPON } from '../store/team_match'

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
      PENALTY,
      RED,
      WHITE
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
      this.$store.commit(`team_match/${ADD_IPPON}`, data)
    },
    removeIppon (data) {
      this.$store.commit(`team_match/${REMOVE_IPPON}`, data)
    }
  }
}
</script>

<style lang="scss" scoped>

/* Scoped Globals */
// $screen-min-width: 1024px;
$screen-min-width: 1px;
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

  .hidden-small {
    position: absolute;
    /* Moves to to the right corner of image */
    z-index: inherit;
    opacity: 0;
  }
  .top-right-hidden-small-x {
    @extend .hidden-small;
    /* Moves to to the right corner of image */
    left: 13px;
    top: 0px;
  }
  &:hover .hidden-small {
    opacity: 1;
  }
  &:hover .top-right-hidden-small-x {
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

  .icon-ippon {
    width: 30px;
    height: 30px;
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