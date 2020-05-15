<template>
  <v-container id="dark" class="text-center">
    <v-row>
      <v-col md6 lg6 xs12 class="google-font" style="font-size:150%;">IWD India Badge Generator</v-col>
    </v-row>
    <v-row class="pa-0">
      <canvas id="canvas1"></canvas>
      <div style="display:none;">
        <img id="source1" src="@/assets/img/dark attendee filter.png" width="350px" height="350px" />
      </div>
    </v-row>
    <br />
    <v-row>
      <v-col>
        <v-btn
          color="#1a73e8"
          @click="uploadImage()"
          class="ma-0 google-font elevation-0 mr-2"
          style="text-transform: capitalize;border-radius: 5px;color: white;background-color: #4285F4; font-size:15px; padding: 7px;"
        >{{ image ? 'Upload Another' : 'Upload'}}</v-btn>
        <input type="file" accept="image/*" @change="upload($event)" hidden />
        <v-btn
          v-if="image"
          @click="download()"
          color="#1a73e8"
          class="ma-0 google-font elevation-0"
          style="text-transform: capitalize;border-radius: 5px;color: white;background-color: #00BFA5; font-size:15px; padding: 7px;"
        >Download</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      image: "",
      shape: "original"
    };
  },
  mounted() {
    this.canvas = document.getElementById("canvas1");
    this.ctx = this.canvas.getContext("2d");
    this.draw();
  },
  beforeMount() {},
  methods: {
    download() {
      const a = document.createElement("a");
      const url = this.canvas.toDataURL("image/png;base64");
      a.download = "IWD-India-Badge Dark-Filter.png";
      a.href = url;
      a.click();
    },
    draw() {
      if (this.image) {
        this.canvas.width = 350;
        this.canvas.height = 350;
        const hRatio = this.canvas.width / this.image.width;
        const vRatio = this.canvas.height / this.image.height;
        const ratio = Math.max(hRatio, vRatio);
        const x = (this.canvas.width - this.image.width * ratio) / 2;
        const y = (this.canvas.height - this.image.height * ratio) / 2;
        this.ctx.drawImage(
          this.image,
          0,
          0,
          this.image.width,
          this.image.height,
          x,
          y,
          this.image.width * ratio,
          this.image.height * ratio
        );
        const image = document.getElementById("source1");
        this.ctx.drawImage(image, 0, 0, image.width, image.height);
      } else {
        this.ctx.canvas.width = 350;
        this.ctx.canvas.height = 350;
        this.ctx.fillStyle = "#e0e0e0";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        const image = document.getElementById("source1");

        image.addEventListener("load", () => {
          this.ctx.drawImage(image, 0, 0, image.width, image.height);
        });
      }
    },
    upload(e) {
      if (e && e.target.files && e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = event => {
          const img = new Image();
          img.onload = () => {
            this.image = img;
            this.draw();
          };
          img.src = event.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
        this.draw();
      }
    },
    uploadImage() {
      document.querySelector("input").click();
    }
  }
};
</script>

<style scoped>
canvas {
  margin-left: auto;
  margin-right: auto;
}
</style>