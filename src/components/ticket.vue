<template>
    <tr>
                      <td class="pl-0">
                        <div class="icon-rounded-warning icon-rounded-md">
                          <h4 class="font-weight-medium">VR</h4>
                        </div>
                      </td>
                      <td>
                        <p class="mb-0">Vilson Rowa</p>
                        <p class="text-muted mb-0">Densar</p>
                      </td>
                      <td>
                        <p class="mb-0">05 Nov 2018</p>
                        <p class="text-muted mb-0">02:30 am</p>
                      </td>
                      <td>
                        <p class="mb-0">1072 Orion Expansion</p>
                        <p class="text-muted mb-0">On Way</p>
                      </td>
                      <td class="pr-0">
                        <i class="mdi mdi-dots-horizontal icon-sm cursor-pointer"></i>
                      </td>
                    </tr>
</template>

<script>
export default {
  name: 'Ticket',
  props: {
    ticket: Object
  },

}
</script>
