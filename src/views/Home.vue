<template>
  <div>
    <div class="full-width">
      {{ message }}
    </div>
    <div v-if="auth">
      <InputPost />
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";
import InputPost from "../components/InputPost.vue";
export default {
  components: { InputPost },
  name: "Home",
  setup() {
    const message = ref("You are not logged in");
    const store = useStore();
    const auth = computed(() => store.state.authenticated);
    onMounted(async () => {
      try {
        const response = await fetch("http://localhost:8800/api/auth/user", {
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        const content = await response.json();
        if (response.status == 200) {
          message.value = `Hi ${content.username}`;
          await store.dispatch("setAuth", true);
        } else {
          await store.dispatch("setAuth", false);
        }
      } catch (e) {
        await store.dispatch("setAuth", false);
      }
    });

    return {
      message,
      auth,
    };
  },
};
</script>
<style>
.full-width {
  width: 100%;
}
</style>