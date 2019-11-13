<template>
  <v-container class="pa-0 my-0">
    <v-layout wrap align-start justify-start row fill-height class="my-0">
      <v-flex xs12 class="pa-2 my-0">
        <div>
          <v-toolbar tabs color="grey lighten-5" light flat>
            <toolbar-title>
              <v-layout column>
                <span class="title">Agenda</span>
              </v-layout>
            </toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat icon>
              <v-icon>mdi-download</v-icon>
            </v-btn>
            <v-btn flat icon>
              <v-icon>mdi-help</v-icon>
            </v-btn>
          </v-toolbar>
          <AgendaCard :agenda="agendaData.common" />
          <v-tabs
            centered
            v-model="tabsValue"
            slider-color="blue"
            color="grey lighten-5"
            flat
            light
          >
            <v-tab>Track 1</v-tab>

            <v-tab>Track 2</v-tab>

            <v-tab>Track 3</v-tab>
          </v-tabs>
          <v-tabs-items v-model="tabsValue">
            <v-tab-item>
              <AgendaCard :agenda="agendaData.track1" />
            </v-tab-item>
            <v-tab-item>
              <AgendaCard :agenda="agendaData.track2" />
            </v-tab-item>
            <v-tab-item>
              <AgendaCard :agenda="agendaData.track3" />
            </v-tab-item>
          </v-tabs-items>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import topicData from "@/assets/data/devfest/agenda.json";
import AgendaCard from "./AgendaCard";
export default {
  components: {
    AgendaCard
  },
  data() {
    return {
      tabsValue: 0,
      agendaData: topicData
    };
  }
};
</script>
