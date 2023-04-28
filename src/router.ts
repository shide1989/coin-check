import type { RouteRecordRaw } from 'vue-router'
import AdminLayout from '@/layouts/AdminLayout.vue'
import DashboardView from '@/views/DashboardView.vue'
// layouts
// import Auth from '@/layouts/Auth.vue'
// views for Admin layout
// import Dashboard from '@/views/admin/Dashboard.vue'
import SettingsView from '@/views/SettingsView.vue'
// import Tables from '@/views/admin/Tables.vue'
// import Maps from '@/views/admin/Maps.vue'
// views for Auth layout
// import Login from '@/views/auth/Login.vue'
// import Register from '@/views/auth/Register.vue'
// views without layouts
// import Landing from '@/views/Landing.vue'
// import Profile from '@/views/Profile.vue'

// routes
export const routes: RouteRecordRaw[] = [
  /*{
      path: '/admin',
      redirect: '/admin/dashboard',
      component: AdminLayout,
      children: [
        {
          path: '/admin/dashboard',
          component: Dashboard
        }
        // {
        //   path: '/admin/settings',
        //   component: Settings
        // },
        // {
        //   path: '/admin/tables',
        //   component: Tables
        // },
        // {
        //   path: '/admin/maps',
        //   component: Maps
        // }
      ]
    },*/
  {
    path: '/',
    component: AdminLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: DashboardView
      },
      {
        path: '/settings',
        component: SettingsView
      }
    ]
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]
