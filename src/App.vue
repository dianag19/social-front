<template>
    <Nav />
      <router-view/>
</template>

<script>
import Nav from "@/components/Nav"
export default {
  components:{
    Nav
  }
}
</script>
<style>
body{
  background-color: #F2F3F5;
}
</style>
