<template>
  <div class="breadcrumbs-wrapper">
    <div class="container d-flex align-items-center justify-content-center">
      <div class="breadcrumbs-component">
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <a href="#">
                <font-awesome-icon icon="graduation-cap" class="custom-icon" />
              </a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">My Training</li>
          </ol>
        </nav>
      </div>
      <div class="ms-auto">
        <AppProgressbar />
      </div>
    </div>
  </div>
</template>

<script>
import AppProgressbar from '@/components/ui/AppProgressbar.vue';

export default {
  name: 'AppBreadcrumbs',
  components: {
    AppProgressbar
  }
}
</script>

<style scoped>
.breadcrumbs-wrapper {
  background-color: #fff;
  border-bottom: 1px solid #d6d6d6;
}

 .breadcrumb-item {
   color: #86c720;
   font-size: 18px;
 }

 .custom-icon {
   color: #717171;
 }
</style>
