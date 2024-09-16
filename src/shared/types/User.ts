import type { UserRole } from '@/shared/types'

export interface User {
  id: string
  firstName: string
  secondName: string
  email: string
  phone: string
  roles: UserRole[]
  password: string
  token: string
}
