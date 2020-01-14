<template>
              <div class="card">
                <div class="row">
                  <div class="col-md-7 col-lg-6 col-xl-7">
                    <div class="card-body h-100 d-flex flex-column">
                      <p class="card-title">Sale report</p>
                      <p class="text-muted mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id beatae sint dolorum quod ducimus quisquam ut minima atque quaerat.</p>
                      <canvas id="sale-report-chart"></canvas>
                    </div>
                  </div>
                  <div class="col-md-5 col-lg-6 col-xl-5">
                    <div class="card-body">
                      <p class="card-title">Sales report overview</p>
                      <p class="pb-2 text-muted">Sale information on advertising, exhibitions, market research, online media, customer desires, PR and much more</p>
                      <div class="d-flex flex-wrap justify-content-start mt-3 mr-4">
                        <div class="mr-3">
                          <p class="mb-0">Downloads</p>
                          <h4>{{downloads}}</h4>
                        </div>
                        <div class="mr-3">
                          <p class="mb-0">Purchases</p>
                          <h4>{{purchases}}</h4>
                        </div>
                        <div class="mr-3">
                          <p class="mb-0">Users</p>
                          <h4>{{users}}</h4>
                        </div>
                      </div>
                      <div class="d-flex mb-3">
                        <i class="mdi mdi-arrow-expand-up mb-0 text-success mr-2 mt-1"></i>
                        <p class="mb-0 text-dark">{{growth}}</p>
                      </div>
                      <div class="d-flex flex-wrap mb-5">
                        <button class="btn btn-info mt-3 mr-2">Update</button>
                        <button class="btn btn-outline-light mt-3 text-dark">More</button>
                      </div>                  
                    </div>
                  </div>
                </div>
              </div>
</template>

<script>
export default {
  name: 'SaleReport',
  data(){
        return{
          downloads:{},
          purchases:{},
          users:{},
          growth:{}

        }
  },
created(){
 fetch ('https://inlupp-fa.azurewebsites.net/api/sales-report')
      .then(res => res.json())
      .then(data => {
          this.downloads = data.downloads;
          this.purchases = data.purchases; 
          this.users = data.users; 
          this.growth = data.growth; 


      })
}
}
</script>
