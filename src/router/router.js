/**
 * Ici on déclare notre objet VueRouter, puis on l'exporter
 */
 
// importer la classe VueRouter

import Vue from "vue";
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView';
import AboutView from '../views/AboutView';
import ContactView from '../views/ContactView';
import ProjectsView from '../views/ProjectsView';
import ResumeView from '../views/ResumeView';
import AdminBoardView from '../views/AdminBoardView';
import AdminConnectView from '../views/AdminConnectView';
import ErrorView from '../views/ErrorView';

// informer Vue qu'il doit utiliser le VueRouter
// VueRouter est un "plugin" pour vue
Vue.use(VueRouter);

// déclarer un array qui contient les routes
// une route est un objet qui contient
// - un clé path (nom imposé) => l'url de cette route
// - une clé component (nom imposé) => le composant à afficher
// chaque route correspond à une url qu'on veut pouvoir utiliser dans notre application, le but ici est d'associer un composant à chaque url
// les composants qui affichent les pages sont des "views", elles servent d'intermiédiaire pour garder le caractère autonome de nos simples components
const routeList = [

    {name: 'Home', path: '/', component: HomeView},
    {name: 'Contact', path: '/Contact', component: ContactView},
    {name: 'About', path: '/About', component: AboutView},
    {name: 'Projects', path: '/Projects', component: ProjectsView},
    {name: 'Resume', path: '/Resume', component: ResumeView},
     // mettre le path '*' pour envoyer vers une page d'erreur   
    {name: 'Error', path: '*', component: ErrorView},
    {name: 'AdminBoard', path: '/AdminBoard', component: AdminBoardView},
    {name: 'AdminConnect', path: '/AdminConnect', component: AdminConnectView},
    

    

];

// déclarer un nouveau routeur avec ces routes
// on donne au routeur (via l'objet en argument) la liste des routes (forcément à la clé "routes", nom imposé)
// on déclare aussi qu'on utilise le mode "history" => avoir des urls de la forme "/chemin" et non "#/chemin"
const router = new VueRouter({
    routes: routeList,
    // mettre l'url en de façon 'lisible' = mode history
    mode: "history"
});

// exporter ce routeur
export default router;