<template>
    <v-card height="100%" style="text-align: center;">
        <v-card-title>Pemantauan CCTV</v-card-title>
        <cctv-component></cctv-component>
    </v-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import CctvComponent from '@/components/CctvComponent.vue';

export default defineComponent({
    components : {
        CctvComponent
    }
})
</script>