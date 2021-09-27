<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand navbar-brand-wrapper" href="#">
        <img class="brand-logo me-4" alt="" src="@/assets/logo.png">
        Navigate
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <NavigationItems />
      </div>
    </div>
  </nav>
</template>

<script>
import NavigationItems from "@/components/navigation/NavigationItems";

export default {
  name: 'TopNavigation',
  components: {
    NavigationItems
  },
}
</script>

<style scoped>
.navbar {
  border-top: 4px solid #86c720;
}

.navbar-brand {
  color: #0b496b;
  font-size: 22px;
  font-style: italic;
}

.navbar-brand.navbar-brand-wrapper {
  color: #0b496b;
}

.brand-logo {
  height: 50px;
}
</style>
