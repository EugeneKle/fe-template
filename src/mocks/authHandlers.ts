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
      return HttpResponse.json({
        message: 'Success',
        user
      })
    }
  }),

  http.post('/logout', () => {
    return HttpResponse.json({
      message: 'Success'
    })
  })
]
