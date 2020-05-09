<template>
  <v-container fluid class="my-4">
    <v-layout wrap align-center justify-center row fill-height class="py-0">
      <v-flex xs12 sm12 md7 lg7 xl7 class="px-5 py-3">
        <v-img
          :src="require('@/assets/img/logo.png')"
          :lazy-src="require('@/assets/img/logo.png')"
          width="10vh"
        >
          <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-layout>
        </v-img>
        <p
          class="google-font mt-5 mb-0"
          style="font-size:240%;color:#0097a7;font-weight:300"
        >International Women's Day 2020</p>
        <p class="google-font mb-3" style="font-size:150%;margin-top:-12px">#TogetherWeRise</p>
        <p class="google-font mb-0" style="font-size:100%;text-align:justify">
          Women Techmakers community provides visibility, community and resources for women in tech to join, thrive and lead in the industry. As a part of our International Women’s Day celebrations, we invite women and allies to join us in this celebration along with their communities.
          <br />
          <br />For the first time ever, 35 communities across the country are coming together to host a combined online summit to conduct inspiring sessions, tech talks and fun activities for you. The summit had industry leaders, Google Developer Experts, entrepreneurs and community leaders talking about the latest in tech, design, entrepreneurship and leadership.
        </p>

        <p
          class="google-font mt-5 mb-2"
          style="font-size:140%;color:#0097a7;font-weight:200"
        >May 23rd, 24th, 30th, 31st | 02:00 PM to 05:00 PM</p>
        <p class="google-font mt-5" style="font-size:110%;color:#9e9e9e">
          <span v-for="(item,i) in chapterDetails.ChapterHashTags" :key="i">#{{item}} &nbsp;</span>
        </p>
        <v-btn
          href="#"
          color="#0097a7"
          target="_blank"
          rounded
          style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;"
          outlined
          class="ml-0 google-font mt-3"
          dark
        >Register Now</v-btn>
        <v-btn
          href="#"
          color="#0097a7"
          target="_blank"
          rounded
          style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;"
          outlined
          class="ml-0 google-font mt-3 ml-2"
          dark
        >Become a Member</v-btn>
      </v-flex>
      <v-flex xs12 sm12 md3 lg5 xl5 class="text-xs-center d-none d-sm-block">
        <v-img :src="require('@/assets/img/home2.png')" width="100%">
          <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-layout>
        </v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ChapterDetails from "@/assets/data/chapterDetails.json";
export default {
  data() {
    return {
      chapterDetails: ChapterDetails
    };
  }
};
</script>
