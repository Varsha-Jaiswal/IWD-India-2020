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
          style="font-size:260%;color:#0097a7;font-weight:300"
        >International Women's Day 2020</p>
        <p
          class="google-font mb-3"
          style="font-size:140%;margin-top:-12px"
        >By Women Techmakers India</p>

        <p
          class="google-font mb-0"
          style="font-size:110%"
        >International Women's Day (IWD) is marked on March 8th every year. In different regions, the focus of celebrations ranges from general respect and appreciation for women to a celebration of women's economic, political, and social achievements.</p>

        <p
          class="google-font mt-5 mb-2"
          style="font-size:140%;color:#0097a7;font-weight:200"
        >May 23-24 & May 30-31, 2020</p>
        <p class="google-font mb-3" style="font-size:120%;margin-top:-12px">YouTube LiveStream</p>
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
        <p class="google-font mt-5" style="font-size:110%;color:#9e9e9e">
          <span v-for="(item,i) in chapterDetails.ChapterHashTags" :key="i">#{{item}} &nbsp;</span>
        </p>
      </v-flex>
      <v-flex xs12 sm12 md3 lg5 xl5 class="text-xs-center d-none d-sm-block">
        <v-img
          :src="require('@/assets/img/home2.png')"
          :lazy-src="require('@/assets/img/home2.png')"
          width="100%"
        >
          <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-layout>
        </v-img>
      </v-flex>
    </v-layout>
    <v-layout wrap align-center justify-center row fill-height class="py-0">
             <p class="google-font my-0 my-3 mt-5" >
                    <span style="font-size:140%;background:#0097a7;color:white;border:1px solid #0097a7;border-radius:7px;padding: 15px 80px" class="">
                       Theme of IWD 2020 - #TogetherWeRise
                    </span>
                </p> 
                <br>
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
