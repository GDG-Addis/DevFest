<template>
  <v-container class="pa-4 my-0">
    <GmapMap
      v-bind:center="{lat:10, lng:10}"
      v-bind:zoom="7"
      map-type-id="terrain"
      style="height: 250px"
    >
      <GmapMarker
        v-bind:key="index"
        v-for="(m, index) in markers"
        v-bind:position="m.position"
        v-bind:clickable="true"
        v-bind:draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
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
