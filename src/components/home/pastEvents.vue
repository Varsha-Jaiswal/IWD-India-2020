<template>
  <v-container fluid class="mb-10">
    <v-carousel hide-delimiters>
      <v-carousel-item v-for="(item,i) in pastEventPictures" :key="i" :src="getImgUrl(item.img)">
        <v-container fill-height fluid pa-0 ma-0 pb-3>
          <v-layout fill-height align-end pb-4 mb-4>
            <v-flex xs12>
              <v-card color="grey lighten-5" class="pa-2 text-center">
                <span class="headline black--text" v-text="item.name"></span>
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
    },
    ShuffleData(pastEventPictures) {
      let currentIndex = pastEventPictures.length,
        temporaryValue,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = pastEventPictures[currentIndex];
        pastEventPictures[currentIndex] = pastEventPictures[randomIndex];
        pastEventPictures[randomIndex] = temporaryValue;
      }
      return pastEventPictures;
    }
  }
};
</script>
