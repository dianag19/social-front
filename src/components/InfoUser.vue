<template>
  <div >
    <div class="pt400" v-bind:style="{ 'background-image': 'url(' + cover + ')', 'background-position':'center' }">
      <img :src="profile" class="radius-50" width="200" height="200" alt="" />
    </div>
    <div>
      <h3>{{ name }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, reactive } from "vue";
import { useStore } from "vuex";
export default {
  name: "InfoUser",
  setup() {
    const store = useStore();
    const name = computed(() => store.state.name);
    const profile = computed(() => store.state.profile);
    const cover = computed(() => store.state.cover);
    return {
      name,
      profile,
      cover,
    };
  },
};
</script>
<style>
.radius-50 {
  border-radius: 50%;
}
.margin-15{
  margin-left: 15%;
  margin-right: 15%;
}
.pt400{
  padding-top: 400px;
}
.full-width {
  width: 100%;
}
.mid-height {
  height: 400px;
}
</style>