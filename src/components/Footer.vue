<template>
<div class="bottom has-text-weight-bold">
  <div class="pr-5" ><p><i class="fas fa-copyright">2021</i></p></div>
  <div class="pr-5"><p>{{name}} </p></div>
  <div><p><strong><router-link :to= "{name:'AdminConnect'}"><i class="fas fa-users-cog"></i></router-link></strong></p></div> 
    </div>
</template>

<script>
export default {
  data() {
    return {
     name:'Thomas ROSZAK',
      };
  },
 
};
</script>

<style scoped>
.bottom {
  display:flex;
  justify-content:center;
}


a {
 color:black;
}
</style>
