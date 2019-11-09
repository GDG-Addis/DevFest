<template>
  <v-container class="pa-0 my-0">
    <v-layout wrap align-start justify-start row fill-height class="my-0">
      <v-flex xs12 class="pa-2 my-0">
        <template v-if="agenda">
          <v-card class="mx-auto elevation-4">
            <v-card light flat color="#F8F9FF">
              <v-container fill-height>
                <v-layout align-center>
                  <!-- <strong class="display-4 font-weight-regular mr-4">26</strong> -->
                  <v-layout column justify-end>
                    <strong
                      class="text-uppercase google-font title font-weight-thin"
                    >{{agenda.name}}</strong>
                    <div class="font-weight-light">{{agenda.venue}}</div>
                  </v-layout>
                </v-layout>
              </v-container>
            </v-card>
            <v-card-text class="py-0">
              <v-timeline align-top dense>
                <v-timeline-item
                  v-for="(program,key) in agenda.programs"
                  :key="key"
                  :color="(key % 2 == 0) ?'pink':'teal lighten-3'"
                  small
                >
                  <v-layout row wrap pt-3 justify-start>
                    <!-- Time -->
                    <v-flex xs12 md3 class="mr-4">
                      <strong>{{program.time}}</strong>
                      <div class="caption">{{program.type}}</div>
                    </v-flex>
                    <!-- Topic -->
                    <v-flex xs12 md6>
                      <strong>{{program.topic}}</strong>
                      <div class="caption">{{program.description}}</div>
                      <!-- <div class="caption">By: {{program.speaker}}</div> -->
                      <template v-for="(img,j) in program.photos">
                        <v-avatar :key="j">
                          <v-img :src="img" contain></v-img>
                        </v-avatar>
                      </template>
                    </v-flex>
                    <v-spacer></v-spacer>
                    <!-- Actions -->
                    <v-flex xs12 md2>
                      <v-btn flat icon color="primary" disabled>
                        <v-icon>mdi-information-outline</v-icon>
                      </v-btn>

                      <v-btn flat icon color="primary" disabled>
                        <v-icon>mdi-unfold-more-vertical</v-icon>
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
    return {};
  },
  created() {}
};
</script>

