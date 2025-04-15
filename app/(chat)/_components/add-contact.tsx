import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'


import { emailSchema } from '@/lib/validation'
import { FC } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { FaTelegram } from 'react-icons/fa'
import { z } from 'zod'

interface Props {
  contactForm: UseFormReturn<z.infer<typeof emailSchema>>
  onCreateContact: (values: z.infer<typeof emailSchema>) => void
}

const AddContact: FC<Props> = ({ contactForm, onCreateContact }) => {
  return (
    <div className="h-screen w-full flex z-40 relative">
      <div className="flex justify-center items-center w-full z-50">
        <div className="flex flex-col items-center gap-4">
          <FaTelegram size={120} className="dark:text-blue-400 text-blue-500" />
          <h1 className="text-3xl font-bold">Add contacts to start chatting</h1>
          <Form {...contactForm}>
            <form
              onSubmit={contactForm.handleSubmit(onCreateContact)}
              className="space-y-8 w-full"
            >
              <FormField
                control={contactForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="rahmatilla@gmail.com "
                        className="h-10 bg-secondary"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
              <Button type="submit" className="bg-blue-500 w-full" size={'lg'}>
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default AddContact
