<template>
  <v-card class="mx-auto" width="300">
    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-list-item-group>
        <v-list-item v-for="(module, i) in module" :key="i" link>
          <router-link tag="div" v-bind:to="module[1]">
            <v-list-item-content>
              <v-list-item-title v-text="module[0]"></v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    module: [
      ['主页', '/index'],
      ['成绩查询', '/grade'],
    ]
  })
}
</script>

<style>
  a {
    text-decoration: none;
  }
  .router-link-active {
    text-decoration: none;
  }
</style>