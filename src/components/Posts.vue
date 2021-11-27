<template>
  <div>
    <div v-for="post in result" :key="post._id">
      <div>
        <h3>{{ post.desc }}</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, reactive, ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "Posts",
  props: {
    user: {
        type:String
    }
  },
  setup() {
    const store = useStore();
    const name = computed(() => store.state.name);
    const profile = computed(() => store.state.profile);
    const cover = computed(() => store.state.cover);
    let result = ref({});
    onMounted(async () => {
      const data = {
        userId: "61a01ed25a5838a7eeac297b",
      };
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
    });
    return {
      name,
      profile,
      cover,
      result,
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