<template>
  <div>
    <form>
      <label for="fname">Post something</label><br />
      <input type="text" id="fname" placeholder="What I am thinking..." /><br />
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script lang="ts">
export default {
  name: "InputPost",
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
};
</script>