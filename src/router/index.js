import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/auth/Login'
import Auth from '@/views/Auth'
import Account from '@/views/Account'
import Dashboard from '@/views/accounts/Dashboard'
import Profile from '@/views/accounts/Profile'
import ClassRoom from '@/views/accounts/ClassRoom'
import CourseVideos from '@/views/accounts/CourseVideos'
import Documents from '@/views/accounts/Documents'
import Notifications from '@/views/accounts/Notifications'
import Classwork from '@/views/accounts/Classwork'
import Students from '@/views/accounts/Students'
import Lecturers from '@/views/accounts/Lecturers'
import Staffs from '@/views/accounts/Staffs'
import Activity from '@/views/accounts/Activity'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    components: {
      default: Auth,
      auth: Login
    },
    name: 'Login',
		meta: { 
			guestOnly: true,
		}
  },
  
  {
    path: '/dashboard',
    components: {
      default: Account,
      auth: Dashboard
    },
    name: 'Dashboard',
    meta: {
      authOnly: true,
    }
  },

  {
    path: '/profile',
    components: {
      default: Account,
      auth: Profile
    },
    name: 'Profile',
    meta: {
      authOnly: true,
    }
  },

  {
    path: '/course/videos',
    components: {
      default: Account,
      auth: CourseVideos
    },
    name: 'CourseVideos',
    meta: {
      authOnly: true,
    }
  },

  {
    path: '/course/documents',
    components: {
      default: Account,
      auth: Documents
    },
    name: 'Documents',
    meta: {
      authOnly: true,
    }
  },

  {
    path: '/classroom',
    components: {
      default: Account,
      auth: ClassRoom
    },
    name: 'ClassRoom',
    meta: {
      authOnly: true,
    }
  },

  {
    path: '/notifications',
    components: {
      default: Account,
      auth: Notifications
    },
    name: 'Notifications',
    meta: {
      authOnly: true,
    }
  },

  {
    path: '/classwork',
    components: {
      default: Account,
      auth: Classwork
    },
    name: 'Classwork',
    meta: {
      authOnly: true,
    }
  },

  {
    path: '/students',
    components: {
      default: Account,
      auth: Students
    },
    name: 'Students',
    meta: {
      authOnly: true,
    }
  },

  {
    path: '/lecturers',
    components: {
      default: Account,
      auth: Lecturers
    },
    name: 'Lecturers',
    meta: {
      authOnly: true,
    }
  },

  {
    path: '/staffs',
    components: {
      default: Account,
      auth: Staffs
    },
    name: 'Staffs',
    meta: {
      authOnly: true,
    }
  },

  {
    path: '/activity',
    components: {
      default: Account,
      auth: Activity
    },
    name: 'Activity',
    meta: {
      authOnly: true,
    }
  },

  {
		path: '/oops/error',
		component: () => import('@/views/error/Err_404'),
		name: 'Err_404',
	},

  { 
    path: '*',
    redirect: '/oops/error',
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  base: process.env.BASE_URL
})

export default router
