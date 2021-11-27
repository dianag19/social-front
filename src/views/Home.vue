<template>{{ message }}</template>
<script lang="ts">
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "Home",
  setup() {
    const message = ref("You are not logged in");
    const store = useStore();
    onMounted(async () => {
      try {
        const response = await fetch("http://localhost:8800/api/auth/user", {
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        const content = await response.json();
        if(response.status == 200){
          message.value = `Hi ${content.username}`;
          await store.dispatch('setAuth', true);
        }else{
          await store.dispatch('setAuth', false);
        }
        
      } catch (e) {
        await store.dispatch('setAuth', false);
      }
    });

    return {
      message,
    };
  },
};
</script>