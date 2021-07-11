<template>
<div>
 <!-- slot permets d'envoyer vers d'autres composants et envoie la structure + le css -->
<slot></slot>

</div>

</template>

<style >
div {
 box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
 transition: 0.3s;
 margin-top:20px;
 margin-bottom:20px;
}

</style>
