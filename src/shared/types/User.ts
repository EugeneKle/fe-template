import type { UserRole } from '@/shared/types'

export interface User {
  firstName: string
  secondName: string
  email: string
  phone: string
  roles: UserRole[]
}
