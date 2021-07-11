<template>
  
   <div class="card">
  <div class="card-image">
    <figure class="image">
      <img  src="/assets/img/corner.jpg" alt="Placeholder image">
         </figure>
  </div>

    <div class="card-content mb-6">
    <div class="media mb-6 ">
      <div class="media-left">
        <figure class="image is-48x48  ">
          <img src="/assets/img/photocv.jpg" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{{title}}</p>
        <p class="subtitle is-6">{{email}}</p>
      </div>
    </div>

    <div class="content has-text-weight-bold pt-2 pb-2 pl-2 pr-2">
      Hi  👋 <br>
 🔭 I’m working on VueJS  and on my professional reorientation <br>
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
.main {
    display: flex;
    height: auto;
    max-width: 60%;
    border-radius: 20px;
    margin-left: auto;
    margin-right: auto;
}
.content {
  border: solid 2px grey;
  border-radius: 10px;
}
.title {
  font-weight:bold;
  
}
.subtitle {
  font-weight: bold;
}

.card-image{
    display: flex;
    justify-content: center;
}

</style>
