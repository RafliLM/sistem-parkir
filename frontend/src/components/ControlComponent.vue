<style scoped>
    h4 {
        font-weight: 400;
        font-size: large;
    }
    .v-switch__thumb {
        background-color: white !important;
    }
    
    .v-switch__track {
        color: white !important;
    }
</style>
<template>
    <v-card 
        class="mx-auto my-1" 
        width="400" 
        color="#A8E4EF"
    >
        <v-card-title>System</v-card-title>
        <v-card-actions class="pl-4">
            <v-switch
                v-model="gateStatus"
                inset
                color="#79DE79"
                :label="gateStatus ? 'ON' : 'OFF'"
            >
            <template v-slot:prepend>
                <v-card-text class="pa-0">Gate</v-card-text>
                <!-- <h4>Gate</h4> -->
            </template>
            </v-switch>
        </v-card-actions>
    </v-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name : "ControlComponent",
    data(){
        return {
            gateStatus : false
        }
    }
})
</script>