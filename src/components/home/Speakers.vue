<template>
  <v-container class="pa-0 my-0" grid-list-lg>
    <v-layout column>
      <span class="google-font mt-2 mb-0" style="font-size:170%;color:#37474F;">DevFest Speakers</span>
    </v-layout>

    <v-dialog
      v-model="dialog"
      scrollable
      persistent
      :overlay="false"
      max-width="500px"
      transition="dialog-transition"
    >
      <template v-if="currentSpeaker">
        <v-card>
          <v-card-title primary-title>
            <v-avatar size="40">
              <img :src="require(`@/assets/img/${currentSpeaker.photo}`)" />
            </v-avatar>
            <v-layout column>
              <span class="mx-2">{{currentSpeaker.name}}</span>
              <span class="mx-2 caption">{{currentSpeaker.job}}</span>
              <span class="mx-2 caption">{{currentSpeaker.company}}</span>
            </v-layout>
            <v-spacer></v-spacer>
            <v-btn flat icon @click="closeDialog">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <p class="my-2" v-for="(bio,i) in currentSpeaker.bio" :key="i">{{bio}}</p>
          </v-card-text>
        </v-card>
      </template>
    </v-dialog>

    <v-layout wrap align-start justify-start row fill-height class="my-0">
      <v-flex v-for="(s, i) in speakers" :key="i" xs6 sm4 md3 lg3 xl3>
        <v-card>
          <v-card-media :src="require(`@/assets/img/${s.photo}`)" height="250px" width="100%"></v-card-media>
          <v-card-title>
            <div>
              <span class="title black--text">{{s.name}}</span>
              <br />
              <span class="caption">{{s.job}}</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-layout row wrap justify-start class="pa-2">
              <v-btn small flat icon :href="s.website" target="_blank">
                <v-icon style="color:#616161">mdi-web</v-icon>
              </v-btn>
              <v-btn small flat icon :href="s.twitter" target="_blank">
                <v-icon style="color:#1da1f2">mdi-twitter</v-icon>
              </v-btn>

              <v-btn small flat icon :href="s.facebook" target="_blank">
                <v-icon style="color:#3b5998">mdi-facebook</v-icon>
              </v-btn>

              <v-btn small flat icon :href="s.linkdin" target="_blank">
                <v-icon style="color:#007bb6">mdi-linkedin</v-icon>
              </v-btn>
              <v-btn small flat icon :href="`mailto:${s.email}`" target="_blank">
                <v-icon style="color:#339946">mdi-email</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn @click="showBio(s)" small flat icon>
                <v-icon style="color:#000000">mdi-bio</v-icon>
              </v-btn>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import speakersData from "@/assets/data/devfest/speakers.json";
export default {
  data() {
    return {
      dialog: false,
      speakers: speakersData,
      currentSpeaker: null,
      key: 0
    };
  },
  methods: {
    showBio(speaker) {
      this.currentSpeaker = speaker;
      this.key += 1;
      this.dialog = true;
    },
    closeDialog() {
      this.currentSpeaker = null;
      this.dialog = false;
    }
  }
};
</script>