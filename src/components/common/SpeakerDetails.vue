<template>
  <div class="text-center">
    <v-dialog v-model="dialog" hide-on-leave width="900">
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
          class="px-5 py-5 grey lighten-4 google-font"
          primary-title
            :style="{'background-image':'url('+require('@/assets/img/common/common-header-2.jpeg')+')'}"
          style="background-position:center; background-color: #dfe0e1 !important;background-size: cover;"
        >&nbsp;&nbsp;&nbsp;&nbsp;</v-card-title>

        <v-card-text class="px-5">
          <v-layout row wrap class="my-3">
            <v-flex xs12 md4 sm4 class="text-center pa-2">
              <v-avatar size="100">
                <v-img :src="getImgUrl(data.vdata.image)" :lazy-src="getImgUrl(data.vdata.image)">
                  <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-layout>
                </v-img>
              </v-avatar>
              <p class="my-0 mt-3 google-font" style="font-size:130%;color:#424242">{{data.vdata.name}}</p>
              <p class="my-0 google-font" v-if="data.vdata.company.designation">{{data.vdata.company.designation}} <span v-if="data.vdata.company.name">@</span> {{data.vdata.company.name}}</p>
              <socialMediaDetails :data="{vdata:data.vdata.social}" />
            </v-flex>

            <v-flex xs12 md8 sm8 class="pa-2 pr-5" style="text-align:justify;">
              
              <p class="google-font">{{data.vdata.bio}}</p>
                       <p class="my-0 google-font mt-2" v-if="SessionsData.length>0" style="font-size:120%">
                      <b>Sessions:</b>
              </p>

          <v-flex xs12 md6 v-for="(item, index) in SessionsData" :key="index">
            <v-list two-line subheader class="pa-0 ma-0">
              <v-list-item class="pa-0">
                  <v-list-item-content>
                  <v-list-item-title class="google-font" style="color:#424242">{{ item.title }}</v-list-item-title>
                  <v-list-item-subtitle class="google-font">
                    {{ item.track}}
                    <br />
                    <v-chip
                      color="#00BFA5"
                      label
                      outlined
                      class="mt-2 mb-0 speaker-details"
                      x-small
                    >{{item.track}}</v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-flex>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import SessionDetails from "@/assets/data/sessions.json"
export default {
  components: {
    socialMediaDetails:() => import('@/components/common/socialMedia')
  },
  props: {
    data: {
      vdata: []
    }
  },
  data() {
    return {
      dialog: false,
      SessionDetails: SessionDetails,
      SessionsData: [],
      tempData: []
    };
  },
  mounted() {
    this.SessionDetails.map(res => {
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
