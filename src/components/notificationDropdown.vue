<template>
   <li class="nav-item dropdown mr-4">
            <a class="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center" id="notificationDropdown" href="#" data-toggle="dropdown">
              <i class="mdi mdi-bell mx-0"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
              <p class="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
            
                       <Notification :key="notification.notification" v-for="notification of notificationDropdown" :notification="notification"/>

            </div>
          </li>
</template>

<script>
import Notification from'./notification';

export default {
  name: 'NotificationDropdown',
  components: {
    Notification
  },

      data() {
    return {
        notificationDropdown: []
    }   
      },

    
    created(){
     fetch ('https://inlupp-fa.azurewebsites.net/api/notifications')
      .then(res => res.json())
      .then(data => {
         

        this.notificationDropdown = data

      })

}
}
</script>
