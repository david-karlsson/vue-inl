<template>
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-md-end flex-wrap">
                <p class="card-title">Tickets</p>
                <div class="dropdown mb-3 mb-md-0">
                  <button class="btn btn-sm btn-outline-light dropdown-toggle text-dark" type="button" id="dropdownMenuDate1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    2018
                  </button>
                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuDate1">
                    <a class="dropdown-item" href="#">2015</a>
                    <a class="dropdown-item" href="#">2016</a>
                    <a class="dropdown-item" href="#">2017</a>
                    <a class="dropdown-item" href="#">2018</a>
                  </div>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table tickets-table mb-2">
                  <thead>
                    <th class="text-muted pl-0">
                      Name
                    </th>
                    <th></th>
                    <th class="text-muted">
                      Date
                    </th>
                    <th class="text-muted">
                      Projects
                    </th>
                  </thead>
                  <tbody>
                    
                 
    
                     <Ticket/>
                    
                  </tbody>
                </table>
              </div>
            </div>  
          </div>
</template>

<script>

import Ticket from "./ticket";
export default {
  name: 'TicketsList',
  components: {
    Ticket
  },
    data() {
    return {
        ticketsList: []
    }   
      },

    created(){
     fetch ('https://inlupp-fa.azurewebsites.net/api/tickets')
      .then(res => res.json())
      .then(data => {
         

        this.ticketsList = data

      })
}
}
</script>
