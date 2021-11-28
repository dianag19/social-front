<template>
  <div v-if="auth" class="margin-15">
    <Edit :data='result'/>
  </div>
</template>
<script lang="ts">
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";
import Edit from "../components/Edit.vue"
export default {
  components: { Edit },
  name: "EditProfile",
  setup() {
    const store = useStore();
    const auth = computed(() => store.state.authenticated);
    const name = computed(() => store.state.name);
    const email = computed(() => store.state.email);
    const profile = computed(() => store.state.profile);
    const cover = computed(() => store.state.cover);
    let result = ref({});
    onMounted(async () => {
      try {
        const response = await fetch("http://localhost:8800/api/auth/user", {
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        const content = await response.json();
        result.value = content;
        console.log("content from edit", result.value);
        await store.dispatch("setAuth", true);
      } catch (e) {
        await store.dispatch("setAuth", false);
      }
    });

    return {
      auth,
      result,
      name,
      email,
      profile,
      cover
    };
  },
};
</script>
<style>
.full-width {
  width: 100%;
}
.margin-15 {
  margin-left: 15%;
  margin-right: 15%;
}
</style>