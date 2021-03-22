<template>
    <div class='Home'>
        Home
        <other />
    </div>
</template>

<script>
import { ref } from 'vue';
import other from "@/views/Home/other.vue";
export default {
    components: {
        other
    },
    setup(props, context) {
        const a = ref("") 
        const b = () => {
            const add = {};
            add.name = "xxx";
            console.log(add); 
            debugger;
            return add

        }
        return {
            a,
            b 
        };
    },
}
</script>
<style lang='scss' scoped>
    .Home {
        color: red;
    }
</style>