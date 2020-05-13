<template>
  <v-layout wrap row class="px-3">
    <v-flex
     xs12 sm4 md4 lg3
      v-for="(item,i) in youtubeData"
      :key="i"
    >
      <ResourcesDialog :data="{vdata:item}" />
    </v-flex>
  </v-layout>
</template>

<script>
import ResourcesData from "@/assets/data/resources.json";
import ResourcesDialog from '@/components/common/resourcesDialog';
export default {
  data() {
    return {
      youtubeData: ResourcesData.resources.youtubePlaylist,
      dialog: false
    };
  },
  components: {
      ResourcesDialog
  }
};
</script>

