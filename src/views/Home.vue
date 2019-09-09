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
      class="mb-5 hidden-md-and-down"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
    <v-toolbar app height="60px" fixed dark>
      <v-toolbar-title class="ml-0 pl-1 mr-1">
        <v-layout column>
          <a href="#" style="text-decoration:none;cursor:pointer;">
            <span class="google-font" style="color:#f8f8f8">DevFest Addis 2019</span>
          </a>

          <span class="body-1 grey--text">
            <v-icon small>mdi-calendar</v-icon>
            <a
              class="grey--text ml-1"
              href="http://tiny.cc/DevFestAddisNotify"
              style="text-decoration:underline;cursor:pointer;"
              target="_blank"
            >Oct 26th, 2019</a>

            <v-divider vertical color="white"></v-divider>
            <a
              href="http://tiny.cc/EventVenue"
              style="text-decoration:none;cursor:pointer;"
              target="_blank"
            >
              <span class="light-blue--text">&nbsp; &nbsp; @ Eliana Hotel</span>
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

      <!-- ToolBar GDGAddis -->
      <v-btn
        flat
        href="https://www.gdgaddis.dev"
        target="_blank"
        class="ml-0 google-font hidden-sm-and-down"
      >GDGAddis</v-btn>
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
    <v-container fluid class style="background-color:#444" id="agenda">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class>
          <Agenda />
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Parallex -->
    <!-- <v-parallax :src="require('@/assets/img/devfest/devfest_banner.png')"></v-parallax> -->

    <v-parallax dark :src="require('@/assets/img/devfest/banner2.jpeg')">
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-1" style="color:white;">DevFest Addis 2019</h1>
        <span
          class="ml-3"
          style="color:white;font-size:20px;"
        >The most anticipated developers festival! Join us and bring the spirit of #DevFest to Ethiopia.</span>
        <v-btn
          href="https://www.meetup.com/GDG-Addis/events/262076561"
          class="mt-4"
          style="color:white;"
          target="_blank"
          outline
        >Reserve Now!</v-btn>
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
    <v-container fluid id="venue">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10>
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

export default {
  components: {
    Banner,
    Timer,
    AboutDevFest,
    Agenda,
    Speakers,
    Faq,
    Partners,
    Venue
  },
  data() {
    return {
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

