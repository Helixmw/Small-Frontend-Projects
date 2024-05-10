<template>
  <div class="operators">
            <div class="button">
                <img src="../assets/icons/add.svg" alt="" class="icon">
            </div>
            <div class="button">
                <img src="../assets/icons/minus.svg" alt="" class="icon">
            </div>
            <div class="button">
                <img src="../assets/icons/multiply.svg" alt="" class="icon">
            </div>
            <div class="button">
                <img src="../assets/icons/divide.svg" alt="" class="icon">
            </div>
            <div class="button">
                <img src="../assets/icons/modulus.svg" alt="" class="icon">
            </div>
            
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.operators{
    display:grid;
    grid-template-columns:1fr;
    grid-row-gap:0.5rem;
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
  }

  @media(max-width:768px){
    .button{
      
      font-size:3rem;
        min-height:5.5rem;
      }
    }

</style>