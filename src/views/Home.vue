<template>
  <v-content class="pa-0">
    <v-container fluid class="my-0 py-0 hidden-sm-and-up">
      <v-layout wrap align-center justify-center row fill-height class="mt-0">
        <v-flex xs12 md10>
          <HomeStartScreenMobileView />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="my-0 py-5 d-none d-sm-block">
      <v-layout wrap align-center justify-center row fill-height class="mt-0">
        <v-flex xs12 md10>
          <HomeStartScreen />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="my-0 py-0 hidden-sm-and-up">
      <v-layout wrap align-center justify-center row fill-height class="mt-0">
        <v-flex xs12 md10>
          <ResourcesMobileView />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="my-0 py-5 d-none d-sm-block pb-10">
      <v-layout wrap align-center justify-center row fill-height class="mt-0">
        <v-flex xs12 md10>
          <Resources />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="grey lighten-4 py-5">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class>
          <stats />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="my-0 py-3">
      <v-layout wrap align-center justify-center row fill-height class="mt-0">
        <v-flex xs12 md10>
          <whatToDo />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="my-0 py-3">
      <v-layout wrap align-center justify-center row fill-height class="mt-0">
        <v-flex xs12 md10>
          <pastEvents />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="my-0 py-3">
      <v-layout wrap align-center justify-center row fill-height class="mt-0">
        <v-flex xs12 md10>
          <communityGuidelinesSection class="pa-0" />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  components: {
    HomeStartScreen: () => import("@/components/home/HomeStartScreen"),
    whatToDo: () => import("@/components/home/whatToDo"),
    stats: () => import("@/components/home/stats"),
    pastEvents: () => import("@/components/home/pastEvents"),
    communityGuidelinesSection: () =>
      import("@/components/communityGuidelines/guidelines"),
    HomeStartScreenMobileView: () =>
      import("@/components/home/HomeStartScreenMobileView"),
    Resources: () => import("@/components/resources/Resources"),
    ResourcesMobileView: () =>
      import("@/components/resources/ResourcesMobileView")
  }
};
</script>
