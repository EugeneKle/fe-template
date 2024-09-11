import { ref } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

interface NavigationItem {
  icon: string
  title: string
  to: RouteLocationRaw
  tooltip?: string
}

export default function useNavigationItems() {
  const navigationItems = ref<NavigationItem[]>([
    {
      icon: 'mdi-account',
      title: 'Profile',
      to: { name: 'ProfilePage' },
      tooltip: 'View your profile'
    },
    {
      icon: 'mdi-cog',
      title: 'Settings',
      to: { name: 'SettingsPage' },
      tooltip: 'Adjust your preferences'
    }
  ])

  return { navigationItems }
}
