<template>
<div class="MessageDropdown">
   <li class="nav-item dropdown mr-1">
        <a class="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center" id="messageDropdown" href="#" data-toggle="dropdown">
          <i class="mdi mdi-email mx-0"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
          <p class="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
        
          
         <Message :key="message.message" v-for="message of messageDropdown" :message="message"/>

          
        </div>
      </li>
      </div>
</template>

<script>

import Message from'./message'

export default {
  name: 'MessageDropdown',
   
  components: {
    Message
  },
    data() {
    return {
        messageDropdown: []
    }   
      },

    created(){
     fetch ('https://inlupp-fa.azurewebsites.net/api/messages')
      .then(res => res.json())
      .then(data => {
         

        this.messageDropdown = data

      })

}
}

</script>
