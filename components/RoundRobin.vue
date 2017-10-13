<template>
  <div class="container is-fluid background separation">
    <div class="columns is-mobile" v-for="(participant, n) in $store.state.participants" :key="n">
      <div class="column dotted" v-for="(participant, m) in $store.state.participants" :key="m" >
        <div v-if="n <= 0">
          {{participant}}
        </div>
        <div v-else-if="m <= 0">
          {{$store.state.participants[n]}}
        </div>
        <div class="bd-notification is-info" v-else-if="m == n">
          <p class="notification is-black">
            <!-- [{{n-1}}, {{m-1}}] -->
            {{$store.state.score_card[n-1][m-1]}}
          </p>
        </div>
        <div v-else>
          <!-- [{{n-1}}, {{m-1}}] -->
          {{$store.state.score_card[n-1][m-1]}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {MEN, KOTE, DOU, TSUKI, RED, WHITE, ENCHO, TIE} from '../store/shiai_constants'

export default {
  // data: () => ({
  //   count: 8,
  //   length: 8
  // })
}

function CreateRandomIppon2DArray (rows) {
  console.log(WHITE)
  console.log(RED)
  // let arr = []
  let score = {ENCHO: false, TIE: false, RED: [], WHITE: []}
  // let onePointMatch = Math.floor(Math.random() * 1) + 1
  if (onePointMatch()) {
    console.log('One Point Match')
    if (encho()) { score[ENCHO] = true } else { score[ENCHO] = false }
    switch (redOrWhiteWon()) {
      case true:
        score.RED.push(ippon())
        break
      case false:
        score.WHITE.push(ippon())
        break
    }
  }

  // if (twoPointMatch()) {
  //   console.log('Two Point Match')
  //   if (encho()) { score[ENCHO] = true } else { score[ENCHO] = false }
  //   switch (redOrWhiteWon()) {
  //     case true:
  //       score[RED] = ippon()
  //       score[RED] = ippon()
  //       score[WHITE] = ippon()
  //       break
  //     case false:
  //       score[WHITE] = ippon()
  //       score[WHITE] = ippon()
  //       score[RED] = ippon()
  //       break
  //   }
  // }

  if (tieMatch()) {
    console.log('Tie Match')
    score[TIE] = false
  }

  console.log(score)
  // for (let i = 0; i < rows; i++) {
  //   one_point_match Math.floor(Math.random() * 1) + 1
  // }
  // 20% chance for tie match
  function tieMatch () {
    return Math.random() <= 0.15
  }

  // 30% chance for onePointMatch
  function onePointMatch () {
    return Math.random() <= 0.9
  }

  // 20% chance for Over Time
  function encho () {
    return Math.random() <= 0.2
  }

  // 60% chance for twoPointMatch
  // function twoPointMatch () {
  //   return Math.random() <= 0.6
  // }

  // 50% chance to win between red or white.
  function redOrWhiteWon () {
    return Math.random() <= 0.5
  }
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

CreateRandomIppon2DArray(8)
</script>

<style scoped>
.background {
  background-color: lavenderblush;
}

.dotted {
  border-style: dotted;
}

.background-black {
  background-color: black;
  height: 100%;
  width: 100%;
}
</style>