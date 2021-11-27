<template>
  <div v-if="auth" class="margin-15">
    <InfoUser/>
    <Posts user="61a01ed25a5838a7eeac297b"/>
  </div>
</template>
<script lang="ts">
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";
import InfoUser from "../components/InfoUser.vue";
import Posts from "../components/Posts.vue";
export default {
  components: { InfoUser , Posts},
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
        await store.dispatch("setProfile", content.profilePicture);
        await store.dispatch("setCover", content.coverPicture);
      } catch (e) {
        await store.dispatch("setAuth", false);
        await store.dispatch("setName", "");
        await store.dispatch("setEmail", "");
        await store.dispatch("setProfile", "");
        await store.dispatch("setCover", "");
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
.margin-15{
  margin-left: 15%;
  margin-right: 15%;
}
</style>