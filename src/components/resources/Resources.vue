<template>
 
  <v-container class="px-5">
    <v-layout wrap align-center justify-start row fill-heights>
      <v-flex xs12 md2 lg2 class="pa-3 hidden-sm-and-down">
        <v-img
          width="100%"
          :src="require('@/assets/img/team-header.png')"
          :lazy-src="require('@/assets/img/team-header.png')"
        >
          <v-layout slot="placeholder" fill-height align-center justify-start ma-0>
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-layout>
        </v-img>
      </v-flex>
      <v-flex xs12 sm7 md6 lg8 xl4 order-xs2 order-md1 class="pa-5">
        <p
          class="google-font mt-3"
          style="text-align:center;font-size:130%"
        >Our speakers are influential women who have been associated with communities within their organisations, cities, country and beyond.</p>
      </v-flex>

      
    </v-layout>
  </v-container>
</template>

<template>
             <v-layout row wrap class="px-3">
          <v-flex xs12 sm4 md4 lg3>
            <div
              style="border-radius: 5px;border: 1px solid rgb(224, 224, 224);max-height: 200px;border-left: 8px solid rgb(66, 133, 244) !important;box-shadow: 0px 3px 5px #e9e9e9;"
              class="ma-1 hidden-sm-and-down"
            >
              <div class="pa-3 card-light" style="cursor: pointer;">
                <p class="google-font mt-2 mb-0" style="font-size: 90%;">May 17, 2020</p>
                <p class="google-font ma-0 mt-0" style="font-size: 120%;">Web Assembly</p>
                <p class="google-font mt-0 mb-0" style="font-size: 90%;">18:00</p>
                <p class="google-font mt-0 mb-0" style="font-size: 90%;">Online event</p>
                <p class="mb-0 mt-2 google-font" style="color: rgb(26, 115, 232);">See More</p>
                </div>
            </div>
            <div
              style="border-radius: 5px; border:1px solid #e0e0e0;min-height:auto;"
              class="ma-1 pa-5 d-md-none d-lg-none d-xl-none"
            >
             
            </div>
          </v-flex>
        </v-layout>
</template>


// <script>
// import sessionsData from "@/assets/data/sessions.json";
// export default {
//   // components: {
//   //   sessionDialog: () => import("@/components/common/sessionDialog")
//   // },
//   data: () => ({
//     sessionsData: sessionsData,
//     items: [],
//     SelectedItem: []
//   }),
//   computed: {
//     selectAllTag() {
//       return this.SelectedItem.length === this.items.length;
//     },
//     icon() {
//       if (this.selectAllTag) return "mdi-close-box";
//       return "mdi-checkbox-blank-outline";
//     }
//   },
//   mounted() {
//     this.items = [...new Set(this.sessionsData.map(res => res.track))];
//   },
//   methods: {
//     toggle() {
//       this.$nextTick(() => {
//         if (this.selectAllTag) {
//           this.SelectedItem = [];
//         } else {
//           this.SelectedItem = this.items.slice();
//         }
//       });
//     },

//     FilterData() {
//       if (this.SelectedItem.length > 0) {
//         let asData = [];
//         this.SelectedItem.map(val => {
//           this.sessionsData.filter(res => {
//             if (res.track == val) {
//               asData.push(res);
//             }
//           });
//         });
//         return asData;
//       } else {
//         return this.sessionsData;
//       }
//     }
//   }
// };
// </script>
