<template>
   <li class="nav-item nav-profile dropdown mr-0 mr-sm-2">
          <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
            <img src="https://via.placeholder.com/40x40" alt="profile"/>
            <span id="nav-profile" class="nav-profile-name">{{userName}}</span>
          </a>
          <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
            <a class="dropdown-item">
              <i class="mdi mdi-settings text-primary"></i>
              Settings
            </a>
            <a class="dropdown-item">
              <i class="mdi mdi-logout text-primary"></i>
              Logout
            </a>
          </div>
        </li>

</template>

<script>
export default {
  name: 'UserDropdown',
 data() {
    return{
    userName: {}
    }
  
},
created(){
 fetch ('https://inlupp-fa.azurewebsites.net/api/users?firstname=David&lastname=Karlsson')
      .then(res => res.text())
      .then(data => {
          this.userName = data; 
      })

}
}
</script>
