import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { messageSchema } from '@/lib/validation'
import emojies from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { Paperclip, Send, Smile } from 'lucide-react'
import { useTheme } from 'next-themes'
import { FC, useRef } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { z } from 'zod'

interface Props {
  onSendMessage: (values: z.infer<typeof messageSchema>) => void
  messageForm: UseFormReturn<z.infer<typeof messageSchema>>
}

const Chat: FC<Props> = ({ onSendMessage, messageForm }) => {
  const { resolvedTheme } = useTheme()
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleEmojiSelect = (emoji: string) => {
    const input = inputRef.current
    if (!input) return

    const text = messageForm.getValues('text')
    const start = input.selectionStart ?? 0
    const end = input.selectionEnd ?? 0

    const newText = text.slice(0, start) + emoji + text.slice(end)
    messageForm.setValue('text', newText)
    setTimeout(() => {
      input.focus()
      input.setSelectionRange(start + emoji.length, start + emoji.length)
    }, 0)
  }
  return (
    <div className="flex flex-col justify-end z-40 min-h-[90vh]">
      {/* Loading */}
      {/* <ChatLoading /> */}

      {/* Message */}
      {/* <MessageCard /> */}

      {/* Start Conversation */}
      <div className="w-full h-[80vh] flex items-center justify-center">
        <div
          className="text-[100px] cursor-pointer"
          onClick={() => onSendMessage({ text: '👋' })}
        >
          👋
        </div>
      </div>
      <Form {...messageForm}>
        <form
          onSubmit={messageForm.handleSubmit(onSendMessage)}
          className="w-full flex relative"
        >
          <Button size={'icon'} type="button" variant={'secondary'}>
            <Paperclip />
          </Button>
          <FormField
            control={messageForm.control}
            name="text"
            render={({ field }) => (
              <FormControl>
                <Input
                  className="bg-secondary border-1 border-1-muted-foreground border-r border-r-muted-foreground h-9 "
                  placeholder="Type a message"
                  value={field.value}
                  onBlur={() => field.onBlur()}
                  onChange={(e) => field.onChange(e.target.value)}
                  ref={inputRef}
                ></Input>
              </FormControl>
            )}
          />
          <Popover>
            <PopoverTrigger asChild>
              <Button size={'icon'} type="button" variant={'secondary'}>
                <Smile />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 border-none rounded-md absolute right-6 bottom-0">
              <Picker
                data={emojies}
                theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
                onEmojiSelect={(emoji: { native: string }) =>
                  handleEmojiSelect(emoji.native)
                }
              />
            </PopoverContent>
          </Popover>

          <Button size={'icon'} type="submit">
            <Send />
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default Chat
