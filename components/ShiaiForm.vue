<template>
  <div class="background separation modifiers">
    <!-- <div class="field form-margins">
            <label class="label has-text-white">Tournament Name</label>
            <div class="control">
              <input class="input" type="text" v-model="tournament_name" placeholder="Name of the tournament">
            </div>
          </div> -->
    <div class="field form-margins">
      <label class="label has-text-white">Type</label>
      <div class="control">
        <div class="select">
          <select v-model="type">
            <option :value="TEAMMATCH" selected>Team Match</option>
            <option :value="ROUNDROBIN">Round Robin</option>
          </select>
        </div>
      </div>
    </div>
    <div v-if="type === ROUNDROBIN">
      <div class="field form-margins">
        <label class="label has-text-white">Participants</label>
        <ul class="has-text-white">
          <li>One per line</li>
        </ul>
        <div class="control">
          <textarea v-model="participants_string" rows="10" class="textarea" placeholder="Partcipants"></textarea>
        </div>
      </div>
      <div class="field form-margins">
        <div class="control padding-bottom">
          <button class="button" v-on:click="submit({tournament_name: tournament_name, type: type, participants: splitParticipantsByNewLineRoundRobin})">Submit {{type}}</button>
        </div>
      </div>
    </div>
    <div v-if="type === TEAMMATCH">
      <div class="field form-margins">
        <label class="label has-text-danger">Team Red Participants ({{this.team_red_participants.length}})</label>
        <ul class="has-text-white">
          <li>One per line</li>
          <li>Have same number of players as Team White</li>

        </ul>
        <div class="control">
          <textarea v-model="team_red_participants_string" rows="5" class="textarea" placeholder="Partcipants"></textarea>
        </div>
      </div>
      <div class="field form-margins">
        <label class="label has-text-white">Team White Participants ({{this.team_white_participants.length}})</label>
        <ul class="has-text-white">
          <li>One per line</li>
          <li>Have same number of players as Team Red</li>
        </ul>
        <div class="control">
          <textarea v-model="team_white_participants_string" rows="5" class="textarea" placeholder="Partcipants"></textarea>
        </div>
      </div>
      <div class="field form-margins">
        <div class="has-text-danger" v-if="playerCountIsEven">
          <span v-if="team_white_participants.length > team_red_participants.length">Team White has {{team_white_participants.length - team_red_participants.length}} more players.</span>
          <span v-if="team_red_participants.length > team_white_participants.length">Team Red has {{team_red_participants.length - team_white_participants.length}} more players.</span>
        </div>
      </div>
      <div class="field form-margins">
        <div class="control padding-bottom">
          <button class="button" v-on:click="submit({tournament_name: tournament_name, type: type, team_white_participants: team_white_participants, team_red_participants: team_red_participants})">Submit {{type}}</button>
        </div>
      </div>
    </div>
    <p class="has-text-white is-hidden">
      {{type}} {{splitTeamWhiteByNewLine}} {{splitTeamRedByNewLine}}
    </p>
  </div>
</template>
<script>
import { SUBMIT_SHIAI, SHOW, HIDE } from '../store/round_robin'
import { ROUNDROBIN, TEAMMATCH } from '../store/shiai_constants'
import * as _ from 'underscore'

export default {
  data: () => {
    return {
      // For all match types
      tournament_name: '',
      // Round Robin Variables
      type: TEAMMATCH,
      participants_string: 'Takumi\nMing\nKirk\nJames\nKevin',
      participants: '',
      // Team Match variables
      team_white_participants_string: 'Takumi\nMing\nKirk\nJames\nKevin',
      team_white_participants: '',
      team_red_participants_string: 'Minako\nChris\nNick\nWilson\nPatrick',
      team_red_participants: '',
      // Constants
      ROUNDROBIN,
      TEAMMATCH
    }
  },
  methods: {
    submit (data) {
      let count = this.team_red_participants.length + this.team_white_participants.length
      console.log(count)
      if (data.type === ROUNDROBIN) {
        this.$store.commit(`round_robin/${SUBMIT_SHIAI}`, data)
        this.$store.commit(`round_robin/${SHOW}`)
        this.$store.commit(`team_match/${HIDE}`)
      }
      if (data.type === TEAMMATCH && (count % 2 === 0)) {
        this.$store.commit(`team_match/${SUBMIT_SHIAI}`, data)
        this.$store.commit(`team_match/${SHOW}`)
        this.$store.commit(`round_robin/${HIDE}`)
      }
    }
  },
  computed: {
    splitParticipantsByNewLineRoundRobin () {
      this.participants = _.compact(this.participants_string.split('\n'))
      this.participants.splice(0, 0, 'Round Robin')
      return (this.participants) ? this.participants : ''
    },
    splitTeamWhiteByNewLine () {
      this.team_white_participants = _.compact(this.team_white_participants_string.split('\n'))
      return (this.team_white_participants) ? this.team_white_participants : ''
    },
    splitTeamRedByNewLine () {
      this.team_red_participants = _.compact(this.team_red_participants_string.split('\n'))
      return (this.team_red_participants) ? this.team_red_participants : ''
    },
    playerCountIsEven () {
      return (this.team_red_participants.length + this.team_white_participants.length) % 2
    }
  }
}
</script>

</script>
<style scoped>
ul {
  list-style-position: inside;
  margin-left: 10px;
  list-style-type: circle;
  margin-bottom: 10px;
}

.separation {
  margin-bottom: 40px;
}

.modifiers {
  max-width: 400px;
}

.background {
  background-color: #373a3d;
}

.form-margins {
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
}

.padding-bottom {
  padding-bottom: 5px;
}
</style>
