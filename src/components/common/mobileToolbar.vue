<template>

    <v-app-bar
        fixed
        app
        shrink-on-scroll
        absolute
      >
        <v-app-bar-nav-icon @click="toggleDrawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
        <v-toolbar-title>Title</v-toolbar-title>
        <!-- <v-toolbar-title class="google-font pa-0 ma-0">{{title}}</v-toolbar-title> -->

        <v-spacer></v-spacer>
    </v-app-bar> 
</template>


<script>
import {
    mapGetters,
    mapMutations
  } from 'vuex'
export default {
    props:{
        title:String
    },
    computed: {
      ...mapGetters(['links'])
    },
    methods: {
      ...mapMutations(['toggleDrawer']),
      onClick (e, item) {
        e.stopPropagation()
        if (item.to || !item.href) return
        this.$vuetify.goTo(item.href)
      }
    }
}
</script>