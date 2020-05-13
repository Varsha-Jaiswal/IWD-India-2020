<template>
  <v-dialog :value="value" persistent :max-width="400">
    <v-card>
      <v-card-title>A title</v-card-title>
      <v-card-text
        >Place the mouse on the home icon and you'll get a tooltip almost in the
        center of the dialog.
      </v-card-text>
      <v-card-actions>
        <v-tooltip min-width="400px" z-index="250">
          <v-icon slot="activator" color="blue">home</v-icon>
          <span>This is a tooltip</span>
        </v-tooltip>
        <v-icon color="blue">info</v-icon>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" @click="value = false;" flat>Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["value"]
};
</script>
