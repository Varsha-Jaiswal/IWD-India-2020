<template>
  <v-content class="pa-0">
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

    <v-container class="pb-10">
      <v-row class="mx-5 align-center justify-center">
        <v-col cols="5" style="border:1px solid #e0e0e0;border-radius:7px;" class="elevation-1 mr-10">
          <GetDarkBadge />
        </v-col>
        <v-col cols="5" style="border:1px solid #e0e0e0;border-radius:7px;" class="elevation-1">
          <GetLightBadge />
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import GetDarkBadge from "@/components/resources/GetDarkBadge";
import GetLightBadge from "@/components/resources/GetLightBadge";
import Resources from "@/components/resources/Resources";
import ResourcesMobileView from "@/components/resources/ResourcesMobileView";
export default {
  components: {
    Resources,
    ResourcesMobileView,
    GetDarkBadge,
    GetLightBadge
  }
};
</script>
