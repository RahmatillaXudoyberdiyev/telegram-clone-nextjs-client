import { z } from 'zod'

export const emailSchema = z.object({
  email: z
    .string()
    .email({ message: 'Invalid email address, please check and try again' }),
})

export const otpSchema = z
  .object({
    otp: z.string(),
  })
  .merge(emailSchema)

export const messageSchema = z.object({
  text: z.string().min(1, { message: 'Message cannot be empty' }),
  image: z.string().optional(),
})
