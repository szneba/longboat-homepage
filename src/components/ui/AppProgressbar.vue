<template>
  <div class="progress-wrapper pt-1 pb-2">
    <span class="progress-label d-flex">Total Training Completed</span>
    <div class="progress">
      <div
          class="progress-bar"
          role="progressbar"
          style="width: 79%;"
          aria-valuenow="79"
          aria-valuemin="0"
          aria-valuemax="100"
      >
        79%
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppProgressbar'
}
</script>

<style>
.progress-wrapper {
  width: 360px;
}

.progress-label {
  color: #1eaae8;
  font-style: italic;
  font-size: 14px;
}

.progress,
.progress-bar {
  border-radius: 15px;
  height: 24px;
}

.progress-bar {
  background-color: #1eaae8;
  color: #fff;
  padding-right: 8px;
  text-align: right;
  font-style: italic;
}
</style>
