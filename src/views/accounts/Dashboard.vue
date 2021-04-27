<template>
    <div class="grey lighten-5 fill-height">
        <template v-if="loading & getLoadingCount == 1">
            <Loader />
        </template>
        <template v-else>
            <AppBar />
            
            <v-main class="pa-md-10 pa-sm-5">
                <SideNavigation class="float-left mr-5"/>
            <v-row>
                <v-col cols="12">
                        <v-row>
                            <v-col cols="12" lg="6" md="6" sm="12">
                                <v-sheet class="pa-10 rounded-lg " outlined light>
                                    <v-row justify="center" align="center">
                                        <v-col cols="12" class="text-center">
                                            <v-icon large color="red lighten-4" style="font-size: 60px">mdi-book-open-page-variant-outline</v-icon>
                                        </v-col>
                                        <v-col cols="12" class="text-center">
                                            <p class="text--secondary">No class is currently in session</p>
                                        </v-col>
                                    </v-row>
                                </v-sheet>
                            </v-col>
                            <v-col cols="12" lg="6" md="6" sm="12" v-if="niit__user_.type == '2'">
                                <v-sheet class="pa-10 rounded-lg " outlined>
                                    <router-link :to="{ name: 'Documents'}">
                                        <v-row justify="center" align="center">
                                            <v-col cols="12" class="text-center">
                                                <v-icon large color="red lighten-4" style="font-size: 60px">mdi-bookshelf</v-icon>
                                            </v-col>
                                            <v-col cols="12" class="text-center">
                                                <v-btn color="indigo" dark :to="{ name: 'Documents' }">View Course Materials</v-btn>    
                                            </v-col>
                                        </v-row>
                                    </router-link>
                                </v-sheet>
                            </v-col>
                            <v-col cols="12" lg="6" md="6" sm="12" v-if="niit__user_.type == '2'">
                                <v-sheet class="pa-10 rounded-lg " outlined>
                                    <v-row justify="center" align="center">
                                        <v-col cols="12" class="text-center">
                                            <v-icon large color="red lighten-4" style="font-size: 60px">mdi-video-off-outline</v-icon>
                                        </v-col>
                                        <v-col cols="12" class="text-center">
                                            <p class="text--secondary">Most recent vidoes will be listed here</p>
                                        </v-col>
                                    </v-row>
                                </v-sheet>
                            </v-col>
                            <v-col cols="12" lg="6" md="6" sm="12" v-if="niit__user_.type == '2'">
                                <v-sheet class="pa-10 rounded-lg " outlined>
                                    <v-row justify="center" align="center">
                                        <v-col cols="12" class="text-center">
                                            <v-icon large color="red lighten-4" style="font-size: 60px">mdi-book-off-outline</v-icon>
                                        </v-col>
                                        <v-col cols="12" class="text-center">
                                            <p class="text--secondary">New class assignments will be listed here</p>
                                        </v-col>
                                    </v-row>
                                </v-sheet>
                            </v-col>
                            <v-col cols="12" lg="6" md="6" sm="12" v-if="niit__user_.type == '3'">
                                <v-sheet class="pa-10 rounded-lg " outlined>
                                    <v-row justify="center" align="center">
                                        <v-col cols="12" class="text-center">
                                            <v-icon large color="red lighten-4" style="font-size: 60px">mdi-book-outline</v-icon>
                                        </v-col>
                                        <v-col cols="12" class="text-center">
                                            <p class="text--secondary">Create Assignment</p>
                                        </v-col>
                                    </v-row>
                                </v-sheet>
                            </v-col>
                            <v-col cols="12" lg="6" md="6" sm="12" v-if="niit__user_.type == '3'">
                                <v-sheet class="pa-10 rounded-lg " outlined>
                                    <v-row justify="center" align="center">
                                        <v-col cols="12" class="text-center">
                                            <v-icon large color="red lighten-4" style="font-size: 60px">mdi-video-outline</v-icon>
                                        </v-col>
                                        <v-col cols="12" class="text-center">
                                            <p class="text--secondary">My Videos</p>
                                        </v-col>
                                    </v-row>
                                </v-sheet>
                            </v-col>
                            <v-col cols="12" lg="6" md="6" sm="12" v-if="niit__user_.type == '3'">
                                <v-sheet class="pa-10 rounded-lg " outlined>
                                    <v-row justify="center" align="center">
                                        <v-col cols="12" class="text-center">
                                            <v-icon large color="red lighten-4" style="font-size: 60px">mdi-bell-ring</v-icon>
                                        </v-col>
                                        <v-col cols="12" class="text-center">
                                            <p class="text--secondary">Post Announcement</p>
                                        </v-col>
                                    </v-row>
                                </v-sheet>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-main>
        </template>
    </div>
</template>

<script>
import SideNavigation from '@/components/SideNavigation'
import AppBar from '@/components/AppBar'
import {mapGetters} from 'vuex'
import Api from '@/services/api'
import Loader from '@/components/Loader'

export default {
    name: "Dashboard",

    data: () => ({
        token: localStorage.getItem('_statefulTokens_'),
        isLoggedIn: false,
        loading: true,
    }),

    components: {
        SideNavigation, AppBar, Loader
    },

    computed: {
        ...mapGetters([
            'niit__user_', 'getLoadingCount', 'priviledge'
        ]),
    },
    
    filters: {
        capitalize: function (value) {
            if (!value) return ''
                value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        },
    },

    methods: {
        
    },
    mounted: function() {
      let elHtml = document.getElementsByTagName('html')[0]
      elHtml.style.overflowY = 'hidden'
    },
    destroyed: function() {
      let elHtml = document.getElementsByTagName('html')[0]
      elHtml.style.overflowY = null
    },

    created() {
        Api.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
        
        if(this.loading) {
            setTimeout(() => {
                this.loading = false;
                this.$store.state.LoadingCount = 0;
            }, 5000);
        }
    }
}
</script>

<style scoped>
    .nav-bar {
        border-bottom: 1px solid #eee !important;
    }
    .theme--light.v-sheet--outlined {
        border: thin solid #eeeeee !important;
    }
</style>

<style>
  .example-player {
    position: relative;
    height: 410px;
    background-color: #000;
    font-weight: normal;
  }
  .movie-detail{
    padding-top: 20px;
    color: rgba(0,0,0, .65);
  }
  .movie-detail h1{
    font-size: 20px;
    color: #000;
  }
  .movie-detail .date {
    font-size: 14px;
  }
  .movie-detail .desc {
    font-size: 13px;
    padding: 10px 20px 10px 0;
  }
  .movie-detail .btn-wrap {
    padding-right: 20px;
    text-align: right;
  }
  .play-list h2 {
    font-size: 18px;
    color: rgba(0,0,0, .85);
    padding-bottom: 10px;
  }
  .recommend-list {
    margin-top: 40px;
    padding-top: 40px;
    padding-bottom: 40px;
    border-top: 1px solid #ddd;
  }
  .thanks {
    padding: 20px 0 40px;
    color: rgba(0, 0, 0, .25);
    font-size: 13px;
    text-align: center;
  }
  .recommend-list:after{
    content: '';
    display: block;
    clear: both;
  }
.container_outlined{
    border: 1px solid #000 !important;
}
</style>