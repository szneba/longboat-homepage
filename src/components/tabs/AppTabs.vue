<template>
  <div class="app-tab-wrapper">
    <div class="container">
      <ul class="nav">
        <li class="nav-item" v-for="item in items" :key="item.id">
          <a href="#" class="nav-link mt-1" :class="{ 'active' : item.isActive }">
            <font-awesome-icon :icon="['fas', item.icon]" class="custom-icon" />
            {{item.label}}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppTabs',
  data() {
    return {
      items: [
        { id: 1, label: 'My Training', icon: 'graduation-cap', isActive: true },
        { id: 2, label: 'My Certificates', icon: 'certificate' }
      ]
    }
  }
}
</script>

<style scoped>
.app-tab-wrapper {
  background-color: #91d0ec;
  overflow: hidden;
}

.nav-link {
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  padding: .8rem 1rem;
}

.nav-link.active {
  color: #717171;
  text-transform: uppercase;
  background-color: #fff;
  position: relative;
  border-radius: 12px 0 0 0;
  margin-right: 30px;
}

.nav-link.active::after {
  content: '';
  background: #fff;
  border-radius: 0 20px 0 0;
  position: absolute;
  height: 100%;
  width: 20px;
  top: 0;
  right: -20px;
  transform-origin: 0 0;
  transform: perspective(0px) rotateX(2.17deg) translateZ(-1px);
}

.custom-icon {
  font-size: 16px;
}

</style>
