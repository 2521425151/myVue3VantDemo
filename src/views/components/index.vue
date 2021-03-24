<template>
    <div class=''>{{route.name}}{{sidebar}}</div>
</template>

<script>
import { toRefs } from 'vue';
import { useRoute } from "vue-router" 
import { useStore } from 'vuex';
export default {
    components: {},
    setup(props, context) {
        const route = useRoute();
        const {getters} = useStore();
        const {sidebar} = toRefs(getters);
        console.log(sidebar, "sidebar");
        return {
            route,
            sidebar
        };
    },
}
</script>
<style lang='scss' scoped>
</style>