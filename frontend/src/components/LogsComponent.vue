<style scoped>
    .v-card--variant-outlined {
        border: medium solid;
    }

    .v-card-title {
        color:black;
    }

    .v-list {
        text-align: start;
    }
</style>
<template>
    <v-card 
        class="mx-auto my-1" 
        width="400"
        color="#A8E4EF"
        variant="outlined"
    >
        <v-card-title>Log</v-card-title>
        <v-list>
            <v-list-item
                v-for="(event, index) in events"
                :key="index"
                :title="event.message"
                color="primary"
                :style="`background-color: ${getLogColor(event.type)};`"
                class="ma-2 rounded-lg"
            >
            </v-list-item>
        </v-list>
    </v-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { io } from 'socket.io-client';

export default defineComponent({
    name : "LogsComponent",
    data(){
        return {
            events : [
                {
                    message : "Gate 1 masuk tanpa KTM",
                    type : "NOTIFICATION"
                },
                {
                    message : "Parkir sembarangan di lantai 2",
                    type : "ALERT"
                },
                {
                    message : "Memuat ulang CCTV",
                    type : "PROCESS"
                }
            ],
        }
    },
    created(){
        const socket = io("ws://localhost:3000");
        socket.on('notification', (notification) => {
            this.events.push(notification)
        })
    },
    methods : {
        getLogColor(type : string){
            switch (type) {
                case "NOTIFICATION":
                    return "#FCFC99"
                case "ALERT":
                    return "#FB6962"
                case "PROCESS":
                    return "#A8E4EF"
                default:
                    return "#FFFFFF"
            }
        }
    }
})
</script>