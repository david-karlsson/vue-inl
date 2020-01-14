<template>
  
     <div  class
     ="card bg-white">
          <div class
          ="card-body d-flex align-items-center justify-content-between">
            <h4 id="welcome-message" class
            ="mt-1 mb-1">Hi {{ userName }}, Welcome back!</h4>
          </div>
        </div>
                

</template>

<script>
export default {
  name: 'WelcomeCard',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
