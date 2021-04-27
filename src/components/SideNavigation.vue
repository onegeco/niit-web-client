<template>
  <v-card class="rounded-lg pa-2" elevation="9" width="280">
    <v-navigation-drawer floating permanent>
      <v-list nav dense>
        <v-list-item color="indigo" class="mt-2" :to="{name: 'Dashboard'}">
            <v-list-item-action>
                <v-icon>mdi-apps</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>My Home</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-group color="indigo" class="mt-2" prepend-icon="mdi-folder-account" no-action v-if="niit__user_.type == '2'">
            <template v-slot:activator>
                <v-list-item-title>Course Materials</v-list-item-title>
            </template>
                <v-list-item :to="{ name: 'CourseVideos'}" link>
                    <v-list-item-title>Course Videos</v-list-item-title>
                </v-list-item>
                <v-list-item :to="{ name: 'Documents'}" link>
                    <v-list-item-title>Documents</v-list-item-title>
                </v-list-item>
        </v-list-group>
        <v-list-item color="indigo" class="mt-2" v-if="niit__user_.type == '3'" :to="{name: 'Activity'}">
            <v-list-item-action>
                <v-icon>mdi-all-inclusive</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>Activity</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-group color="indigo" class="mt-2" prepend-icon="mdi-account-supervisor-circle-outline" no-action v-if="niit__user_.type == '1'">
            <template v-slot:activator>
                <v-list-item-title>Accounts</v-list-item-title>
            </template>
                <v-list-item :to="{ name: 'Students'}" link>
                    <v-list-item-title>Manage Students</v-list-item-title>
                </v-list-item>
                <v-list-item :to="{ name: 'Lecturers'}" link>
                    <v-list-item-title>Manage Lecturers</v-list-item-title>
                </v-list-item>
                <v-list-item :to="{ name: 'Staffs'}" link>
                    <v-list-item-title>Manage Staffs</v-list-item-title>
                </v-list-item>
        </v-list-group>
        <v-list-item color="indigo" class="mt-2" v-if="niit__user_.type == '2'" :to="{name: 'Classwork'}">
            <v-list-item-action>
                <v-icon>mdi-book-open-page-variant-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>Class Work</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-item color="indigo" class="mt-2" v-if="niit__user_.type == '1'">
            <v-list-item-action>
                <v-icon>mdi-book-open-page-variant-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>Admin</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-item color="indigo" class="mt-2" :to="{ name: 'Notifications' }">
            <v-list-item-action>
                <v-icon>mdi-bell-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>Notifications</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action v-if="new_notif">
                <v-badge color="red" dot overlap>   </v-badge>
            </v-list-item-action>
        </v-list-item>
        <v-list-item color="indigo" class="mt-2" :to="{name: 'Profile'}">
            <v-list-item-action>
                <v-icon>mdi-account-box-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>My Account</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-item color="indigo" class="mt-2" v-if="niit__user_.type == '2'">
            <v-list-item-action>
                <v-icon>mdi-star</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>Student Review</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-item color="indigo" class="mt-2" v-if="niit__user_.type == '2' || niit__user_.type == '3'">
            <v-list-item-action>
                <v-icon>mdi-phone</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>Contact Support</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block color="indigo" light style="color: white" :loading="loading" :disabled="loading" @click.prevent="logout"><v-icon left>mdi-exit-to-app</v-icon> Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
</v-card>
</template>

<script>
import {mapGetters} from 'vuex'
import Api from '@/services/api'

export default {
    name: 'SideNavigation',

    data: () => ({
        new_notif: false,
        token: localStorage.getItem('_statefulTokens_'),
        isLoggedIn: false,
        loading: false,
        loader: null,
    }),

    computed: {
        ...mapGetters([
            'niit__user_', 'priviledge'
        ]),
    },

    methods: {
        logout() {
            this.loading = true;
            this.$store.dispatch('logout');
        }
    },

    mounted() {
        this.isLoggedIn = this.$store.state.LoggedIn;
        this.$store.dispatch('handleAuthorization');
    },

    created() {
        Api.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;  
    }
}
</script>
