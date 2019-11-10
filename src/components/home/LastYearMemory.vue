<template>
  <v-container class="pa-0 pb-5">
    <v-layout wrap align-center justify-center row fill-height>
      <v-flex xs12 md12>
        <p
          class="google-font mt-2 mb-0"
          style="font-size:170%;color:#37474F;"
        >DevFest Addis 2018 Memories</p>
        <p
          class="google-font mt-1 mb-0"
          style="font-size:120%"
        >More than 600 attendee, 24 Speakers and 18 Sessions</p>
        <p class="google-font mt-0" style="font-size:120%">
          Checkout the
          <a
            style="color:#1565C0;text-decoration: none;"
            href="http://bit.ly/2Ud0HaM"
            target="_blank"
          >full photo album.</a>
          Here is also
          <a
            style="color:#1565C0;text-decoration: none;"
            href="https://www.youtube.com/watch?v=oOUC3yCeL8U"
            target="_blank"
          >Full show Video.</a>
        </p>

        <gallery :images="images" :index="index" @close="index = null"></gallery>
        <!-- <div
          class="image"
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          @click="index = imageIndex"
          :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
        ></div>-->
        <v-layout row wrap class="transparent">
          <v-flex xs12 class="elevation-0 transparent">
            <v-card class="elevation-0 pa-0 ma-0 transparent">
              <v-container grid-list-md fluid class="pa-0 ma-0">
                <v-layout row wrap justify-space-between class="ma-0 pa-0">
                  <v-flex v-for="(item,imageIndex) in images" :key="imageIndex" xs6 md4 sm4 d-flex>
                    <v-img
                      @click="index = imageIndex"
                      :src="item"
                      :lazy-src="item"
                      aspect-ratio="2.0"
                      class="white"
                      v-on="on"
                    >
                      <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-layout>
                    </v-img>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>

      <!-- <v-flex xs12 md12 class="mt-2">
        <v-layout row wrap class="transparent">
          <v-flex xs12 class="elevation-0 transparent">
            <v-card class="elevation-0 pa-0 ma-0 transparent">
              <v-container grid-list-md fluid class="pa-0 ma-0">
                <v-layout row wrap justify-space-between class="ma-0 pa-0">
                  <v-flex
                    v-for="(item,i) in images"
                    :key="i"
                    xs6
                    md4
                    sm4
                    d-flex
                  >
                    <v-img :src="item" :lazy-src="item" aspect-ratio="2.0" class="white" v-on="on">
                      <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-layout>
                    </v-img>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>-->
    </v-layout>
  </v-container>
</template>

<script>
import VueGallery from "vue-gallery";

export default {
  components: {
    gallery: VueGallery
  },
  data() {
    return {
      index: null,
      images: [
        this.getImgUrl("image1.jpg"),
        this.getImgUrl("image3.jpg"),
        this.getImgUrl("image2.jpg"),
        this.getImgUrl("image4.jpg"),
        this.getImgUrl("image5.jpg"),
        this.getImgUrl("image6.jpg"),
        this.getImgUrl("image7.jpg"),
        this.getImgUrl("image8.jpg"),
        this.getImgUrl("image9.jpg"),
        this.getImgUrl("image10.jpg"),
        this.getImgUrl("image11.jpg"),
        this.getImgUrl("image12.jpg"),
        this.getImgUrl("image13.jpg"),
        this.getImgUrl("image14.jpg"),
        this.getImgUrl("image15.jpg"),
        this.getImgUrl("image16.jpg"),
        this.getImgUrl("image17.jpg"),
        this.getImgUrl("image18.jpg"),
        this.getImgUrl("image19.jpg"),
        this.getImgUrl("image20.jpg"),
        this.getImgUrl("image21.jpg")
      ]
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("@/assets/img/devfest18/" + pic);
    }
  }
};
</script>


<style scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 2px;
}
</style> 