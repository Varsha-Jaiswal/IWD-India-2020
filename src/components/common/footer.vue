<template>
  <v-footer color="white" height="auto" class="ma-0">
    <v-container
      class="hidden-sm-and-down"
      fluid
      style="border-color:#e0e0e0;border-width: 1px;border-style: solid;border-bottom: 0;background:rgb(248, 248, 248);"
    >
      <v-row class="mb-0">
        <v-col class="google-font mt-5" style="color:#4285F4;text-align:center">
          <p style="font-size:130%" class="text-muted">
            Organized by
            <a
              href="https://www.womentechmakers.com/ambassadors"
              target="_blank"
            >Women Techmakers Ambassadors</a> from India
          </p>
          <p>
            For concerns and queries, contact us at
            <a
              href="mailto:wtmindia2020@gmail.com"
            >wtmindia2020@gmail.com</a>
          </p>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="9">
          <v-img
            width="30%"
            :src="require('@/assets/img/common/wtm-footer-logo.png')"
            :lazy-src="require('@/assets/img/common/wtm-footer-logo.png')"
          >
            <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
          </v-img>
        </v-col>
        <v-col cols="2" class="google-font mt-5 text-right">
          <router-link to="/faq" tag="v-btn">
            <p color="white" flat value="faq">
              <span class="google-font" style="color:rgb(66, 133, 244);">FAQ</span>
            </p>
          </router-link>
        </v-col>
        <v-col cols="1">
          <v-img
            :src="require('@/assets/img/common/up-arrow.png')"
            :lazy-src="require('@/assets/img/common/up-arrow.png')"
            class="arrow-icon"
            @click="toTop"
          />
        </v-col>
      </v-row>
    </v-container>

    <v-container
      class="d-md-none d-lg-none d-xl-nome"
      fluid
      style="border-color:#e0e0e0;border-width: 1px;border-style: solid;border-bottom: 0;background:rgb(248, 248, 248);"
    >
      <v-row class="mb-0">
        <v-col class="google-font mt-5" style="color:#4285F4;text-align:center">
          <p>
            For concerns and queries, contact us at
            <a
              href="mailto:wtmindia2020@gmail.com"
            >wtmindia2020@gmail.com</a>
          </p>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="8">
          <v-img
            width="70%"
            :src="require('@/assets/img/common/wtm-footer-logo.png')"
            :lazy-src="require('@/assets/img/common/wtm-footer-logo.png')"
          >
            <v-layout slot="placeholder" fill-height ma-0>
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
          </v-img>
        </v-col>
        <v-col cols="2" class="google-font mt-5">
          <router-link to="/faq" tag="v-btn">
            <p color="white" flat value="faq">
              <span class="google-font" style="color:rgb(66, 133, 244);">FAQ</span>
            </p>
          </router-link>
          </v-col>
          <v-col cols="2" class="text-right">
          <v-img
            :src="require('@/assets/img/common/up-arrow.png')"
            :lazy-src="require('@/assets/img/common/up-arrow.png')"
            class="arrow-icon"
            @click="toTop"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script>
export default {
  methods: {
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>
