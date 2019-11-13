<template>
  <v-container>
    <v-layout column justify-center align-center>
      <span class="grey darken-3 display-1 mb-4 pa-3 white--text" color="black">@ Grand Eliana Hotel</span>
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15761.460244966975!2d38.7511453!3d9.0304239!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc367647315386be6!2sEliana%20Hotel!5e0!3m2!1sen!2set!4v1573665186185!5m2!1sen!2set" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    </v-layout>
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
