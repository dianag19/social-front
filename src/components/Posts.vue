<template>
  <div  v-if="result.length != 0 ">
    <div v-for="post in result" :key="post._id">
      <div>
        <h3>{{ post.desc }}</h3>
        <p>Likes : {{ post.likes.length }}</p>
        <button v-on:click="likePost(post._id); forceRerender">Like</button>
      </div>
    </div>
  </div>
  <div v-else>
    <h4>You don't have posts</h4>
  </div>
</template>

<script >
import { computed, onMounted, reactive, ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "Posts",
  props: {
    user: String,
    all: Boolean,
  },
  methods: {
    likePost: async function (id) {
      console.log("id post", id);
      try {
        const data = {
          userId: "61a15fe4ef1e4e827bd8986d",
        };
        const response = await fetch(
          `http://localhost:8800/api/posts/${id}/like`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(data),
          }
        );

        const content = await response.json()
        .then(r => this.init())
      } catch (e) {
        console.log(e);
      }
    },
  },
  setup(props, context) {
    const store = useStore();
    const name = computed(() => store.state.name);
    const profile = computed(() => store.state.profile);
    const cover = computed(() => store.state.cover);
    let result = ref({});

    async function init(){
      const data = {
        userId: props.user,
      };
      if (!props.all) {
        try {
          const response = await fetch(
            "http://localhost:8800/api/posts/timeline/my",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
              body: JSON.stringify(data),
            }
          );

          const content = await response.json();

          result.value = content;
        } catch (e) {
          console.log(e);
        }
      } else {
        try {
          const response = await fetch(
            "http://localhost:8800/api/posts/timeline/all",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
              body: JSON.stringify(data),
            }
          );

          const content = await response.json();

          result.value = content;
        } catch (e) {
          console.log(e);
        }
      }
    }
    onMounted(async () => {
      init()
    });
    return {
      name,
      profile,
      cover,
      result,
      init
    };
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
</style>