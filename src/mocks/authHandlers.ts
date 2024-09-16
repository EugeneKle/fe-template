import { users } from './userHandlers'
import { http, HttpResponse } from 'msw'

interface LoginBodyType {
  email: string
  password: string
}

export const authHandlers = [
  http.post<never, LoginBodyType, never>('/login', async ({ request }) => {
    const { email, password } = await request.json()

    const user = Array.from(users.values()).find((user) => user.email === email)

    if (user && user.password === password) {
      return HttpResponse.json(user)
    }
  }),

  http.post('/relogin', async () => {
    const token = localStorage.getItem('token')

    if (token) {
      const user = Array.from(users.values()).find((user) => user.token === token)

      if (user) {
        return HttpResponse.json(user)
      }
    }
  }),

  http.post('/logout', () => new HttpResponse(null, { status: 204 }))
]
