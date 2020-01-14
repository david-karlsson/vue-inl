<template>
  
              <div class="card border-0 border-radius-2 bg-danger">
                <div class="card-body">
                  <div class="d-flex flex-md-column flex-xl-row flex-wrap  align-items-center justify-content-between">
                    <div class="icon-rounded-inverse-danger icon-rounded-lg">
                      <i class="mdi mdi-chart-donut-variant"></i>
                    </div>
                    <div class="text-white">
                      <p class="font-weight-medium mt-md-2 mt-xl-0 text-md-center text-xl-left">Total Orders</p>
                      <div class="d-flex flex-md-column flex-xl-row flex-wrap align-items-baseline align-items-md-center align-items-xl-baseline">
                        <h3 id="total-orders-card" class="mb-0 mb-md-1 mb-lg-0 mr-1">{{currency }}  {{amount}}</h3>
                        <small class="mb-0">This month</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

                

</template>

<script>
export default {
  name: 'TotalOrdersCard',
  data() {
    return{
    amount: {},
    currency:{}
    }
  
},
created(){
 fetch ('https://inlupp-fa.azurewebsites.net/api/total-orders')
      .then(res => res.json())
      .then(data => {
          this.amount = data.amount;
          this.currency = data.currency; 
      })

}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
