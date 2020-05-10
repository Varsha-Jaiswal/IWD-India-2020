<template>
  <div class="text-center">
    <v-dialog v-model="dialog" fullscreen hide-overlay hide-on-leave>
      <template v-slot:activator="{ on }">
        <div v-on="on" style="cursor: pointer;">
          <v-avatar size="100">
            <v-img :src="getImgUrl(data.vdata.image)" :lazy-src="getImgUrl(data.vdata.image)">
              <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-layout>
            </v-img>
          </v-avatar>
          <p class="mt-3 mb-0 google-font" style="font-size:110%">{{data.vdata.name}}</p>
          <p class="mt-1 mb-0 google-font" style="font-size:80%">{{data.vdata.company.name}}</p>
          <socialMediaDetails :data="{vdata:data.vdata.social}" />
        </div>
      </template>

      <v-card color>
        <v-card-title
          class="px-5 grey lighten-4 google-font"
          primary-title
          :style="{'background-image':'url('+require('@/assets/img/svg/footer.svg')+')'}"
          style="background-position:right top;padding-top:20%;"
        >&nbsp;&nbsp;&nbsp;&nbsp;</v-card-title>

        <v-card-text class="px-5 mb-5" style="margin-top: -80px;">
          <v-layout row wrap class="my-3">
            <v-flex xs12 md4 class="text-center pa-2">
              <v-avatar size="150">
                <v-img :src="getImgUrl(data.vdata.image)" :lazy-src="getImgUrl(data.vdata.image)">
                  <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-layout>
                </v-img>
              </v-avatar>
              <p
                class="my-0 mt-3 google-font"
                style="font-size:150%;color:#424242"
              >{{data.vdata.name}}</p>
              <p class="my-0 mt-1 google-font" style="font-size:100%">{{data.vdata.company.name}}</p>
              <socialMediaDetails :data="{vdata:data.vdata.social}" />
            </v-flex>

            <v-flex xs12 md8 class="pa-2">
              <p
                class="google-font my-0"
                style="font-size:110%"
              >{{data.vdata.company.designation}}, {{data.vdata.company.name}}</p>

              <p
                class="google-font my-4 mr-4"
                style="font-size:110%;text-align:justify"
              >{{data.vdata.bio}}</p>
            </v-flex>
          </v-layout>

          <p class="my-0 google-font mt-2" v-if="SessionsData.length>0" style="font-size:120%">
            <b>Sessions:</b>
          </p>

          <v-flex xs10 md6 v-for="(item, index) in SessionsData" :key="index">
            <v-list two-line subheader class="pa-0 ma-0">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="google-font" style="color:#424242">{{ item.title }}</v-list-item-title>
                  <v-list-item-subtitle class="google-font">
                    {{ item.track}}
                    <br />
                    <v-chip color="#00BFA5" label outlined class="mt-1 mb-0" small>{{item.format}}</v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-flex>
          <v-fab-transition>
            <v-btn absolute dark fab fixed right @click="dialog = false" color="#4285F4">
              <v-icon>mdi-keyboard-return</v-icon>
            </v-btn>
          </v-fab-transition>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import socialMediaDetails from "@/components/common/socialMedia";
import SessionDeails from "@/assets/data/sessions.json";
export default {
  components: {
    socialMediaDetails
  },
  props: {
    data: {
      vdata: []
    }
  },
  data() {
    return {
      dialog: false,
      SessionDeails: SessionDeails,
      SessionsData: [],
      tempData: []
    };
  },
  mounted() {
    this.SessionDeails.map(res => {
      res.speakers.map(d => {
        if (d == this.data.vdata.id) {
          this.SessionsData.push(res);
        }
      });
    });
  },
  methods: {
    getImgUrl(pic) {
      if (pic) {
        return require("@/assets/img/speakers/" + pic);
      } else {
        return require("@/assets/img/common/avatar.png");
      }
    }
  }
};
</script>