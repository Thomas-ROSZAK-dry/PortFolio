<template>
    <div class="projects about is-flex is-flex-direction-column is-align-items-center has-text-weight-bold pt-5 " >
      <h1 class="  has-text-weight-bold is-size-2">MY PROJECTS</h1>
      <p class=" text mt-4" >Please find the link below to my different projects done or in progress</p>  
    
<ul>
    <div class="around" >
    <li class="mt-6" > <a href="https://compassionate-hermann-ce85e9.netlify.app">SlayerMonster Slayer</a></li>
    <p class="text pb-6" >Project build with: <br> VUEJS, JS, BULMA, HTML , CSS, </p>
    </div>
    <div class="around">
    <li><router-link to="/Wip">Eglise St Michel Work in Progress </router-link></li>
    <p class="text pb-6" >Project in progress build with : <br> HTML, CSS, BULMA, VUEJS, VUEFIRE
    </p>
     <li><router-link to="/Wip"> Jean Renoir LE SEPTIEME ART  Work in Progress</router-link></li>
    <p class="text pb-6" >Project in: <br> Full WORPDRESS
    </p>
     <li><router-link to="/Wip"> Odrive  Work in Progress</router-link></li>
    <p class="text pb-6" >Project in: <br> Full WORPDRESS
    </p>
</div>
</ul>
    </div>
</template>

<script>

</script>

<style scoped>
.projects {
    background: lightgrey;
    height:100vh;
}
a {
    color: brown;
    font-size: xx-large ;
}
.text {
  font-size: x-large;
}

</style>
