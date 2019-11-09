<template>
  <v-card color="white" height="60px" class="white hidden-sm-and-up" flat>
    
    <v-bottom-nav :active.sync="bottomNav" :value="true" app color="#212121" class="elevation-2">

      <v-btn
        small
        v-for="(item,key) in items"
        :key="key"
        color="#518FF5"
        flat
        :value="item.title"
        @click="$vuetify.goTo(item.route, options)"
      >
        <span style="color:#dddddd">{{item.title}}</span>
        <v-icon small style="color:#dddddd">{{item.icon}}</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>


<script>
export default {
  data() {
    return {
      value:0,
      bottomNav: "recent",
      items: [
        { title: "Agenda", icon: "mdi-view-agenda", route: "#agenda" },
        {
          title: "Speakers",
          icon: "mdi-microphone-outline",
          route: "#speakers"
        },
        { title: "Venue", icon: "mdi-map-marker-radius", route: "#venue" }
        ,
        { title: "Partners", icon: "mdi-account-multiple", route: "#partners" }
        
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