<template>
  <v-content class="pa-0">
    <v-container class="pb-10">
      <v-row class="mb-5 align-center justify-center">
        <v-col
          cols="10"
          v-if="!smallScreen"
          class="text-center pb-0 elevation-1"
          style="border:1px solid #e0e0e0;border-radius:7px;"
        >
          <p class="google-font ma-0 mt-2 mb-5" style="font-size: 160%;">IWD India Badge Generator<span style="color:red;">*</span></p>
        </v-col>
        <v-col
          cols="12"
          v-if="smallScreen"
          class="text-center pb-0 elevation-1"
          style="border:1px solid #e0e0e0;border-radius:7px;"
        >
          <p class="google-font ma-0 mt-2 mb-5" style="font-size: 140%;">IWD India Badge Generator</p>
        </v-col>
      </v-row>
      <v-row class="mx-5 align-center justify-center">
        <v-col
          v-if="smallScreen"
          cols="12"
          style="border:1px solid #e0e0e0;border-radius:7px;"
          class="elevation-1 mb-4 d-md-none d-lg-none d-xl-none"
        >
          <GetDarkBadge />
        </v-col>
        <v-col
          v-if="smallScreen"
          cols="12"
          style="border:1px solid #e0e0e0;border-radius:7px;"
          class="elevation-1 mb-5 d-md-none d-lg-none d-xl-none"
        >
          <GetLightBadge />
        </v-col>
        <v-col
          v-if="!smallScreen"
          cols="5"
          style="border:1px solid #e0e0e0;border-radius:7px;"
          class="elevation-1 mr-10"
        >
          <GetDarkBadge />
        </v-col>
        <v-col
          v-if="!smallScreen"
          cols="5"
          style="border:1px solid #e0e0e0;border-radius:7px;"
          class="elevation-1"
        >
          <GetLightBadge />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="text-center google-font text-muted">
          <span><span style="color:red;">*</span>We respect your privacy and are not storing your pictures on our servers.</span>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import GetDarkBadge from "@/components/resources/GetDarkBadge";
import GetLightBadge from "@/components/resources/GetLightBadge";
export default {
  mounted() {
    if (window.screen.width < 1000) {
      this.smallScreen = true;
    }
  },
  data() {
    return {
      smallScreen: false
    };
  },
  components: {
    GetDarkBadge,
    GetLightBadge
  }
};
</script>
