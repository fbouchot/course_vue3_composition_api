import { ref, reactive, computed, watch, watchEffect, onMounted } from 'vue'

export function useNumbers(){
        // const numbers = reactive({
        //     a: 0,
        //     b: 0
        // });
        const count = ref(0);
        const a = ref(0);
        const b = ref(0);
        const history = ref([]);

        const increment = () => {
            count.value += 1
        };

        watch([a,b], ([newA, newB], [oldA, oldB]) => {
            if(newA !== oldA) {
                history.value.push(`a:${oldA} -> ${newA}`)
            }
            if(newB !== oldB) {
                history.value.push(`b:${oldB} -> ${newB}`)
            }
            console.log(newA, oldA);
        });

        onMounted(() => {
            console.log('mounted!!')
        });
        // const increase = (num) => {
        //     numbers[num] += 1;
        // };

        // watch(numbers, (newVal) => {
        //     console.log(newVal.a, newVal.b)
        // }, {
        //     immediate: true
        // });
        return {
            a,
            b,
            count,
            history,
            increment
        }
}
               