<template>
    <div class="grey lighten-5 fill-height">
        <AppBar />
        
        <v-main class="pa-10">
            <SideNavigation class="float-left mr-5"/>
            <v-row>
                <v-col cols="12">
                    <v-row>
                        <v-col cols="12" md="6" lg="6" sm="12">
                            <v-container class="white pa-5 rounded-lg" light>
                                <v-sheet color="indigo lighten-4 pa-5" height="100" elevation="0">
                                </v-sheet>
                                <div class="text-center">
                                    <v-avatar fab color="grey" size="100" class="mt-n16">
                                        <span class="white--text headline">{{ niit__user_.first_name | getFirst | capitalize }}</span>
                                    </v-avatar>
                                    <h3 class="mt-3">{{ niit__user_.last_name | capitalize }} {{ niit__user_.first_name | capitalize }} {{ niit__user_.middle_name | capitalize }}</h3>
                                </div>
                                <hr class="divider mt-5">
                                <div>
                                    <h4 class="text--secondary mb-2">Email</h4>
                                    <v-alert color="grey" outlined>
                                        {{ niit__user_.email }}
                                    </v-alert>

                                    <h4 class="text--secondary mb-2">Mobile number</h4>
                                    <v-alert color="grey" outlined>
                                        {{ niit__user_.mobile }}
                                    </v-alert>

                                    <h4 class="text--secondary mb-2" v-if="niit__user_.type == '2'">Registered Course</h4>
                                    <h4 class="text--secondary mb-2" v-if="niit__user_.type == '3'">Course of Focus</h4>
                                    <h4 class="text--secondary mb-2" v-else>Account Type</h4>
                                    <v-alert color="grey" outlined v-if="niit__user_.type == '2' || niit__user_.type == '3'">
                                        {{ niit__user_.course | capitalize}}
                                    </v-alert>
                                    <v-alert color="grey" outlined v-if="niit__user_.type == '1'">
                                        Administrator
                                    </v-alert>
                                    <v-alert color="grey" outlined v-if="niit__user_.type == '4'">
                                        Staff
                                    </v-alert>
                                    <v-alert color="grey" outlined v-if="niit__user_.type == '5'">
                                        Director
                                    </v-alert>
                                </div>
                            </v-container>
                        </v-col>
                        <v-col cols="12" md="6" lg="6" sm="12">
                            <v-container class="white pa-10 rounded-lg" light>
                                <h3>Change Login Password</h3>
                                <hr class="divider">
                                <v-form @keyup.enter="updateData()">
                                    <div>
                                        <label for="new_password" class="font-weight-bold text--secondary mb-2">New Password</label>
                                        <v-text-field
                                            placeholder="Enter new password" :rules="[rules.required,rules.min]"
                                            outlined type="password" v-model="form.new_password" dense
                                            :error-messages="error.new_password" class="mt-1" 
                                        ></v-text-field>
                                    </div>
                                    <div>
                                        <label for="confirm_password" class="font-weight-bold text--secondary mb-2">Confirm Password</label>
                                        <v-text-field
                                            placeholder="Confirm password" :rules="[rules.required,rules.min]"
                                            outlined type="password" v-model="form.confirm_password" dense
                                            :error-messages="error.confirm_password" class="mt-1" 
                                        ></v-text-field>
                                    </div>
                                <div>
                                <v-btn color="green ligthen-5 font-weight-bold" style="color: white" :loading="loading" :disabled="form.old_passsword == '' || form.new_password == ''" @click.prevent="updateData()" large block light>
                                    Change Password
                                </v-btn>
                  </div>
              </v-form>
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
    name: "Profile",

    data: () => ({
        token: localStorage.getItem('_statefulTokens_'),
        isLoggedIn: false,
        form: {
            old_password: '',
            new_password: '',
            confirm_password: ''
        },
        rules: {
            required: value => !!value || 'This field is required',
            min: v => v.length >= 8 || 'Requires length greater than or equal to 8',
        },
        error: {},
        loading: false,
    }),

    components: {
        SideNavigation, AppBar
    },

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
        updateData() {

        }
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