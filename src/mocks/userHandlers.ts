import type { User } from '@/shared/types'
import { http, HttpResponse } from 'msw'

const admin: User = {
  id: '1',
  firstName: 'John',
  secondName: 'Doe',
  email: 'john.doe@example.com',
  phone: '+420 775 236 273',
  roles: ['Admin'],
  password: 'admin1234'
}

const user: User = {
  id: '2',
  firstName: 'Jane',
  secondName: 'Smith',
  email: 'jane.smith@example.com',
  phone: '+420 773 242 323',
  roles: ['User'],
  password: 'user1234'
}

export const users = new Map<User['id'], User>([
  [admin.id, admin],
  [user.id, user]
])

export const userHandlers = [
  http.get('/users', () => HttpResponse.json(Array.from(users.values())))
]
