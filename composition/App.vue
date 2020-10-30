<template>  
<button @click="increment">{{ count }}</button>
<!-- <button @click="increase('a')">{{ numbers.a }}</button>
 <button @click="increase('b')">{{ numbers.b }}</button>-->
<button @click="a++">{{ a }}</button>
<button @click="b++">{{ b }}</button>

<div v-for="msg in history" :key="msg">
{{ msg }}
</div>
</template>

<script>
import { useNumbers } from './numbers';

export default {
    // created() {
    //     console.log('created');
    // },
    // mounted() {
    //     console.log('mounted');
    // },
    setup() {
        const {        
            increment,
            count,
            a,
            b,
            history    
        } = useNumbers()
         
        return {
            increment,
            count,
            a,
            b,
            history
        }
    }
}
</script>

<style scoped>

</style>