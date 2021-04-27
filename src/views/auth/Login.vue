<template>
    <v-main class="indigo" dark>
      <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
              <div class="text=center">
                <v-img src="/img/brand/niit_logo_white.png" class="mr-auto ml-auto mb-5" height="50" max-height="50" contain max-width="100"></v-img>
              </div>
              <v-card class="elevation-12">
                <v-form @keyup.enter="loginAuth()">
                <v-card class="my-3 py-10 rounded-lg pa-10" outlined tile>
                  <h2 class="">Sign In</h2>
                  <div class="mb-4 text-gray">Login with details provided to you.</div>
                  <hr class="divider">
                  <div>            
                    <label for="email" class="font-weight-bold" >Email</label>
                    <v-text-field
                      ref="email" placeholder="your-email@email.com"
                      outlined :rules="[rules.required,rules.email]"
                      v-model="form.email" :error-messages="error.email"
                      class="mt-1" required autocomplete
                    ></v-text-field>
                  </div>
                  <div>
                    <label for="password" class="font-weight-bold">Password</label>
                    <v-text-field 
                        outlined class="mt-1 input-group--focused" :error-messages="error.password"
                        v-model="form.password" autocomplete="new-password" @click:append="visible = !visible"
                        placeholder="*********" :append-icon="visible  ? 'mdi-eye light' : 'mdi-eye-off dark'"
                        :type="visible ? 'text' : 'password'" :rules="[rules.required,rules.min]" required
                    ></v-text-field>
                  </div>
                  <div>
                    <v-btn color="indigo ligthen-5 font-weight-bold" style="color: white" :loading="loading" :disabled="form.email == '' || form.password == ''" @click.prevent="loginAuth()" large block light>
                      Sign In
                    </v-btn>
                  </div>
                </v-card>
              </v-form>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
    </v-main>
</template>

<script>
import User from '@/services/user'
import Api from '@/services/api'
export default {
    name: 'Login',

    components: {
    },

    data: () => ({
        form: {
            email: '',
            password: '',
            device_name: 'browser',
        },
        loading: false,
        loader: null,
        error: {},
        rules: {
            required: value => !!value || 'This field is required',
            min: v => v.length >= 8 || 'Requires length greater than or equal to 8',
            email: value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Enter a valid email in the right format'
            },
        },
        visible: false,
    }),

    methods: {
        loginAuth() {
          this.loading = true;
          User.login(this.form).then(res => {
            localStorage.setItem('_statefulTokens_', res.data);
            this.$store.commit('loginSuccess');
            this.$router.push({ name: 'Dashboard' });
          }).then(() => {
            Api.get('/user').then(response => {
              Api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('_statefulTokens_')}`;
              localStorage.setItem('niit__user_', JSON.stringify(response.data));
              this.$store.commit('FETCH_USER');
            }).catch(error => {
                if (error.response.status === 401 || error.response.status === 500) {
                    localStorage.removeItem('_statefulTokens_');
                    localStorage.removeItem('niit__user_');
                    this.$router.push({ name: 'Login'});   
                }
              })
          }).catch( error => {
              this.loading = false;
              this.error = error.response.data.errors
            })
        }
    },

    mounted: function() {
      let elHtml = document.getElementsByTagName('html')[0]
      elHtml.style.overflowY = 'hidden'
    },
    destroyed: function() {
      let elHtml = document.getElementsByTagName('html')[0]
      elHtml.style.overflowY = null
    }
};
</script>
<style scoped>

</style>
<style>
  .v-icon.v-icon.v-icon--link {
    margin-bottom: 8px !important;
  }

  
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

</style>