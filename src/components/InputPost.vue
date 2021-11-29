<template>
  <div>
    <form v-on:submit.prevent="submit">
      <label for="fname">Post something</label><br />
      <input
        v-model="data.desc"
        type="text"
        placeholder="What I am thinking..."
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script >
import axios from "axios";
import { reactive } from "vue";
export default {
  name: "InputPost",
  props: {
    userId: String,
  },
  methods: {
    init: async function (data) {
      await fetch("http://localhost:8800/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    },
  },
  setup(props) {
    const data = reactive({
      desc: "",
      userId: props.userId,
    });

    const submit = async () => {
      this.init(data)
    };
    return {
      data,
      submit,
    };
  },
};
</script>