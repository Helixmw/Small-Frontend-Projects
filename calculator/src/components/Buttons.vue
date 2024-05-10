<template>
  <div class="buttons">
            <button class="button" v-on:click="SelectedNumber">1</button>
            <button class="button">2</button>
            <button class="button">3</button>
            <button class="button">4</button>
            <button class="button">5</button>
            <button class="button">6</button>
            <button class="button">7</button>
            <button class="button">8</button>
            <button class="button">9</button>
            <button class="button">0</button>
            <button class="button">
              <img class="icon" src="../assets/icons/equals.svg"/>
            </button>
            <button class="button">0.00</button>
            <button class="button">DEL</button>
  </div>
</template>

<script>
export default {
  methods:{
    SelectedNumber(){
      // console.log(val);
      // this
      this.emitter.emit("key-press", {test:'a test'});
    }
  }
}
</script>

<style scoped>
  .buttons{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-template-rows:repeat(4,1fr);
    grid-row-gap:0.5rem;
    grid-column-gap:0.5rem;
  }

  

  .button{
    /* background:red; */
    min-height:8rem;
    /* border-radius:var(--radius); */
    font-family:var(--sans3);
    font-size:4rem;
    display:flex;
    justify-content: center;
    align-items: center;
    border:0px;
 
  }
  
  .button:nth-child(11){
    grid-column:2/4;
  }
  .button:nth-child(13){
    grid-column:2/4;
    font-size:2rem;
  }

  .button:nth-child(12){
    font-size:2rem;
  }
  
  @media(max-width:1300px){
    
  }
  
  @media(max-width:768px){
    .button{
      
      font-size:3rem;
        min-height:5.5rem;
      }
    }
</style>