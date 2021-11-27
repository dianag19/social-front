<template>
  <div v-if="auth">
    <InfoUser/>
  </div>
</template>
<script lang="ts">
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";
import InfoUser from "../components/InfoUser.vue";
export default {
  components: { InfoUser },
  name: "Profile",
  setup() {
    const store = useStore();
    const auth = computed(() => store.state.authenticated);
    let result;
    onMounted(async () => {
      try {
        const response = await fetch("http://localhost:8800/api/auth/user", {
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        const content = await response.json();
        result = content;
        console.log("content",content);
        await store.dispatch("setAuth", true);
        await store.dispatch("setName", content.username);
        await store.dispatch("setEmail", content.email);
        await store.dispatch("setProfile", content.username);
        await store.dispatch("setCover", content.username);
      } catch (e) {
        await store.dispatch("setAuth", false);
      }
    });

    return {
      auth,
      result
    };
  },
};
</script>
<style>
.full-width {
  width: 100%;
}
</style>