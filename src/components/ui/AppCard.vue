<template>
  <div class="training-item col-xs-12 col-sm-6 col-md-4 col-xl-3">
    <div class="card">
      <div
          class="card-header d-flex justify-content-center align-items-center"
          :style="'background-image: url(' + require(`@/assets/tile${course.id}.png`) + ')'"
      >
        <div class="overlay"></div>
        <div class="play-button d-flex justify-content-center">
          <font-awesome-icon icon="play" class="custom-icon" />
        </div>
        <div v-if="course.isMandatory" class="status w-100">MANDATORY</div>
      </div>
      <div class="card-body">
        <div class="card-title d-flex justify-content-center">
          {{course.name}}
        </div>
        <div class="card-info">
          <div class="time d-flex justify-content-center">
            <div class="col-6 duration">
              <span>DURATION</span>
              <div>{{course.duration}} mins</div>
            </div>
            <div class="col-6 due-date">
              <span>DUE DATE</span>
              <div :class="{ 'warning-date' : course.progress < 100 }">{{course.dueDate}}</div>
            </div>
          </div>
          <div class="progress-graph pt-3 pb-3" :class="course.progress < 20 ? 'in-progress' : 'completed'">
            <radial-progress-bar
                :startColor="progressColor"
                :stopColor="progressColor"
                :innerStrokeColor="innerStrokeColor"
                :diameter="60"
                :strokeWidth="3"
                :innerStrokeWidth="3"
                :completed-steps="course.progress"
                :total-steps="100">
              <p>{{course.progress}}%</p>
            </radial-progress-bar>
          </div>
          <button class="btn btn-success w-100" :class="{ 'disabled': course.progress < 100 }">
            Download Certificate
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress';

export default {
  name: 'AppCard',
  props: ['course'],
  components: {
    RadialProgressBar
  },

  data() {
    return {
      progressColor: '#86c720',
      innerStrokeColor: '#ebe7e4'
    }
  }
}
</script>

<style scoped>
.card {
  border: none;
  border-radius: 3px;
}

.card-body {
  font-size: 14px;
  text-align: center;
  font-weight: 600;
  color: #717171;
}

.card-title {
  color: #1eaae8;
  min-height: 50px;
  align-items: center;
}

.card-header {
  position: relative;
  cursor: pointer;
  border: none;
  height: 160px;
  background-size: cover;
}

.card-header:hover .play-button {
  background-color: rgba(0, 0, 0, .6);
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .3);
  z-index: 1;
}

.time {
  font-size: 12px;
}

.duration {
  border-right: 1px solid #d6d6d6;
}

.btn.btn-success {
  background-color: #86c720;
  border-color: #86c720;
  border-radius: 20px;
  font-size: 14px;
  transition: background-color .3s ease-in;
}

.btn.btn-success.disabled {
  background-color: #d6d6d6;
  border-color: #d6d6d6;
}

.btn.btn-success:hover {
  background-color: #79B31A;
}

.play-button {
  background-color: rgba(0, 0, 0, .3);
  border: 3px solid #fff;
  border-radius: 100%;
  align-items: center;
  height: 50px;
  width: 50px;
  transition: background-color .3s ease-in;
  z-index: 2;
}

.custom-icon {
  color: #fff;
}

.status {
  color: #fff;
  background-color: #1eaae8;
  position: absolute;
  bottom: 0;
  z-index: 2;
}

.warning-date {
  color: #ca1010;
}

.radial-progress-container {
  margin: auto;
}

.radial-progress-inner p {
  margin: 0;
  font-size: 12px;
}
</style>
