<template>
     <li>
                  <h6>{{update.title}}</h6>
                  <p class="mt-2">{{update.message}} </p>
                  <p class="text-muted mb-4">
                    <i class="mdi mdi-clock-outline"></i>
                    {{update.time}}
                  </p>
                </li>
</template>

<script>
export default {
  name: 'Update',
  props: {
    update: Object
  },

}
</script>
