<template>
  <ul class="navbar-nav ms-auto">
    <li
        class="nav-item"
        :class="[item.items && item.items.length ? 'dropdown' : '', item.isSpacer ? 'nav-spacer d-flex align-items-center ms-3' : '']"
        v-for="item in items" :key="item.id"
    >
      <span v-if="item.isSpacer" class="d-flex"></span>

      <a v-if="!item.items && !item.isSpacer" class="nav-link" href="#">
        <font-awesome-icon :icon="['fas', item.icon]" class="custom-icon" />
        {{item.label}}
      </a>

      <a v-if="item.items"
         class="nav-link dropdown-toggle"
         :class="{ 'ps-5': item.hasDivider }"
         v-on:click="toggleOpen"
         href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
      >
        {{item.label}}
        <div class="dropdown-menu" :class="{ 'show' : showDropdown }" aria-labelledby="navbarDropdown" v-if="item.items && item.items.length">
          <a class="dropdown-item" href="#" v-for="item in item.items" :key="item.id">{{item.label}}</a>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NavigationItems',
  data() {
    return {
      showDropdown: false,
      items: [
        {
          id: 1,
          label:'Help',
          icon:'question-circle'
        },
        {
          id: 2,
          label:'Contacts',
          icon:'users'
        },
        {
          id: 'spacer',
          isSpacer: true
        },
        {
          id: 3,
          label:'Bob Cole',
          hasDivider: true,
          items:[
            {
              id: 4,
              label:'Profile',
              icon:'pi pi-fw pi-user-plus'
            },
            {
              id: 5,
              label:'Settings',
              icon:'pi pi-fw pi-user-minus',
            },
            {
              id: 6,
              label:'Logout',
              icon:'pi pi-fw pi-users'
            }
          ]
        }
      ]
    }
  },
  methods: {
    toggleOpen() {
      return this.showDropdown = !this.showDropdown;
    }
  }
}
</script>

<style>
.nav-spacer span {
  height: 30px;
  width: 1px;
  background-color: #d6d6d6;
  margin-right: 60px;
}
</style>
