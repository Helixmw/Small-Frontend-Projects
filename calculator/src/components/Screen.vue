<template>
    <div class="screen">

        <div class="operation">
            124+345
        </div>
        <div class="result">0</div>
    </div>
    </template>

<script>
export default {
    Mounted(){
        this.emitter.on("key-press", (val) => {
            console.log(val.test);
        });
    }
}
</script>

<style scoped>

.result{
    /* background:pink; */
    font-size:3.3rem;
}


.operation, .result{
    padding:0rem 0.3rem;
}

.operation{
    font-size:2rem;
}
   
.screen{
    display:flex;
    flex-direction:column;
    justify-content: flex-end;
    height:100%;
}
    
</style>