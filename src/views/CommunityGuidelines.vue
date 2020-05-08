<template>
  <v-content class="pa-0">
    <v-container fluid class="px-5">
      <v-layout row wrap align-center justify-center fill-height class="mt-0">
        <v-flex xs12 md10>
          <communityGuidelinesHeader class="pa-0" />
          <communityGuidelinesSection class="pa-0" />
          <coc class="pa-0" />
          <antiHarPolicy class="pa-0" />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  components: {
    communityGuidelinesHeader: () =>
      import("@/components/communityGuidelines/header"),
    communityGuidelinesSection: () =>
      import("@/components/communityGuidelines/guidelines"),
    antiHarPolicy: () =>
      import("@/components/communityGuidelines/antiHarPolicy"),
    coc: () => import("@/components/communityGuidelines/coc")
  }
};
</script>
