<template>

<admin-board :resources="storedResources" ></admin-board>

</template>

<script>
 import AdminBoard from './AdminBoard'

export default {
    components: {
        AdminBoard,
    },
 data() {
      return {
         storedResources: [
                {
                    id:'vue-js-guide',
                    name:'Official Documentation',
                    email:'VueJS Official',
                    subject:'https://vuejs.org/v2/guide',
                    message:'Hi'
                },
                {
                    id:'vue-js-guide',
                    name:'Official Documentation',
                    email:'VueJS Official',
                    subject:'https://vuejs.org/v2/guide',
                    message:'Hi'
                }


            ] 

  }
     
},
provide() {
    return {
        resources: this.storedResources,
        // on pointe la method addResources et on va l'injecter dans le composant addResources
        addResources: this.addResources,
        deleteResource: this.removeResources,
}
 
},

methods: {
            // la methode va être enclenchée au moement de son appel
      // elle doit être appellée dans addResources avec provide
      addResources(name, email, subject, message,) {
            const newResource= {
             id: new Date().toISOString(),
             name:name,
             email:email,
             subject:subject,
             message:message,   
            };
            // unshift équivalent de push mais ajoute les données en début de tableau
            this.storedResources.unshift(newResource);
            // permets lors de la validation du formulaire de 
            // switcher directement sur la page principale
        
      },
       removeResources(resId) {

           // on cherche l'index à supprimer dans le tableau 
           // ici storedResources
           // on recherche l'id dans le tableau correspondant à celui que l'on veut supprimer
            const resIndex = this.storedResources.findIndex(res => res.id === resId);
            // vue va reconnaître qu'il s'agit du tableau en cours 
            this.storedResources.splice(resIndex, 1)
      }
  }
}
</script>

<style>
.b {
    display:flex;
    justify-content:center;
}
</style>