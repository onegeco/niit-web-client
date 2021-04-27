<template>
  <v-app>
    <template>
        <router-view></router-view>
    </template>

    <template>
      <router-view name="auth"></router-view>
    </template>

    <template>
      <router-view name="account"></router-view>
    </template>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
      
  }),
};
</script>

<style>
  .text-gray {
    color: #888888 !important;
  }
  .text-small {
    font-size: 14px;
  }
  .divider {
    margin-bottom: 20px;
    margin-top: 5px;
    height: 1px;
    border: none;
    background-color: #DDD;
  }
  .v-text-field--outlined > .v-input__control > .v-input__slot {
    min-height: 48px !important;
  }
  .onegeco-text {
    color: #ff6128 !important;
  }
</style>