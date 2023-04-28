<template>
  <div>
    <SideBar />
    <div class="relative md:ml-64 bg-blueGray-100">
      <nav
        class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4"
      >
        <div
          class="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4"
        >
          <!-- Brand --><a
            class="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="javascript:void(0)"
          >
            Dashboard
          </a>
        </div>
      </nav>

      <div class="relative bg-emerald-600 md:pt-32 pb-20 pt-12">
        <div class="relative px-4 md:px-10">
          <div class="flex flex-wrap">
            <!-- Card stats -->
            <ChartStats />
            <ChartStats />
            <ChartStats />
            <ChartStats />
          </div>
        </div>
      </div>
      <!--      <admin-navbar />-->
      <!--      <header-stats />-->

      <main class="relative px-4 md:px-10">
        <router-view />
        <!--        <footer-admin />-->
      </main>
    </div>
  </div>
</template>
<script>
//import AdminNavbar from '@/components/Navbars/AdminNavbar.vue'
//import Sidebar from '@/components/Sidebar/Sidebar.vue'
//import HeaderStats from '@/components/Headers/HeaderStats.vue'
//import FooterAdmin from '@/components/Footers/FooterAdmin.vue'
//import ChartList from '@/components/charts/ChartList.vue'
//import HelloWorld from '@/components/HelloWorld.vue'

import ChartStats from '@/components/charts/ChartStats.vue'
import SideBar from '@/components/sidebar/SideBar.vue'
export default {
  name: 'admin-layout',
  components: {
    ChartStats,
    SideBar
    //HelloWorld,
    //ChartList
    //AdminNavbar,
    //Sidebar,
    //HeaderStats,
    //FooterAdmin
  }
}
</script>
