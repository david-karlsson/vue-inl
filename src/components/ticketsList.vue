<template>
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-md-end flex-wrap">
                <p class="card-title">Tickets</p>
                <div class="dropdown mb-3 mb-md-0">
                  <div class="btn btn-sm btn-outline-light dropdown-toggle text-dark" type="button" id="dropdownMenuDate1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                {{ticketYear[0].year}}                 

                    </div>
                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuDate1">
                    <a class="dropdown-item" :href="ticketYear[0].year" :value="2017">    {{ticketYear[0].year}}</a>
                    <a class="dropdown-item" :href="ticketYear[1].year" :value="2018">    {{ticketYear[1].year}}</a>
                    <a class="dropdown-item" :href="ticketYear[2].year" :value="2019">    {{ticketYear[2].year}}</a>
                   
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
                    
                 
    
                                       <Ticket :key="ticket.ticket" v-for="ticket of ticketsList" :ticket="ticket"/>
                    
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
        ticketsList: [],
        ticketYear:[],
      

    }   
      },

methods: {
      populateSelectBox: () => {
        fetch('https://inlupp-fa.azurewebsites.net/api/tickets').then(res => res.json())
        .then(data => { 
            
            for(let obj of data) {
              let element = document.createElement('option class="dropdown-item"');
              element.textContent = obj.year;
              element.value = obj.year;
              element.selected = true;
              document.getElementById('dropdownMenuDate1').appendChild(element);
            }
            
        });
      }
  },



    created(){
     fetch ('https://inlupp-fa.azurewebsites.net/api/tickets')
      .then(res => res.json())
      .then(data => {

        // this.ticketsList = data[0].tickets;
        this.ticketYear = data

        let i=0

          // while (i < this.length){
            this.ticketsList = data[i].tickets;
            // i++
          
            this.ticketsList = data[i].tickets;

        // } 
                  // let ticketsList = this.ticketsList
                //  let mappedTicket = ticketsList.map(tickets => tickets.name)
                //   this.ticket = mappedTicket;
                 
                //  for(let i=0; i < this.ticketsList.length; i++) {
                         
                //          this.ticketsList = data[i].tickets;

                //   }

          //  i++
        //  

        // for(let obj of data) {

          //  Year = data.tickets
        // }
        

      })
}
}
</script>
