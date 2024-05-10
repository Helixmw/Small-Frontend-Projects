<template>
  <div class="layout">
    <div class="main">
        <div class="numbers">
            <Screen/>
        </div>
        <div class="buttons">
            <Buttons/>
        </div>
        <div class="operators">
            <Operators/>
        </div>
    </div>
  </div>
</template>

<script>
import Buttons from './Buttons.vue'
import Operators from './Operators.vue'
import Screen from './Screen.vue'
export default {
    components:{
        Buttons, Operators, Screen
    }
}
</script>

<style scoped>
    .layout{
        /* background:red; */
        height:100vh;
        display:grid;
        grid-template-columns:repeat(15,1fr);
        grid-template-rows:repeat(14,1fr);
    }

    .main{
        /* background:yellow; */
        grid-column:6/11;
        grid-row:2/14;
        display:grid;
        grid-template-rows:repeat(8,1fr);
        grid-template-columns:repeat(8,1fr);
    }

    .numbers{
        /* background:blue; */
        grid-row:1/3;
        grid-column:1/9;
    }

    .buttons{
        /* background:green; */
        padding:0.2rem;
        grid-row:3/9;
        grid-column:1/7;
    }

    .operators{
        /* background:purple; */
        padding:0.2rem;
        grid-row:3/9;
        grid-column:7/9;
    }

    @media(max-width:1300px){
        .layout{
        grid-template-columns:repeat(15,1fr);
        grid-template-rows:repeat(14,1fr);
    }

    .main{
     
        grid-column:4/13;
        grid-row:2/14;
    }
    }

    @media(max-width:768px){
        .layout{
        grid-template-columns:repeat(15,1fr);
        grid-template-rows:repeat(10,1fr);
    }

    .main{
     
        grid-column:1/16;
        grid-row:1/11;
    }
    }

    
</style>