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


<div> 
  <p class="h1">
     OS Melho
     res
    pisos
  </p>

  <div class="icon">
    <img src="@/assets/img/Ellipse1.png" alt="a">
    <img src="@/assets/img/Ellipse1.png" alt="a">
    <img src="@/assets/img/Ellipse1.png" alt="a">
    
  <img class="img1" src="@/assets/img/email.png" alt="a">
  <img class="img2" src="@/assets/img/watszapp.png" alt="a">
  <img class="img3" src="@/assets/img/telephone.png" alt="a">
</div>


   <button class="button"><a href="/">Confira</a></button>
  
 
</div>




</template>
  
<script setup>

</script>
  
<style scoped>
.img1{
margin-top: -223px;
margin-left: 12%;
}
.img2{
  margin-top: -150px;
margin-left: 11%;
}
.img3{
  margin-top: -450px;
margin-left: 10%;
}
.icon{
  margin-left: 95%;
margin-right: 1%;
}


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

.h1{
  width: 300px;
height: 150px;
flex-shrink: 0;
color: #FFF;
font-family: Inter;
font-size: 128px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-left: 250px;
margin-top: 10%;
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
.button{
  width: 158px;
height: 49px;
flex-shrink: 0;
background: #DF2A2A;
margin-left: 35%;
margin-top: 13%;
color: #FFF;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
a { color: white; } 
  
  a:link {
text-decoration:none;
}
a:visited {
text-decoration:none;
}
a:hover {
text-decoration:underline;
}



</style>