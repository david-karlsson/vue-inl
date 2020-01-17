<template>
    <tr>
                      <td class="pl-0">
                        <div class=" icon-rounded-md" v-bind:class="statusColor(ticket.other)">
                          <h4 class="font-weight-medium">{{getInitials(ticket)}}</h4>
                        </div>
                      </td>
                      <td>
                        <p class="mb-0">{{ticket.name}}</p>
                        <p class="text-muted mb-0">Densar</p>
                      </td>
                      <td>
                        <p class="mb-0">{{getDate(ticket)}}</p>
                        <p class="text-muted mb-0">{{getTime(ticket)}}</p>
                      </td>
                      <td>
                        <p class="mb-0">{{ticket.project}}</p>
                        <p class="text-muted mb-0">{{ticket.other}}</p>
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
  methods: {
        getInitials: (ticket) => {
            let names = ticket.name.split(" ");
            let initials = names[0][0] + names[1][0]; 

            return initials;
        },

        getDate: (ticket) => {
            let dateTime = ticket.date.split(",");
            let date = dateTime[0];


            return date;

        },
          getTime: (ticket) => {
            let dateTime = ticket.date.split(",");
           
            let time = dateTime[1];


            return time;

        },
        statusColor: (status) => {
            switch(status) {
                case "Start session":
                    return "icon-rounded-success"
                    
                case "View on map":
                    return "icon-rounded-info"
                    
                case "End session":
                    return "icon-rounded-danger"
                  
                default:
                    return "icon-rounded-primary"
            } 
            
            }
        



  
}
}
</script>
