<template>
  <v-container class="px-5">
    <v-layout wrap align-center justify-center row fill-heights>
      <v-flex xs12 sm7 md6 lg7 xl4 order-xs2 order-md1 class="pa-5">
        <p class="google-font mb-1" style="font-weight: 350;color: #616161;font-size:200%">
          <b>
            Our
            <span style="color: #0097a7;">Speakers</span>
          </b>
        </p>
        <p
          class="google-font mt-3"
        >Being the tech leaders from across the region, also they are the same community people, just Iike us! Attend them in person and listen to their expert talks and know more about them below.</p>
        <!-- <v-btn href="#" color="#0097a7" target="_blank" rounded style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;"  class="ml-0 google-font mt-2" dark>Call For Speakers</v-btn>
        <p class="google-font mt-2">* Last Date for apply: 15th Sept 2019</p>-->
      </v-flex>

      <v-flex xs12 sm5 md6 lg5 sm4 xl8 order-xs1 order-md2 class="d-none d-sm-block">
        <v-img
          aspect-ratio="1"
          style="border:1px solid white;border-top-right-radius:20px;border-bottom-right-radius:40%;"
          class="white--text"
          max-height="400"
          :src="require('@/assets/img/together-we-rise.jpg')"
          :lazy-src="require('@/assets/img/together-we-rise.jpg')"
        >
          <!-- <v-card-title
                        class="fill-height align-end google-font"
                        style="color:red"
                    >
                        Speakers
          </v-card-title>-->
          <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-layout>
        </v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
