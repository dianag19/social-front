<template>
    <form @submit.prevent="submit">
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
          <input
          v-model="data.email"
            type="email"
            class="form-control"
            placeholder="name@example.com"
            required
          />
        </div>
        <div class="form-floating">
          <input
          v-model="data.password"
            type="password"
            class="form-control"
            placeholder="Password"
            required
          />
        </div>

        <button class="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </form>
</template>
<script>
import { reactive } from 'vue';
export default {
    name:"Login",
    setup(){
      const data = reactive({
        email:'',
        password: ''
      });

      const submit = () => {

      }
      return{
        data,
        submit
      }
    }
}
</script>

<style>

</style>