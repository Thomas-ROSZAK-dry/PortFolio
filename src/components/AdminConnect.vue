<template>
    <div class="admin-connect"  >
      <div class="field">
  <label class="label">Email</label>
  <div class="control">
    <input class="input" type="text" placeholder="Enter your name">
  </div>
</div>
<div class="field">
  <label class="label">Password</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Email">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
  
  </div>
  
</div>

<div class="field">
  </div>

<div class="field is-grouped">
  <div class="control">
    <router-link to="/AdminBoard" class="button is-link">Connexion</router-link>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>
</div>
</template>


<script>

</script>

<style scoped>
.admin-connect {
   background:lightgrey;
}
</style>
