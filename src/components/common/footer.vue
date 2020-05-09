<template>
  <v-footer color="white" height="auto" class="hidden-sm-and-down ma-0">
    <v-container
      fluid
      style="border-color:#e0e0e0;border-width: 1px;border-style: solid;border-bottom: 0"
    >
      <v-layout wrap justify-center text-center row class="mb-0">
        <v-flex xs12 md10 lg10 class="google-font mt-5">
          <p style="font-size:130%" class="text-muted">
            Organized by
            <a
              href="https://www.womentechmakers.com/ambassadors"
              target="_blank"
            >Women Techmakers Ambassadors</a> from India
          </p>
          <p>For concerns and queries, contact us at wtmindia2020@gmail.com</p>
        </v-flex>
      </v-layout>
      <v-layout wrap justify-center text-center row class="mb-0">
        <v-flex xs12 md10 lg10>
          <v-img
            width="20%"
            :src="require('@/assets/img/common/wtm-footer-logo.png')"
            :lazy-src="require('@/assets/img/common/wtm-footer-logo.png')"
          >
            <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
          </v-img>
        </v-flex>
        <v-flex xs12 md2 lg2 class="google-font mt-5">
          <router-link to="/faq" tag="v-btn">
            <v-btn color="white" flat value="faq" class="mr-3">
              <span class="google-font">FAQ</span>
            </v-btn>
          </router-link>
          <v-img
            :src="require('@/assets/img/common/up-arrow.png')"
            :lazy-src="require('@/assets/img/common/up-arrow.png')"
            width="20%"
            @click="toTop"
          />
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
import ChapterDetails from "@/assets/data/chapterDetails.json";
import FooterData from "@/assets/data/footer.json";
export default {
  data() {
    return {
      ChapterDetails: ChapterDetails,
      FooterData: FooterData
    };
  },
  methods: {
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>