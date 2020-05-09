<template>
  <v-container class="px-5">
    <v-layout wrap align-center justify-start row fill-heights>
        <v-flex xs12 md2 lg2 class="pa-3 hidden-sm-and-down">
          <v-img
            width="100%"
            :src="require('@/assets/img/wtm-image.png')"
            :lazy-src="require('@/assets/img/wtm-image.png')"
          >
            <v-layout slot="placeholder" fill-height align-center justify-start ma-0>
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
          </v-img>
        </v-flex>
      <v-flex xs12 sm7 md6 lg8 xl4 order-xs2 order-md1 class="pa-5">
      
        <p
          class="google-font mt-3"
        >Our speakers are influential women who have been associated with communities within their organisations, cities, country and beyond.</p>
      </v-flex>

      <!-- <v-flex xs12 sm5 md6 lg5 sm4 xl8 order-xs1 order-md2 class="d-none d-sm-block">
        <v-img
          aspect-ratio="1"
          style="border:1px solid white;border-top-right-radius:20px;border-bottom-right-radius:40%;"
          class="white--text"
          max-height="400"
          :src="require('@/assets/img/together-we-rise.jpg')"
          :lazy-src="require('@/assets/img/together-we-rise.jpg')"
        >
          <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-layout>
        </v-img>
      </v-flex> -->
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
