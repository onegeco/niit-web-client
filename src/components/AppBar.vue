<template>
    <v-app-bar color="white" light flat class="nav-bar">
        <v-toolbar-title class="font-weight-medium mx-6" style="color:#3F51B5">NIIT E-Learning</v-toolbar-title>
        <v-app-bar-nav-icon @click.stop="drawer = true" v-show="new_notif"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-btn icon class="mr-2">
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon class="mr-2">
            <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
        <v-avatar class="mr-2" color="indigo" size="40">
            <span class="white--text">{{ niit__user_.last_name | getFirst | capitalize }}{{ niit__user_.first_name | getFirst | capitalize}}</span>
        </v-avatar>
        <v-btn text class="font-weight-bold text--secondary mr-5 px-2">{{ niit__user_.last_name | capitalize }} {{ niit__user_.first_name | capitalize }}</v-btn>
    </v-app-bar>
</template>

<script>
import {mapGetters} from 'vuex'
import Api from '@/services/api'

export default {
    name: "AppBar",

    data: () => ({
        new_notif: false,
        token: localStorage.getItem('_statefulTokens_'),
        isLoggedIn: false,
    }),

    computed: {
        ...mapGetters([
            'niit__user_'
        ]),
    },

    filters: {
        capitalize: function (value) {
            if (!value) return ''
                value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        },

        getFirst: function (value) {
            if(!value) return ''
                value = value.toString()
            return value.charAt(0).toUpperCase();
        }
    },

    methods: {
        logout() {
            this.$store.dispatch('logout');
        }
    },

    mounted() {
        this.isLoggedIn = this.$store.state.LoggedIn;
    },

    created() {
        Api.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
    }
}
</script>