<template>
    <div class=''>{{route.name}}</div>
</template>

<script>
import { useRoute } from "vue-router" 
export default {
    components: {},
    setup(props, context) {
        const route = useRoute();
        return {
            route
        };
    },
}
</script>
<style lang='scss' scoped>
</style>