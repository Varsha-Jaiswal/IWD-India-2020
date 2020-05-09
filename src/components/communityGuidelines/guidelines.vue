<template>
  <v-container class="px-3">
    <v-layout wrap align-start justify-start row fill-heights>
      <v-flex xs12 sm12 md12 lg12 xl8 class="pa-5">
        <p class="google-font" style="font-size:180%;color:#0097a7">Community Guidelines</p>
        <v-expansion-panels accordion>
          <v-expansion-panel v-for="(item,i) in cgdata.communityGuideline" :key="i">
            <v-expansion-panel-header class="google-font">{{item.name}}</v-expansion-panel-header>
            <v-expansion-panel-content class="google-font grey lighten-4 py-3">{{item.des}}</v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <p
          class="mt-2 google-font"
        >If you witness any attendee breaching the code of conduct, please reach out to us at wtmindia2020@gmail.com.</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import data from "@/assets/data/aboutPage.json";
export default {
  data() {
    return {
      cgdata: data
    };
  }
};
</script>
