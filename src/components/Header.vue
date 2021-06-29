
<template>
   <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
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
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>

</template>

<!-- <div class="navbar-menu" id="nav-links">
    <div class="navbar-end">
     <a class="navbar-item"><router-link :to= "{name:'Home'}">Home</router-link></p></a>
     <a class="navbar-item"><router-link :to= "{name:'About'}">About</router-link></a>
     <a class="navbar-item"><router-link :to= "{name:'Resume'}">Resume</router-link></a>
      <a class="navbar-item"><router-link :to= "{name:'Projects'}">Projects</router-link></a>
      <a class="navbar-item"><router-link :to= "{name:'Contact'}">Contact</router-link></a>
  </div> -->

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
