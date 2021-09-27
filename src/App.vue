<template>
  <AppNavbar />
  <AppTabs />
  <AppBreadcrumbs />
  <AppContent />
</template>

<script>
import AppNavbar from './components/navigation/AppNavbar.vue';
import AppTabs from './components/tabs/AppTabs.vue';
import AppBreadcrumbs from './components/breadcrumbs/AppBreadcrumbs.vue';
import AppContent from './components/AppContent.vue';

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppTabs,
    AppBreadcrumbs,
    AppContent
  }
}
</script>

<style>
html,
body {
  background-color: #f8f8f8;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
