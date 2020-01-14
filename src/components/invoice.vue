<template>
       <tr>
                    <td>{{invoice.invoice}}</td>
                    <td>{{invoice.customer}}</td>
                    <td>{{invoice.country}}</td>
                    <td class="font-weight-bold">{{invoice.currency}}{{invoice.bestPrice}}</td>
                    <td>{{invoice.currency}}{{invoice.purchasedPrice}}</td>
                    <td><div class="badge badge-fw" v-bind:class="statusColor(invoice.status)">{{invoice.status}}</div></td>
                  </tr>
</template>

<script>
export default {
  name: 'Invoice',
  props: {
    invoice: Object
  },


 methods: {
        statusColor: (status) => {
            switch(status) {
                case "Progress":
                    return "badge-success"
                    
                case "Open":
                    return "badge-warning"
                    
                case "On hold":
                    return "badge-danger"
                  
                default:
                    return "badge-secondary"
            } 
        }
    }


  }
</script>
