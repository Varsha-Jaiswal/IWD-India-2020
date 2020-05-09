<template>
  <v-container fluid class="my-0 py-3">
    <v-layout wrap align-center justify-center row fill-height class="mt-10 mb-5">
      <v-flex xs12 md10>
        <v-expansion-panels accordion>
          <v-expansion-panel v-for="(item,i) in faqData" :key="i">
            <v-expansion-panel-header class="google-font">{{item.name}}</v-expansion-panel-header>
            <v-expansion-panel-content class="google-font grey lighten-4 py-3">{{item.des}}</v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import data from "@/assets/data/faq.json";
export default {
  data() {
    return {
      faqData: data
    };
  }
};
</script>
