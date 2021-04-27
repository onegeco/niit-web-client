<template>
    <div class="grey lighten-5 fill-height">
        <AppBar />
            
        <v-main class="pa-md-10">
            <v-row>
                <v-col cols="12" md="3" sm="12" lg="3">
                    <SideNavigation />
                </v-col>
                <v-col cols="12" md="9" sm="12" lg="9">
                    <v-container class="white fill-height pa-10 rounded-lg" light v-if="!documents">
                        <v-row justify="center" align="center">
                            <v-col cols="12" class="text-center">
                                <v-icon large color="red lighten-4" style="font-size: 60px">mdi-video-off-outline</v-icon>
                            </v-col>
                            <v-col cols="12" class="text-center">
                                <p class="text--secondary">no documents available</p>
                            </v-col>
                        </v-row>
                    </v-container>
                        <!--v-col cols="12" md="6" sm="12" lg="6" light>
                            <v-container class="white pa-10 rounded-lg">
                                <v-row justify="center" align="center">
                                    <v-col cols="12" class="text-center">
                                        <v-icon large color="indigo lighten-4" style="font-size: 60px">mdi-video-off-outline</v-icon>
                                    </v-col>
                                    <v-col cols="12" class="text-center">
                                        <p class="text--secondary">no course videos available</p>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-col-->
                </v-col>
            </v-row>
        </v-main>
    </div>
</template>

<script>
import SideNavigation from '@/components/SideNavigation'
import AppBar from '@/components/AppBar'
import {mapGetters} from 'vuex'
import Api from '@/services/api'
export default {
    name: "Documents",

    data: () => ({
        documents: null,
    }),

    components: {
        SideNavigation, AppBar
    },

    computed: {
        ...mapGetters([
            'niit__user_'
        ]),
    },

    mounted() {
    },

    created() {
        Api.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
    }
}
</script>

<style scoped>
    .nav-bar {
        border-bottom: 1px solid #eee !important;
    }
</style>