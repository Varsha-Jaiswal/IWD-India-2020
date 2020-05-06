<template>
  <v-container>
    <v-layout
      row
      wrap
      class="pa-0"
    >
      <v-flex xs12 md12>
        <v-img
          :src="require('../assets/iwd.jpg')"
          class="mt-0"
          
          height="500"
        ></v-img>
      </v-flex>

      <v-flex xs12 md6 offset-md3 mb-4 mt-4 text-center>
        <h1 class="google-font mb-3">
           IWD Jalandhar 2020
        </h1>
        <p class="subheading font-weight-regular google-font">
          IWDs are community-led, developer events hosted by WTM chapters around the globe focused on community building and learning about Google’s technologies and celebrating the accomplishments of women with inspiring career.
        </p>

        <p class="subheading font-weight-regular google-font">
         <b>Powered By: </b> WTM Jalandhar & GDG Jalandhar          
        </p>
      </v-flex>  
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
   
  }),
};
</script>
