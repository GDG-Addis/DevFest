<template>
  <v-card color="white" height="60px" class="white hidden-sm-and-up" flat>
    <v-bottom-nav :active.sync="bottomNav" :value="true" app color="white" class="elevation-2">
      <v-btn
        v-for="(item,key) in items"
        :key="key"
        color="#518FF5"
        flat
        :value="item.title"
        @click="$vuetify.goTo(item.route, options)"
      >
        <span>{{item.title}}</span>
        <v-icon>{{item.icon}}</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>


<script>
export default {
  data() {
    return {
      bottomNav: "recent",
      items: [
        {
          title: "About DevFest",
          icon: "mdi-information-outline",
          route: "#aboutDevFest"
        },
        { title: "Agenda", icon: "mdi-view-agenda", route: "#agenda" },
        {
          title: "Speakers",
          icon: "mdi-microphone-outline",
          route: "#speakers"
        },
        { title: "Venue", icon: "mdi-map-marker-radius", route: "#venue" }
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