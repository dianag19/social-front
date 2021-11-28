<template>
  <div class="margin-15 margint5 back-gray">
    <div class="full-width">
      <h3>{{ message }}</h3>
    </div>
    <div v-if="auth" >
      <InputPost :userId='userId'/>
      <br>
      <Posts :user="result._id" :all='true' />
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";
import InputPost from "../components/InputPost.vue";
import Posts from "../components/Posts.vue";
export default {
  components: { InputPost,Posts },
  name: "Home",
  setup() {
    let userId =ref("");
    let result =ref({})
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
          result.value = content
          userId.value = content._id;
          message.value = `Hi ${content.username}`;
          await store.dispatch("setAuth", true);
        } else {
          console.log("dispatch false");
          await store.dispatch("setAuth", false);
        }
      } catch (e) {
        await store.dispatch("setAuth", false);
      }
    });

    return {
      result,
      userId,
      message,
      auth,
    };
  }
};
</script>
<style>
.full-width {
  width: 100%;
}
.margint5{
  margin-top:5%
}
.margin-15{
  margin-left: 15%;
  margin-right: 15%;
}
.back-gray{
  background-color: #F2F3F5;
}
</style>