<template>
  <div>
    <h3 >{{name}}</h3>
  </div>
</template>

<script lang="ts">
import {computed, onMounted, reactive} from 'vue';
import {useStore} from "vuex";
export default {
  name: "InfoUser",
  setup() {
    const store = useStore();
    const name = computed(() => store.state.name);
  
    return {
      name
    };
  }
}
</script>