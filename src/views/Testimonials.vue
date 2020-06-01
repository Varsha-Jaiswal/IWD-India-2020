<template>
  <v-content class="pa-5">
    <v-container fluid class="px-1 pa-0">
      <v-layout row wrap align-center justify-center fill-height class="mt-0">
        <v-flex xs12 md10>
          <Testimonials class="pa-0 mt-0" />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import Testimonials from "@/components/testimonials/testimonials.vue";
export default {
  components: {
    Testimonials
  }
};
</script>