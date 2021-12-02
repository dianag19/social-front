<template>
  <div>
    <h3>{{ data.username }}</h3>
    <h3>{{ data.email }}</h3>
    <div>
      <form @submit.prevent="onUpload">
        <div class="form-group">
          <h4>Profile picture</h4>
          <input type="file" name="imagesArray" @change="onChange" />
        </div>
        <div class="form-group">
          <h4>Cover picture</h4>
          <input type="file" name="coverArray" @change="onChange" />
        </div>
        <div class="form-group">
          <button class="btn btn-success">Submit</button>
          <h4>{{ dataresponse }}</h4>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from "vue";
import { useStore } from "vuex";
import axios from "axios";
export default {
  name: "Edit",
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      imagesArray: null,
      id: this.data._id,
      dataresponse: "",
    };
  },
  methods: {
    onChange(event) {
      this.imagesArray = event.target.files[0];
    },
    async onUpload() {
      const formData = new FormData();
      //let urlImg = URL.createObjectURL(this.imagesArray);
      formData.append("source", this.imagesArray, this.imagesArray.name);
      formData.append("key", "6d207e02198a847aa98d0a2a901485a5");
      //formData.append("isAdmin", "true");
      try {
        let imgResponse = await fetch("https://freeimage.host/api/1/upload", {
          body: formData,
          mode:"no-cors",
          method: "POST",
        });

        let resJSON = imgResponse.json();
        console.log("res json", resJSON);
        /*console.log("url", `http://localhost:8800/api/users/${this.id}`);
        const response = await axios
          .put(`http://localhost:8800/api/users/${this.id}`, formData)
          .then((res) => {
            if (res.status == 200) {
              this.dataresponse = res.data;
            }
          });*/
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
<style>
.radius-50 {
  border-radius: 50%;
}
.margin-15 {
  margin-left: 15%;
  margin-right: 15%;
}
.pt400 {
  padding-top: 400px;
}
.full-width {
  width: 100%;
}
.mid-height {
  height: 400px;
}
img {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}
</style>
