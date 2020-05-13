<template>
  <v-content class="pa-0">
    <v-container>
      <CropImage />
    </v-container>
    <v-container fluid class="my-0 py-0 hidden-sm-and-up">
      <v-layout wrap align-center justify-center row fill-height class="mt-0">
        <v-flex xs12 md10>
          <ResourcesMobileView />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="my-0 py-5 d-none d-sm-block">
      <v-layout wrap align-center justify-center row fill-height class="mt-0">
        <v-flex xs12 md10>
          <Resources />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import CropImage from "@/components/resources/CropImage";
import Resources from "@/components/resources/Resources";
import ResourcesMobileView from "@/components/resources/ResourcesMobileView";
export default {
  components: {
    Resources,
    ResourcesMobileView,
    CropImage
  }
};
</script>
