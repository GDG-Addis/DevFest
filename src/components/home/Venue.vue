<template>
  <v-container class="pa-4 my-0 ">
    <a
      href="http://tiny.cc/DevFestVenue"
      style="text-decoration:none;cursor:pointer;"
      target="_blank"
    >
      <v-layout
        wrap
        align-center
        justify-center
        row
        fill-height
        class="mt-2"
        style="height:100%;width:100%;background-color:#212121;border-radius:10px;cursor: pointer;"
      >
        <v-flex xs12 sm4 md2 lg2 class="pa-4"></v-flex>
        <v-flex xs12 sm8 md10 lg10 class="pa-2 py-4 px-3">
          <span class="google-font mt-1 display-1" style="font-size:240%;color:white;">
            Venue Navigation Is Being Prepared
            <v-icon style="font-size:120%;color:white;">mdi-ruler-square-compass</v-icon>
          </span>
          <p class="google-font mt-1 font-weight-thin" style="color:white;">
            Till then, take a tour in the website, and DON'T forget to
            <a
              href="https://www.meetup.com/GDG-Addis/events/262076561/"
              style="text-decoration:underline;color:white;"
              target="_blank"
            >book your ticket for #DevFest19</a>
          </p>
        </v-flex>
      </v-layout>
    </a>
  </v-container>
</template>

<script>
import ChapterDetails from "@/assets/data/chapterDetails.json";
export default {
  data() {
    return {
      ChapterDetails: ChapterDetails
    };
  },
  created() {}
};
</script>
