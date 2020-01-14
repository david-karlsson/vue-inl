<template>
  <div id="app" >
    <div class="App container">
     


     <div class="container-scroller">
     <Nav/>
     <div class="horizontal-menu">
        <nav class="navbar top-navbar col-lg-12 col-12 p-0">
          <div class="container">
            <div class="navbar-menu-wrapper d-flex align-items-center">
              <ul class="navbar-nav navbar-nav-right">
                 <MessageDropdown/>
                 <NotificationDropdown/>
                 <UserDropdown/>

              </ul>
              <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="horizontal-menu-toggle">
                <span class="mdi mdi-menu"></span>
              </button>
            </div>
          </div>
        </nav>
        </div>
        
   
    <div class="container-fluid page-body-wrapper">
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-md-12 grid-margin">
               
               <WelcomeCard/>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-6 grid-margin">
              <div class="row">   
                <div class="col-md-6 grid-margin stretch-card">

                    <UsersChart/>
                 </div>   
                <div class="col-md-6 grid-margin stretch-card">

                  <ProjectsChart/>
                 </div>   

              </div>
              <div class="row">
                  <div class="col-md-12 stretch-card">

                <DownloadsChart/>
                  </div>   

              </div>
            </div>
             <div class="col-xl-6 grid-margin stretch-card">

           <TotalSalesChart/>
           </div>

          </div>

          <div class="row">
               <div class="col-md-3 grid-margin stretch-card">
                 <TotalSalesCard/>

                 </div>
            
             <div class="col-md-3 grid-margin stretch-card">

                 <TotalPurchasesCard/>
               </div>
              <div class="col-md-3 grid-margin stretch-card">

                 <TotalOrdersCard/>
               </div>
               <div class="col-md-3 grid-margin stretch-card">

                 <TotalGrowthCard/>
                </div>

          </div>
          <div class="row">
                
             <div class="col-xl-8 grid-margin stretch-card">

                <Tickets/>
              </div>
        <div class="col-xl-4 grid-margin stretch-card">

           <UpdatesFeed/>
              </div>

          </div>
          <div class="row">

               <div class="col-xl-3 grid-margin stretch-card">

                 <Distribution/>
                </div>
              
              <div class="col-xl-9 grid-margin stretch-card">

                  <SaleReport/>
                </div>

          </div>
          <div class="row">
              <div class="col-md-12">

                 <OpenInvocies/>
              </div>

                      </div>
        </div>
        <Footer/>
      </div>
    </div>
  </div>
    </div>
  </div>
</template>

<script>
import TotalSalesChart from './components/totalSalesChart.vue'
import MessageDropdown from './components/messageDropdown.vue';
import NotificationDropdown from './components/notificationDropdown.vue';
import UserDropdown from './components/userDropdown.vue';
import WelcomeCard from './components/welcomeCard.vue';
import UsersChart from './components/usersChart.vue';
import ProjectsChart from './components/projectsChart.vue';
import DownloadsChart from './components/downloadsChart.vue';
import TotalSalesCard from './components/totalSalesCard.vue';
import TotalPurchasesCard from './components/totalPurchasesCard.vue';
import TotalOrdersCard from './components/totalOrdersCard.vue';
import TotalGrowthCard from './components/totalGrowthCard.vue';
import Tickets from './components/tickets.vue';
import UpdatesFeed from './components/updatesFeed.vue';
import Distribution from './components/distribution.vue';
import SaleReport from './components/saleReport.vue';
import OpenInvocies from './components/openInvoices.vue';
import Footer from './components/footer.vue';
export default {
  name: 'app',
  components: {
    TotalSalesChart,
    WelcomeCard,
    MessageDropdown,
    NotificationDropdown,
    UserDropdown,
    UsersChart,
    ProjectsChart,
    DownloadsChart,
    TotalSalesCard,
    TotalPurchasesCard,
    TotalOrdersCard,
    TotalGrowthCard, 
    Tickets,
    UpdatesFeed,
    Distribution,
    SaleReport,
    OpenInvocies,
    Footer
    
  }
}
</script>


