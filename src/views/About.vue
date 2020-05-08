<template>
  <v-content class="pa-0">
    <v-container fluid class="px-5">
      <v-layout row wrap align-center justify-center fill-height class="mt-0">
        <v-flex xs12 md10>
          <aboutHeader class="pa-0" />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  components: {
    aboutHeader: () => import("@/components/about/header")
  }
};
</script>
