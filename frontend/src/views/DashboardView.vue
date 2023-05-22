<template>
    <v-card height="100%" style="text-align: center;">
        <v-card-title>Dashboard</v-card-title>
        <div class="d-flex flex-wrap" style="height: 75%;">
            <control-component></control-component>
            <logs-component></logs-component>
        </div>
    </v-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ControlComponent from '@/components/ControlComponent.vue';
import LogsComponent from '@/components/LogsComponent.vue';

export default defineComponent({
    components : {
        ControlComponent,
        LogsComponent
    }
})
</script>