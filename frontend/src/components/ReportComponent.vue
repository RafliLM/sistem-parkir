<style scoped>
    .v-file-input {
        display: none;
    }
    img {
        cursor: pointer;
        max-width: 50%;
        max-height: 50%;
    }
    .v-card--variant-elevated {
        box-shadow: none;
    }
    .v-card {
        height: 90vh;
    }
</style>
<template>
    <div>
        <v-dialog
            v-model="confirmation"
            width="auto"
            height="150px"
        >
            <v-card>
                <v-card-title>Apakah anda yakin?</v-card-title>
                <v-card-text>Apakah anda yakin untuk melaporkan pelanggaran?</v-card-text>
                <v-card-actions class="">
                    <v-btn @click="confirmation=false">Tidak</v-btn>
                    <v-btn @click="submitReport()">Ya, Saya Yakin!</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-card class="w-75 ma-auto py-2">
            <v-form class="w-100 h-100">
                <img
                    :src="img ? img : require('../assets/Upload image.png')"
                    @click="uploadFile()"
                />
                <v-file-input 
                    id="uploadimg"
                    accept="image/*"
                    @change="cvtBase64"
                ></v-file-input>
                <v-text-field
                    v-model="lisencePlate"
                    class="mt-3 mx-auto rounded-lg w-50"
                    label="Nomor Plat Kendaraan"
                ></v-text-field>
                <v-text-field
                    v-model="description"
                    class="my-1 mx-auto rounded-lg w-50"
                    label="Keterangan"
                ></v-text-field>
                <v-btn 
                    class="my-1 rounded-lg"
                    color="red"
                    @click="confirmation = true"
                >
                    Laporkan
                </v-btn>
            </v-form>
        </v-card>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
    name : "ReportComponent",
    data(){
        return {
            img : undefined as unknown,
            lisencePlate : '',
            description : '',
            confirmation: false
        }
    },
    methods : {
        uploadFile(){
            document.getElementById("uploadimg")?.click();
        },
        async cvtBase64(event: Event){
            const target = event.target as HTMLInputElement
            let file = (target.files as FileList)[0]
            if(file) {
                let reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onload = () => {
                    this.img = reader.result
                }
                reader.onerror = (error) => {
                    console.log('Error: ', error)
                }
            }
        },
        submitReport(){
            axios.post("http://localhost:3000/report", {
                lisencePlate: this.lisencePlate,
                evidence: this.img,
                description: this.description
            }).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        }
    }
})
</script>