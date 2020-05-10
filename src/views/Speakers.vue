<template>
  <v-content class="pa-0">
    <v-container fluid class="pa-0">
      <v-layout row wrap align-center justify-center fill-height class="mt-0">
        <v-flex xs12 md10>
          <SpeakerHeader class="pa-0" />
          <br />
          <SpeakerDetails class="mb-5 pb-5" />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  components: {
    SpeakerHeader: () => import("@/components/speakers/header"),
    SpeakerDetails: () => import("@/components/speakers/speakers")
  }
};
</script>
