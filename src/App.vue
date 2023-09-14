<template>
    <div>
      <navbar-item />
      <Home-item></Home-item>
      <div>
        <router-view></router-view>
     <rodape-item />
   </div>
     
    </div>
  </template>
  
  
<script setup>
import HomeItem from './components/Home-item.vue';
import NavbarItem from './components/NavbarItem.vue'
import RodapeItem from './components/RodapeItem.vue'

</script>
  
  <style>
    * {
      font-family: Helvetica;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
  
    .main-container {
      margin: 50px;
      min-height: 250px;
    }
  
    h1 {
      text-align: center;
      font-size: 42px;
      margin-bottom: 30px;
      color: #222;
    }
  </style>