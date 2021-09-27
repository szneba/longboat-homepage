<template>
  <TopNavigation />
  <BottomNavigation />
</template>

<script>
import TopNavigation from "@/components/navigation/TopNavigation";
import BottomNavigation from "@/components/navigation/BottomNavigation";

export default {
  name: 'AppNavbar',
  components: {
    TopNavigation,
    BottomNavigation
  }
}
</script>
