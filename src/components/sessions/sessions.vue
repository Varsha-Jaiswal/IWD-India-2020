<template>
  <v-container class="pa-0 ma-0">
    <v-layout wrap align-center justify-center row fill-heights>
      <v-flex xs12 sm12 md12 lg12 xl12 class="pa-5">
        <v-layout>
          <v-flex xs12 md5 class="px-1">
            <v-select
              v-model="SelectedItem"
              :items="items"
              class="session-wrapper google-font"
              chips
              label="Filter by Track"
              multiple
              outlined
              v-on:change="FilterData()"
            >
              <template v-slot:prepend-item>
                <v-list-item ripple @click="toggle">
                  <v-list-item-action>
                    <v-icon :color="SelectedItem.length > 0 ? 'indigo darken-4' : ''">{{ icon }}</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title class="google-font">Select All</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider class="mt-2"></v-divider>
              </template>
            </v-select>
          </v-flex>
        </v-layout>
        <v-layout row wrap class="pa-0 ma-0">
          <v-flex xs12 sm4 md4 lg3 v-for="(item,index) in FilterData()" :key="index">
            <div
              style="border-radius: 5px; border:1px solid #e0e0e0;min-height:200px; max-height:200px;"
              class="ma-1 pa-5 hidden-sm-and-down"
            >
              <sessionDialog :data="{vdata:item}" />
            </div>
            <div
              style="border-radius: 5px; border:1px solid #e0e0e0;min-height:auto;"
              class="ma-1 pa-5 d-md-none d-lg-none d-xl-none"
            >
              <sessionDialog :data="{vdata:item}" />
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import sessionsData from "@/assets/data/sessions.json";
export default {
  components: {
    sessionDialog: () => import("@/components/common/sessionDialog")
  },
  data: () => ({
    sessionsData: sessionsData,
    items: [],
    SelectedItem: []
  }),
  computed: {
    selectAllTag() {
      return this.SelectedItem.length === this.items.length;
    },
    icon() {
      if (this.selectAllTag) return "mdi-close-box";
      return "mdi-checkbox-blank-outline";
    }
  },
  mounted() {
    this.items = [...new Set(this.sessionsData.map(res => res.track))];
  },
  methods: {
    toggle() {
      this.$nextTick(() => {
        if (this.selectAllTag) {
          this.SelectedItem = [];
        } else {
          this.SelectedItem = this.items.slice();
        }
      });
    },
    // ShuffleData(sessionsData) {
    //   let currentIndex = sessionsData.length,
    //     temporaryValue,
    //     randomIndex;
    //   while (0 !== currentIndex) {
    //     randomIndex = Math.floor(Math.random() * currentIndex);
    //     currentIndex -= 1;
    //     temporaryValue = sessionsData[currentIndex];
    //     sessionsData[currentIndex] = sessionsData[randomIndex];
    //     sessionsData[randomIndex] = temporaryValue;
    //   }
    //   return sessionsData;
    // },
    FilterData() {
      if (this.SelectedItem.length > 0) {
        let asData = [];
        this.SelectedItem.map(val => {
          this.sessionsData.filter(res => {
            if (res.track == val) {
              asData.push(res);
            }
          });
        });
        return asData;
      } else {
        return this.sessionsData;
      }
    }
  }
};
</script>
