<template>
    <v-app>
      <v-main class="grey lighten-5">
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12" sm="8" md="3">
              <div class="text=center">
                <v-img src="/img/brand/niit_logo_blue.png" class="mr-auto ml-auto mb-5" height="50" max-height="50" contain max-width="100"></v-img>
              </div>
              <div>
                <v-progress-linear class="mt-3" indeterminate color="indigo"></v-progress-linear>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
</template>

<script>
export default {
    name: 'Loader',
}
</script>