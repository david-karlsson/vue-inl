<template>
              <div class="card">
                <div class="card-body pb-0">
                  <p class="card-title mb-xl-0">Distribution</p>
                </div>
                <canvas id="distribution-chart"></canvas>
                <div class="card-body">
                  <div id="distribution-legend" class="distribution-chart-legend pt-4 pb-3"></div>
                  <button class="btn btn-outline-light text-dark d-block mx-auto mt-2">View More</button>
                </div>
              </div>
      
</template>

<script>
export default {
  name: 'Distribution',
  props: {
    msg: String
  }
}
</script>
