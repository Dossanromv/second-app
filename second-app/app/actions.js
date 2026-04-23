'use server'
import { prisma } from '@/lib/prisma'

export async function registerUser(email, name) {
  try {
    const user = await prisma.user.create({
      data: { email, name }
    })
    return { success: true, user }
  } catch (e) {
    return { success: false, error: e.message }
  }
}