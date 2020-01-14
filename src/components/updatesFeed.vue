<template>
          <div class="card">
            <div class="card-body">
              <p class="card-title">Updates</p>
              <ul class="bullet-line-list mt-4">
                
                                       <Update :key="update.update" v-for="update of updatesFeed" :update="update"/>

              </ul>
            </div>
          </div>
</template>

<script>

import Update from "./update";

export default {
  name: 'UpdatesFeed',
  components: {
    Update
  },
    data() {
    return {
        updatesFeed: []
    }   
      },

    created(){
     fetch ('https://inlupp-fa.azurewebsites.net/api/updates')
      .then(res => res.json())
      .then(data => {
         

        this.updatesFeed = data

      })
}
}
</script>
