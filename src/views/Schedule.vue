<template>
  <v-content class="pa-0">
    <v-container fluid class="px-2">
      <v-layout row wrap align-center justify-center fill-height class="mt-0">
        <v-flex xs12 md10>
          <Schedule />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  components: {
    Schedule: () => import("@/components/schedule/schedule")
  }
};
</script>
