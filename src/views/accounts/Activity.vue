<template>
    <div class="grey lighten-5 fill-height">
        <AppBar />
            
        <v-main class="pa-md-10">
            <v-row>
                <v-col cols="12" md="3" sm="12" lg="3">
                    <SideNavigation />
                </v-col>
                <v-col cols="12" md="9" sm="12" lg="9">
                    <v-row>
                        <v-col cols="12" lg="4" md="4" sm="12">
                            <v-container class="white fill-height pa-10 rounded-lg" light v-if="!documents">
                                <v-row justify="center" align="center">
                                    <v-col cols="12" class="text-center">
                                        <v-icon large color="red lighten-4" style="font-size: 60px">mdi-book-open-page-variant-outline</v-icon>
                                    </v-col>
                                    <v-col cols="12" class="text-center">
                                        <p class="text--secondary">Start A class</p>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-col>
                        <v-col cols="12" md="4" sm="12" lg="4" light>
                            <v-container class="white pa-10 rounded-lg">
                                <v-row justify="center">
                                    <v-dialog v-model="upvideo" persistent max-width="600px">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-row justify="center" align="center" v-bind="attrs" v-on="on">
                                                <v-col cols="12" class="text-center">
                                                    <v-icon large color="red lighten-4" style="font-size: 60px">mdi-video-outline</v-icon>
                                                </v-col>
                                                <v-col cols="12" class="text-center">
                                                    <p class="text--secondary">Upload Video</p>
                                                </v-col>
                                            </v-row>
                                        </template>
                                        <v-card>
                                            <v-card-title>
                                                <span class="headline">Upload Course Video</span>
                                            </v-card-title>
                                            <hr class="divider">
                                            <v-card-text>
                                                <v-form>
                                                    <v-row>
                                                        <v-col cols="12" sm="12" md="12">
                                                            <h4 class="text--secondary mb-2">Course Title</h4>
                                                            <v-alert outlined class="rounded mb-0" color="grey ligthen-4" dense>{{ niit__user_.course }}</v-alert>
                                                        </v-col>
                                                        <v-col cols="12" sm="6" md="6" class="pt-1 pb-0">
                                                            <h4 class="text--secondary mb-2">Sub-Course (<i>Optional</i>)</h4>
                                                            <v-select class="mb-0" v-model="form.sub_course" single-line dense :items="['MicroSoft Office', 'Advanced Excel', 'SQL', 'Professional Skills']" outlined hint="E.g SQL, Advanced Excel"></v-select>
                                                        </v-col>
                                                        <v-col cols="12" sm="6" md="6" class="pt-1 pb-0">
                                                            <h4 class="text--secondary mb-2">Video Title</h4>
                                                            <v-text-field class="mb-0" v-model="form.title" single-line dense hint="Title of Video" outlined required></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" class="py-0">
                                                            <h4 class="text--secondary mb-2">Select Video</h4>
                                                            <v-file-input outlined required dense v-model="form.video_file" single-line ref="file" accept="video/*"></v-file-input>
                                                        </v-col>
                                                        <v-col cols="12" class="py-0">
                                                            <h4 class="text--secondary mb-2">Course Overview</h4>
                                                            <v-textarea v-model="form.overview" single-line dense label="Short note/ description about the class*" outlined required></v-textarea>
                                                        </v-col>
                                                    </v-row>
                                                </v-form>
                                            </v-card-text>
                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn color="red darken-1" dark @click="upvideo = false">Cancle</v-btn> 
                                                <v-btn color="indigo darken-1" dark @click="upvideo = false">Upload</v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </v-row>
                            </v-container>
                        </v-col>
                        <v-col cols="12" md="4" sm="12" lg="4" light>
                            <v-container class="white pa-10 rounded-lg">
                                <v-row justify="center">
                                    <v-dialog v-model="upvideo" persistent max-width="600px">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-row justify="center" align="center" v-bind="attrs" v-on="on">
                                                <v-col cols="12" class="text-center">
                                                    <v-icon large color="red lighten-4" style="font-size: 60px">mdi-file-multiple-outline</v-icon>
                                                </v-col>
                                                <v-col cols="12" class="text-center">
                                                    <p class="text--secondary">Upload Course Material</p>
                                                </v-col>
                                            </v-row>
                                        </template>
                                        <v-card>
                                            <v-card-title>
                                                <span class="headline">Upload Course Material</span>
                                            </v-card-title>
                                            <hr class="divider">
                                            <v-card-text>
                                                <v-form>
                                                    <v-row>
                                                        <v-col cols="12" sm="12" md="12">
                                                            <h4 class="text--secondary mb-2">Course Title</h4>
                                                            <v-alert outlined class="rounded mb-0" color="grey ligthen-4" dense>{{ niit__user_.course }}</v-alert>
                                                        </v-col>
                                                        <v-col cols="12" sm="6" md="6" class="pt-1 pb-0">
                                                            <h4 class="text--secondary mb-2">Sub-Course (<i>Optional</i>)</h4>
                                                            <v-select class="mb-0" v-model="form.sub_course" single-line dense :items="['MicroSoft Office', 'Advanced Excel', 'SQL', 'Professional Skills']" outlined hint="E.g SQL, Advanced Excel"></v-select>
                                                        </v-col>
                                                        <v-col cols="12" sm="6" md="6" class="pt-1 pb-0">
                                                            <h4 class="text--secondary mb-2">Video Title</h4>
                                                            <v-text-field class="mb-0" v-model="form.title" single-line dense hint="Title of Video" outlined required></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" class="py-0">
                                                            <h4 class="text--secondary mb-2">Select Video</h4>
                                                            <v-file-input outlined required dense v-model="form.video_file" single-line ref="file" accept="video/*"></v-file-input>
                                                        </v-col>
                                                        <v-col cols="12" class="py-0">
                                                            <h4 class="text--secondary mb-2">Course Overview</h4>
                                                            <v-textarea v-model="form.overview" single-line dense label="Short note/ description about the class*" outlined required></v-textarea>
                                                        </v-col>
                                                    </v-row>
                                                </v-form>
                                            </v-card-text>
                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn color="red darken-1" dark @click="upvideo = false">Cancle</v-btn> 
                                                <v-btn color="indigo darken-1" dark @click="upvideo = false">Upload</v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </v-row>
                            </v-container>
                        </v-col>
                        <v-col cols="12" md="4" sm="12" lg="4" light>
                            <v-container class="white pa-10 rounded-lg">
                                <v-row justify="center" align="center">
                                    <v-col cols="12" class="text-center">
                                        <v-icon large color="red lighten-4" style="font-size: 60px">mdi-account-multiple</v-icon>
                                    </v-col>
                                    <v-col cols="12" class="text-center">
                                        <p class="text--secondary">My Students</p>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-col>
                        <!--v-col cols="12" md="4" sm="12" lg="4" light>
                            <v-container class="white pa-10 rounded-lg">
                                <v-row justify="center" align="center">
                                    <v-col cols="12" class="text-center">
                                        <v-icon large color="red lighten-4" style="font-size: 60px">mdi-account-multiple</v-icon>
                                    </v-col>
                                    <v-col cols="12" class="text-center">
                                        <p class="text--secondary"></p>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-col-->
                        <v-col cols="12" md="4" sm="12" lg="4" light>
                            <v-container class="white pa-10 rounded-lg">
                                <v-row justify="center" align="center">
                                    <v-col cols="12" class="text-center">
                                        <v-icon large color="red lighten-4" style="font-size: 60px">mdi-star-check-outline</v-icon>
                                    </v-col>
                                    <v-col cols="12" class="text-center">
                                        <p class="text--secondary">Students Review</p>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-col>
                        <v-col cols="12" md="4" sm="12" lg="4" light>
                            <v-container class="white pa-10 rounded-lg">
                                <v-row justify="center" align="center">
                                    <v-col cols="12" class="text-center">
                                        <v-icon large color="red lighten-4" style="font-size: 60px">mdi-book-open-page-variant-outline</v-icon>
                                    </v-col>
                                    <v-col cols="12" class="text-center">
                                        <p class="text--secondary">My Classes</p>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-col>
                    </v-row>
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
    name: "Activity",

    data: () => ({
        documents: null,
        upvideo: false,
        form: {
            sub_course: '',
            title: '',
            overview: '',
            video_file: ''
        }
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
        this.isLoggedIn = this.$store.state.LoggedIn;
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