<template>
    <v-card height="100%" style="text-align: center;">
        <v-card-title>Laporkan Pelanggaran</v-card-title>
        <report-component></report-component>
    </v-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ReportComponent from '@/components/ReportComponent.vue';

export default defineComponent({
    components : {
        ReportComponent
    },
    data(){
        return {
            
        }
    }
})
</script>