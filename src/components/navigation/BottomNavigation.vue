<template>
  <nav class="navbar navbar-expand-lg navbar-dark p-0">
    <div class="container">
      <ul class="nav">
        <li class="nav-item" v-for="item in items" :key="item.id">
          <a href="" class="nav-link" :class="{ 'active' : item.isActive }">
            <font-awesome-icon :icon="['fas', item.icon]" class="custom-icon" />
            {{item.label}}
          </a>
        </li>
      </ul>
      <ul class="nav">
        <li class="nav-item">
          <a href="" class="nav-link alerts-link">
            <font-awesome-icon icon="envelope" class="custom-icon" />
            <span class="alerts-number-badge">5</span>
            Alerts
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'BottomNavigation',
  data() {
    return {
      items: [
        { id: 1, label: 'Dashboard', icon: 'home' },
        { id: 2, label: 'Training', icon: 'graduation-cap', isActive: true },
        { id: 3, label: 'Documents', icon: 'folder' },
        { id: 4, label: 'Parents', icon: 'user-friends' },
        { id: 5, label: 'FAQ', icon: 'comments' }
      ]
    }
  }
}
</script>

<style scoped>
  .navbar {
    background-color: #264a75;
  }
  .nav-link {
    color: #fff;
    text-transform: uppercase;
    font-size: 15px;
    padding-top: .7rem;
    padding-bottom: .7rem;
    transition: background-color ease-in .2s;
  }

  .alerts-link {
    position: relative;
  }

  .alerts-number-badge {
    position: absolute;
    top: 20px;
    left: 10px;
    display: block;
    height: 15px;
    width: 15px;
    color: #0b496b;
    background-color: #fff;
    border-radius: 100%;
    text-align: center;
    font-size: 11px;
  }

  .custom-icon {
    color: #10253c;
    transition: color ease-in .2s;
    font-size: 18px;
  }

  .nav-link.active {
    background-color: #22426a;
  }

  .nav-link:hover {
    background-color: #22426a;
  }

  .nav-link:hover .custom-icon {
    color: #fff;
  }
</style>
