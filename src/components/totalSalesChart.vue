<template>

   <div class="card">
        <div class="card-body">
            <p class="card-title">Total Sales</p>
            <p class="text-muted">Audience to which the users belonged while on the current date Audience to which the users belonged while on the current date Audience to which the users belonged while on the current date </p>
            <div class="d-flex flex-wrap mb-4 mt-4 pb-4">
            <div class="mr-4 mr-md-5">
                <p class="mb-0">Revenue</p>
                <h4>{{ results.revenue }}</h4>
            </div>
            <div class="mr-4 mr-md-5">
                <p class="mb-0">Returns</p>
                <h4>{{ results.returns }}</h4>
            </div>
            <div class="mr-4 mr-md-5">
                <p class="mb-0">Queries</p>
                <h4>{{ results.queries }}</h4>
            </div>
            <div class="mr-4 mr-md-5">
                <p class="mb-0">Invoices</p>
                <h4>{{ results.invoices}}</h4>
            </div>
            </div>
            <canvas id="total-sales-chart"></canvas>
        </div>
    </div>

</template>

<script>
export default {
    name:"TotalSalesChart",
    data(){
        return{
           results:{}
        }
    },
    created() {

fetch('https://inlupp-fa.azurewebsites.net/api/total-sales-chart')
.then(res => res.json())
.then(data =>{


    this.results = data;




})

    }
}
</script>

<style>

</style>