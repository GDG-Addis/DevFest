<template>
  <div>
    <v-btn
      fab
      medium
      color="secondary"
      bottom
      right
      absolute
      fixed
      @click.native.stop="$vuetify.goTo('*', options)"
      style="margin-bottom:100px"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
    <v-toolbar app height="60px" fixed dark>
      <v-toolbar-title class="ml-0 pl-1 mr-1">
        <v-layout column>
          <span class="google-font" style="color:#f8f8f8">
            <a
              href="#"
              class="google-font ml-2"
              style="text-decoration:none;cursor:pointer;color:#f8f8f8"
            >{{HomeData.devFestTitle}}</a>
          </span>

          <span class="body-1 grey--text ml-1">
            <v-icon small>mdi-calendar</v-icon>
            <a
              class="grey--text ml-1"
              href="http://tiny.cc/DevFestNotify"
              style="text-decoration:underline;cursor:pointer;"
              target="_blank"
            >{{HomeData.calender}}</a>

            <v-divider vertical color="white"></v-divider>
            <a
              href="http://tiny.cc/DevFestVenue"
              style="text-decoration:none;cursor:pointer;"
              target="_blank"
            >
              <span class="light-blue--text">&nbsp; &nbsp;{{HomeData.venue}}</span>
            </a>
          </span>
        </v-layout>
      </v-toolbar-title>
      <v-spacer />

      <!-- ToolBar Buttons -->
      <v-btn
        v-for="(link, i) in links"
        :key="i"
        class="ml-0 google-font hidden-sm-and-down"
        style="text-transform: capitalize;"
        flat
        @click="$vuetify.goTo(link.to, options)"
      >{{ link.text }}</v-btn>
    </v-toolbar>

    <!-- Banner -->
    <v-container fluid class="pa-0" id="top">
      <v-layout row wrap justify-start fill-height>
        <Banner />
      </v-layout>
    </v-container>

    <!-- Timer -->
    <v-container fluid class="pa-0" style="background-color:#F0F0F0">
      <v-layout row wrap justify-start fill-height>
        <Timer />
      </v-layout>
    </v-container>

    <!-- About DevFest -->
    <v-container fluid class="pt-2 pb-4 mt-2" id="aboutDevFest">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class>
          <AboutDevFest />
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Agenda -->
    <v-container fluid class="agenda-back" id="agenda">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class>
          <Agenda />
        </v-flex>
      </v-layout>
    </v-container>

    <v-parallax dark :src="require('@/assets/img/devfest/banner2.jpg')">
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-1" style="color:white;">{{HomeData.devFestTitle}}</h1>
        <span style="color:white;font-size:20px;">{{HomeData.devFestDesc}}</span>
        <v-btn
          href="http://tiny.cc/TicketsDevFest"
          class="mt-4"
          style="color:white;"
          target="_blank"
          outline
        >{{HomeData.actionBtn}}</v-btn>
      </v-layout>
    </v-parallax>

    <!-- Speakers -->
    <v-container fluid class id="speakers">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class>
          <Speakers />
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Venue -->
    <v-container fluid id="venue" class="venue-back">
      <v-layout wrap align-center justify-end row fill-height>
        <v-flex xs12>
          <Venue />
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Partners -->
    <v-container fluid id="partners">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10>
          <Partners />
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Last Year Memories -->
    <v-container fluid id="devFest2018">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10>
          <LastYearMemory />
        </v-flex>
      </v-layout>
    </v-container>

    <!-- FAQ -->
    <v-container fluid style="background-color:#F0F0F0" id="faq">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class>
          <Faq />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Banner from "@/components/home/Banner";
import Timer from "@/components/home/Timer";
import AboutDevFest from "@/components/home/AboutDevFest";
import Agenda from "@/components/home/Agenda";
import Speakers from "@/components/home/Speakers";
import Faq from "@/components/home/Faq";
import Partners from "@/components/home/Partners";
import Venue from "@/components/home/Venue";
import LastYearMemory from "@/components/home/LastYearMemory";
import HomeData from "@/assets/data/devfest/home.json";

export default {
  components: {
    Banner,
    Timer,
    AboutDevFest,
    Agenda,
    Speakers,
    Faq,
    Partners,
    Venue,
    LastYearMemory
  },
  data() {
    return {
      HomeData: HomeData,
      links: [
        {
          text: "About DevFest",
          to: "#aboutDevFest",
          icon: "mdi-information-outline"
        },
        { text: "Agenda", to: "#agenda", icon: "mdi-view-agenda" },
        { text: "Speakers", to: "#speakers", icon: "mdi-microphone-outline" },
        { text: "Venue", to: "#venue", icon: "mdi-map-marker-radius" },
        {
          text: "Partners",
          to: "#partners",
          icon: "mdi-account-group-outline"
        },
        {
          text: "DevFest 2018",
          to: "#devFest2018",
          icon: "mdi-frequently-asked-questions"
        },
        { text: "FAQ", to: "#faq", icon: "mdi-frequently-asked-questions" }
      ],
      options: {
        duration: 750,
        offset: -10,
        easing: "easeInOutCubic"
      }
    };
  }
};
</script>

<style scoped>
.agenda-back {
  background-image: url(http://tiny.cc/bgImageDevFest);
  background-size: cover;
}
.venue-back {
  background-image: url(https://firebasestorage.googleapis.com/v0/b/gdg-addis-platform.appspot.com/o/devfest19%2Feliana_banner.jpg?alt=media&token=e9802b8f-b469-40cb-9af2-c046372a6c5b);
  background-size: cover;
}
#inspire {
  background: none;
}
.layer {
  background-color: rgba(0, 0, 0, 0.075);
}
</style>

