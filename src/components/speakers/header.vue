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
          class="google-font mt-3" style="text-align:justify"
        >Our speakers are influential women who have been associated with communities within their organisations, cities, country and beyond.</p>
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
