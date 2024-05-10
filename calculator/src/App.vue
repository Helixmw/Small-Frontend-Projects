<template>
  <Layout/>
</template>

<script>
import Layout from './components/Layout.vue'

export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style>

@font-face {
    font-family: sans1;
    src: url('./assets/fonts/OpenSans-Regular.ttf');
}
@font-face {
    font-family: sans2;
    src: url('./assets/fonts/OpenSans-Italic.ttf');
}
@font-face {
    font-family: sans3;
    src: url('./assets/fonts/OpenSans-Bold.ttf');
}
@font-face {
    font-family: cool;
    src: url('./assets/fonts/coolvetica-regular.otf');
}
@font-face {
    font-family: mont;
    src: url('./assets/fonts/Montserrat-Regular.ttf');
}

:root{
    --background:rgb(24, 23, 23);
    --foreground:white;
    --sans1: sans1;
    --sans2: sans2;
    --sans3: sans3;
    --cool: cool;
    --mont: mont;
    --radius:6px;
    --primary:rgb(245, 62, 62);
    --grey1:rgb(238, 238, 238);
    --grey2:rgb(218, 217, 217);
    --grey3:rgb(179, 175, 175);
    --grey4:rgb(160, 160, 160);
    --foreground:#414141;

}

.button{
  box-shadow: 2px 1px 6px rgba(0,0,0,0.5);
  background:white;
  color:var(--foreground);
  border-radius:var(--radius);
  cursor:pointer;
}

.button:active{
    box-shadow:inset 2px 1px 6px rgba(0,0,0,0.5);
    
}



/* .button:hover{
  transform:translateY(-15px);
  transition:0.3s;
} */

.icon{
  height:3rem;
}

body{
  margin:0;
  font-family:var(--sans1);
}

@media(max-width:768px){
  .icon{
    height:2rem;
  }
}


</style>
