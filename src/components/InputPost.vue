<template>
  <div>
      <input type="text" placeholder="My post...">
  </div>
</template>

<script lang="ts">
export default {
  name: "InputPost"
  /*setup() {
    const store = useStore();
    const auth = computed(() => store.state.authenticated)
    const logout = async () => {
      await fetch('http://localhost:8800/api/auth/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
      });
    }
    return {
      auth,
      logout
    }
  }*/
}
</script>