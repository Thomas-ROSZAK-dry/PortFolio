
<template>
   <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://image.flaticon.com/icons/png/512/1085/1085996.png" width="auto" height="auto">
    </a>

    <a role="button" class="navbar-burger" id="burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="nav-links" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        <router-link :to= "{name:'Home'}">Home</router-link>
      </a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            <router-link :to= "{name:'About'}">About</router-link>
          </a>
          <a class="navbar-item">
            <router-link :to= "{name:'Resume'}">Resume</router-link>
          </a>
          <a class="navbar-item">
           <router-link :to= "{name:'Projects'}">Projects</router-link>
          </a>
          </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="">
            <strong><router-link :to= "{name:'Contact'}">Contact</router-link></strong>
          </a>
         
        </div>
      </div>
    </div>
  </div>
</nav>

</template>


     <a class="navbar-item"></a>
      <a class="navbar-item"><</a>
      

<script>
window.onload=function(){
 const burgerIcon =document.querySelector('#burger');
 const navbarMenu = document.querySelector('#nav-links');

 burgerIcon.addEventListener('click', () => {
 navbarMenu.classList.toggle('is-active');
   })
}
</script>


<style  lang="scss" scoped >
.menu {
    display:flex;
}
a {
   color:black;
   font-size:initial;
}

</style>
