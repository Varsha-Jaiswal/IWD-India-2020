<template>
  <v-hover>
    <v-dialog v-model="dialog" width="600">
      <template v-slot:activator="{ on }">
        <div
          v-on="on"
          class="text-xs-center ma-1 py-5 my-0 d-none d-sm-block team-card"
          style="text-align:center;border: 1px solid #f5f6f7;min-height:280px;border-radius:7px"
        >
          <v-avatar size="130">
            <v-img :src="getImgUrl(data.vdata.image)" :lazy-src="getImgUrl(data.vdata.image)">
              <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-layout>
            </v-img>
          </v-avatar>
          <p
            class="mt-3 mb-0 google-font team-name-text"
            style="font-size:100%; margin:0 5px"
          >{{data.vdata.name}}</p>
          <p class="mt-1 mb-0 google-font" style="font-size:80%">{{data.vdata.designation}}</p>
          <socialMediaDetails :data="{vdata:data.vdata.social}" />
        </div>
        <div v-on="on" style="cursor: pointer;" class="hidden-sm-and-up px-3 my-0">
          <v-layout
            row
            wrap
            class="px-0 team-mobile-card"
            style="border:1px solid #EEEEEE;border-radius:8px"
          >
            <v-flex xs4 class="pa-0">
              <v-img
                style="height:100%"
                :src="getImgUrl(data.vdata.image)"
                :lazy-src="getImgUrl(data.vdata.image)"
              >
                <v-layout
                  slot="placeholder"
                  fill-height
                  align-center
                  justify-center
                  coverd
                  class="grey"
                  ma-0
                >
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </v-img>
            </v-flex>
            <v-flex xs8 class="pa-2">
              <p class="mt-3 mb-0 google-font" style="font-size:120%">{{data.vdata.name}}</p>
              <p
                class="mt-1 mb-0 google-font"
                style="font-size:80%"
              >{{data.vdata.community.designation}}</p>
              <socialMediaDetails :data="{vdata:data.vdata.social}" />
            </v-flex>
          </v-layout>
        </div>
      </template>

      <v-card color>
        <v-card-title
          class="px-5 py-5 grey lighten-4 google-font"
          primary-title
          :style="{'background-image':'url('+require('@/assets/img/common-header-2.png')+')'}"
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
              <p class="my-0 google-font">{{data.vdata.company.name}}</p>
              <socialMediaDetails :data="{vdata:data.vdata.social}" />
            </v-flex>

            <v-flex xs12 md8 sm8 class="pa-2 pr-5" style="text-align:justify;">
              <p
                class="google-font" style="font-size:110%;color:rgb(91, 193, 237)"
              >{{data.vdata.community.designation}}, {{data.vdata.community.name}}</p>
              <p class="google-font">{{data.vdata.bio}}</p>
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
  </v-hover>
</template>

<script>
export default {
  components: {
    socialMediaDetails: () => import("@/components/common/socialMedia")
  },
  props: {
    data: {
      vdata: []
    }
  },
  data() {
    return {
      dialog: false,
      tempData: [],
      tagsData: []
    };
  },
  mounted() {},
  methods: {
    getImgUrl(pic) {
      if (pic.length > 0) {
        return require("@/assets/img/team/" + pic);
      } else {
        return require("@/assets/img/common/avatar.png");
      }
    },
    getCharString(data) {
      var splitArr = data.split(" ");
      if (splitArr.length > 1) {
        return (
          splitArr[0].substring(0, 1) +
          "" +
          splitArr[1].substring(0, 1)
        ).toUpperCase();
      } else {
        return splitArr[0].substring(0, 1).toUpperCase();
      }
    }
  },
  filters: {
    summery: (val, num) => {
      return val.substring(0, num) + "..";
    }
  }
};
</script>
