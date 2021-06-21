<template>
<div class="nav" >
   <ul class="menu">
    <li>
       <p class="title"><router-link :to= "{name:'Home'}">Home</router-link></p>
    </li>
    <li>
       <p class="title"><router-link :to= "{name:'About'}">About</router-link></p>
    </li>
    <li>
        <p class="title"><router-link :to= "{name:'Resume'}">Resume</router-link></p>
    </li>
    <li>
       <p class="title"><router-link :to= "{name:'Projects'}">Projects</router-link></p>
    </li>
    <li>
       <p class="title"><router-link :to= "{name:'Contact'}">Contact</router-link></p>
    </li>
</ul>
</div>
</template>

<script>

</script>

<style  lang="scss" scoped >
.menu {
    display:flex;
}

</style>
