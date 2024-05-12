<template>
    <Breadcrumbs title="User Cards" main="Users" />

    <div class="container-fluid ">
        <div class="row">
            <card2 />

        </div>
    </div>
</template>

<script>
import card2 from './card2.vue';

export default {
    name: 'userCards',
    components: {
        card2,
    }
}
</script>
