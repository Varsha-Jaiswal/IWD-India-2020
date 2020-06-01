<template>
  <v-app-bar app color="white" hide-on-scroll scroll-off-screen>
    <v-app-bar-nav-icon @click="toggleDrawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
    <router-link to="/" tag="v-toolbar-title">
      <v-toolbar-title class="google-font pa-0">IWD India 2020</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>

    <v-btn
      v-for="(link, i) in links"
      :key="i"
      :to="link.to"
      text
      class="ml-0 google-font hidden-sm-and-down mr-0"
      style="text-transform: capitalize;"
      @click="onClick($event, link)"
      aria-label="Nav Button"
    >{{ link.text }}</v-btn>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  props: {
    color: String
  },
  computed: {
    ...mapGetters(["links"])
  },
  methods: {
    ...mapMutations(["toggleDrawer"]),
    onClick(e, item) {
      e.stopPropagation();
      if (item.to || !item.href) return;
      this.$vuetify.goTo(item.href);
    }
  }
};
</script>
