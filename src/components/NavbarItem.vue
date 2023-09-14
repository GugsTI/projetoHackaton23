<template>
  <div id="nav">
   <div id="logo-url">
     <img id="logo" src="@/assets/img/m1.png" :alt="alt">
   </div>
      <div class="container mt-3">
 
    
     
  <ul class="nav">
    <li class="nav-item">
    <a href="#">pisos</a>
    </li>
    <li class="nav-item">
      <a href="#">Sobre nós</a>
    </li>
    <li class="nav-item">
      <a href="#">Currículo</a>
    </li> 
  </ul>

   
</div>
</div>

  
</template>


<style>
  #nav {
    background: linear-gradient(183deg, rgba(155, 155, 155, 0.54) 0%, rgba(217, 217, 217, 0.00) 100%);
    padding: 15px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100px;
    flex-shrink: 0;
  }
  
   #logo-url {
    margin: auto;
    margin-left: 0;
    
  }
  
  #logo {
    width: 70px;
    height: 70px;
  }
  
  
  
  .nav-item{
  
    text-decoration: none;
    transition: .5s;
    width: 221px;
  height: 71px;
  flex-shrink: 0;
  color: #FFF;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  }
  
  
</style>