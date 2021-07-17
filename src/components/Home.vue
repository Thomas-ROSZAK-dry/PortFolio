<template>
  
   <div class="card">
  <div class="card-image image">
    <figure class="image">
      <img class="img" src="/assets/img/corner.jpg"  alt="Placeholder image">
         </figure>
  </div>

    <div class="card-content mb-6">
    <div class="media mb-6">
      <div class="media-left">
        <figure class="image is-48x48 ml-6" >
          <img class="photo" src="/assets/img/photocv.jpg" alt="Placeholder image">
        </figure>
      </div>
        <div class="media-content mr-6">
        <p class="is-size-3 has-text-weight-bold"><a href="https://github.com/Thomas-ROSZAK-dry" target="_blank" >{{title}}</a></p>
        <router-link to="/Contact" ><p class="subtitle is-6 has-text-weight-bold">{{email}}</p></router-link>
      </div>
    </div>
    <div class="content has-text-weight-bold pt-2 pb-2 pl-2 pr-2">
      Hi  👋 <br>
 🔭 I’m working on WORDPRESS and VueJS  and on my professional reorientation <br>
 🌱 I’m currently learning VueJS and NuxtJS <br>
 👯 I’m looking to collaborate on projects to improve my coding<br>
🤔 I’m looking for help with backend end dev <br>
💬 Ask me about my goals, hobbies <br>

I working to present myself  this year for the profesionnal Title of Dev web et web mobile Level 3

You'll find some of my project I'm working, in progress, also some 'datas' about me.

     
      <br>
      
    </div>
  </div>

   
</template>

<script>
export default {
  data() {
    return {
      title:'Thomas ROSZAK',
      email:'thomasroszak@protonmail.com'
    }
  }
}

</script>

<style scoped>
/* .card-content{
  background-image: url("https://image.freepik.com/vecteurs-libre/fond-ciel-stellaire-aquarelle_125540-28.jpg");
 background-repeat: no-repeat;
 background-size:cover;
 height:100vh;
 width: 100vw;

 } */
.content {
  border: solid 2px black;
  border-radius: 5px;
}

.card-image{
    display: flex;
    justify-content: center;
}
.img {
    width: 80vw;
    border: 2px solid black;
    border-radius: 2px;
}
.card {
  background:lightgrey;
}
.photo {
  border-radius: 5px;
  border: 2px solid black;
}
a {
  color: black;
}
@media screen and (min-width: 1040px) {
  .img {
    width:80vh;
  }
  .card-content {
    display:flex;
    flex-direction:column;
    align-items:center;
    
  }
.content {
  width:80vh;
}
}
</style>
