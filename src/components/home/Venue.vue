<template>
  <v-container class="pa-4 my-0">
    <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3940.365061312919!2d38.74895125018511!3d9.030423893488054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x0%3A0xc367647315386be6!2sEliana%20Hotel!3m2!1d9.030423899999999!2d38.7511453!4m5!1s0x164b85f135951c63%3A0x6691dec4208989ec!2sSengatera%2C%20Addis%20Ababa!3m2!1d9.0307057!2d38.7511465!5e0!3m2!1sen!2set!4v1573654617489!5m2!1sen!2set" width="800" height="550" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
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
