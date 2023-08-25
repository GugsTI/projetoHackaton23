<template>
  <div id="nav">
   <div id="logo-url">
     <img id="logo" src="@/assets/m 1.png" :alt="alt">
   </div>
   <div class="container mt-3">

  <ul class="nav">
    <li class="nav-item">
      <p>pisos</p>
    </li>
    <li class="nav-item">
      <p>Sobre Nós</p>
    </li>
    <li class="nav-item">
      <p>Curriculo</p>
    </li>
  </ul>
</div>
</div>


<div > 
  <p class="h1">
     OS Melhores pisos
  </p>
  <div class="imgs">
  <img src="src/img/png-transparent-gmail-computer-icons-gratis-gmail-angle-rectangle-triangle-thumbnail-removebg-preview 1.png" alt="a">
  <img src="src/img/png-transparent-messaging-whatsapp-logos-icon-removebg-preview 1.png" alt="a">
  <img src="src/img/png-transparent-messaging-whatsapp-logos-icon-removebg-preview 1.png" alt="a">
</div>

  <button class="button">Confira</button>
</div>




</template>
  
<script script>

</script>
  
<style scoped>



.imgs{
  margin-left: 95%;
margin-right: 1%;
color: #FFF;

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
height: 198px;
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
margin-left: 30%;
margin-top: 14%;
color: #FFF;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
}




</style>