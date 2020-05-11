<template>
  <v-container fluid class="mb-10">
    <v-carousel hide-delimiters cycle interval="6000">
      <v-carousel-item v-for="(item,i) in pastEventPictures" :key="i" :src="getImgUrl(item.img)">
        <v-container fill-height fluid pa-0 ma-0>
          <v-layout fill-height align-end>
            <v-flex xs12>
              <v-card color="slider-wrapper" class="pa-2 text-center">
                <span
                  class="headline white--text google-font"
                  style="font-size:180%"
                  v-text="item.name"
                ></span>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
import pastEventPictures from "@/assets/data/pastEventPictures.json";

export default {
  data() {
    return {
      pastEventPictures: pastEventPictures
    };
  },
  methods: {
    getImgUrl(pic) {
      if (pic.length > 0) {
        return require("@/assets/img/iwd19/" + pic);
      } else {
        return require("@/assets/img/common/avatar.png");
      }
    }
  }
};
</script>
