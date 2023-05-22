<style scoped>
    .v-card--variant-elevated {
        box-shadow: none;
    }
</style>
<template>
    <v-card class="mx-auto my-1 w-100" height="85%">
        <v-row class="ma-2">
            <v-select
                v-model="selectedFloor"
                label="Pilih Lantai"
                :items="floors"
            >
            </v-select>
            <v-select
                v-model="selectedCamera"
                label="Pilih Kamera"
                :items="cameras"
                :item-title="getDropdownText"
                :item-value="item => item"
            >
            </v-select>
        </v-row>
        <div v-if="selectedCamera != 0" class="w-100 h-100">
            <iframe 
                class="mt-2 w-75 h-75 flex" 
                :src='getStream()[0]'
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
            ></iframe>
        </div>
        <div v-else class="w-100 h-100">
            <iframe
                v-for="(source, index) in getStream()"
                :key="index"
                class="ma-2 w-25 h-25 flex" 
                :src="source"
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
            ></iframe>
        </div>
        
    </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name : "CctvComponent",
    data(){
        return {
            selectedFloor : 1,
            selectedCamera : 0,
            floors : [1, 2, 3, 4, 5],
            cameras : [0, 1, 2, 3, 4],
            streamsrc : [
                [
                    "https://www.youtube.com/embed/c38K8IsYnB0?controls=0", 
                    "https://www.youtube.com/embed/jrA_KtAn408?controls=0", 
                    "https://www.youtube.com/embed/iq-CT8UQzgo?controls=0", 
                    "https://www.youtube.com/embed/mwN6l3O1MNI?controls=0",
                ],
                [
                    "https://www.youtube.com/embed/d8hFWghj84k?controls=0", 
                    "https://www.youtube.com/embed/2Mbvpd-HRKA?controls=0",
                    "https://www.youtube.com/embed/h0Wn8wFtyAk?controls=0", 
                    "https://www.youtube.com/embed/IN3wNf6hKMk?controls=0", 
                ],
                [
                    "https://www.youtube.com/embed/l2X9DlRzX54?controls=0",
                    "https://www.youtube.com/embed/w_DfTc7F5oQ?controls=0",
                    "https://www.youtube.com/embed/5aJr16ylrmQ?controls=0",
                    "https://www.youtube.com/embed/EPKWu223XEg?controls=0",
                ],
                [
                    "https://www.youtube.com/embed/yQdKq9NuEa0?controls=0",
                    "https://www.youtube.com/embed/srlpC5tmhYs?controls=0",
                    "https://www.youtube.com/embed/9USNTc7Gr4c?controls=0",
                    "https://www.youtube.com/embed/MDiY0SeyfGw?controls=0",
                ],
                [
                    "https://www.youtube.com/embed/Y2VfyLoTO0c?controls=0",
                    "https://www.youtube.com/embed/l_sNHKVUp2c?controls=0",
                    "https://www.youtube.com/embed/qP1y7Tdab7Y?controls=0",
                    "https://www.youtube.com/embed/JmjVorMiZK8?controls=0",
                ]
            ]
        }
    },
    methods : {
        getStream(){
            if(this.selectedCamera != 0)
                return [this.streamsrc[this.selectedFloor-1][this.selectedCamera-1]];
            else
                return this.streamsrc[this.selectedFloor-1];
        },
        getDropdownText(item: number){
            return item === 0 ? "Semua Kamera" : `${item}`;
        }
    }
})
</script>