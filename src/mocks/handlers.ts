import { HttpHandler } from 'msw'
import { userHandlers } from './userHandlers'
import { authHandlers } from './authHandlers'

export const handlers: HttpHandler[] = [...userHandlers, ...authHandlers]
