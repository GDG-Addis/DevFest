<template>
  <v-container class="pa-0 my-0">
    <v-layout wrap align-start justify-start row fill-height class="my-0">
      <!-- Session Detail Dialog -->
      <v-dialog
        v-model="dialog"
        scrollable
        persistent
        :overlay="false"
        max-width="500px"
        transition="dialog-transition"
      >
        <template v-if="currentSession">
          <v-card>
            <v-card-title primary-title>
              <v-layout column>
                <span class="mx-2 mb-2"
                  ><v-icon class="mr-2">mdi-clock-outline</v-icon>
                  {{ currentSession.time }}
                  <span class="ml-5 cyan--text">{{ currentSession.type }}</span>
                </span>
                <span class="mx-2 font-weight-bold">{{
                  currentSession.topic
                }}</span>
                <span v-if="!currentSession.isBreak" class="mx-2"
                  >By: {{ currentSession.speaker }}</span
                >
                <v-icon v-else x-large>{{ currentSession.icon }}</v-icon>
                <v-layout row wrap >
                  <template v-for="(img, j) in currentSession.photos">
                  <v-avatar class="mt-2 mx-2" :key="j">
                    <v-img
                      :src="require(`@/assets/img/${img}`)"
                      contain
                    ></v-img>
                  </v-avatar>
                </template>
                </v-layout>
                
              </v-layout>
              <v-spacer></v-spacer>
              <v-btn flat icon @click="closeDialog">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-text>
              <p class="my-2" v-for="(par,i) in currentSession.description" :key="i">{{par}}</p>
            </v-card-text>
          </v-card>
        </template>
      </v-dialog>

      <!-- End of Session Detail Dialog -->

      <v-flex xs12 class="pa-2 my-0">
        <template v-if="agenda">
          <v-card class="mx-auto elevation-4">
            <v-card light flat color="#F8F9FF">
              <v-container fill-height>
                <v-layout align-center>
                  <!-- <strong class="display-4 font-weight-regular mr-4">26</strong> -->
                  <v-layout column justify-end>
                    <strong
                      class="text-uppercase google-font title font-weight-bold"
                      >{{ agenda.name }}</strong
                    >
                    <div class="font-weight-light">{{ agenda.venue }}</div>
                  </v-layout>
                </v-layout>
              </v-container>
            </v-card>
            <v-card-text class="py-0">
              <v-timeline align-top dense>
                <v-timeline-item
                  v-for="(program, key) in agenda.programs"
                  :key="key"
                  :color="key % 2 == 0 ? 'pink' : 'teal lighten-3'"
                  medium
                  fill-dot
                  :class="program.isBreak ? `yellow lighten-5` : ''"
                >
                  <template v-slot:icon>
                    <v-avatar>
                      <v-icon color="white">{{ program.icon }}</v-icon>
                    </v-avatar>
                  </template>
                  <v-layout row wrap pt-3 justify-start>
                    <!-- Time -->
                    <v-flex xs12 md3 class="mr-4">
                      <strong>{{ program.time }}</strong>
                      <div class="caption">{{ program.type }}</div>
                    </v-flex>
                    <!-- Topic -->
                    <v-flex xs12 md6>
                      <strong>{{ program.topic }}</strong>
                      <div v-if="!program.isBreak" class="caption mb-2">
                        By: {{ program.speaker }}
                      </div>
                    </v-flex>
                    <v-spacer></v-spacer>
                    <!-- Actions -->
                    <v-flex xs12 md2>
                      <v-btn @click="showDetail(program)" flat icon>
                        <v-icon>mdi-information-outline</v-icon>
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </template>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  props: {
    agenda: {
      type: Object,
      required: true,
      default: null
    }
  },
  data() {
    return {
      dialog: false,
      key: 0,
      currentSession: null
    };
  },
  created() {},
  methods: {
    showDetail(session) {
      this.key += 1;
      this.dialog = true;
      this.currentSession = session;
    },
    closeDialog() {
      this.dialog = false;
      this.currentSession = null;
    }
  }
};
</script>
