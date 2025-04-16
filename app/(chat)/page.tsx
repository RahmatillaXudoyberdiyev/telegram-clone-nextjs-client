'use client'

import { UseCurrentContact } from '@/hooks/use-current'
import { emailSchema, messageSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import AddContact from './_components/add-contact'
import Chat from './_components/chat'
import ContactList from './_components/contact-list'
import TopChat from './_components/top-chat'

function HomePage() {
  const { currentContact } = UseCurrentContact()
  const router = useRouter()

  const contactForm = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: '',
    },
  })

  const messageForm = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      text: '',
      image: '',
    },
  })

  useEffect(() => {
    router.replace('/')
    console.log('router')
  }, [])

  const onCreateContact = (values: z.infer<typeof emailSchema>) => {
    console.log('values', values)
  }

  const onSendMessage = (values: z.infer<typeof messageSchema>) => {
    console.log(values)
  }

  return (
    <>
      <div className="w-80 h-screen border-r fixed inset-0 z-50 ">
        {/* <div className="w-full h-[95vh] flex justify-center items-center">
          <Loader2 size={50} className="animate-spin" />
        </div> */}

        <ContactList contacts={contacts} />
      </div>

      <div className="pl-80 w-full">
        {!currentContact?._id && (
          <AddContact
            contactForm={contactForm}
            onCreateContact={onCreateContact}
          />
        )}

        {currentContact?._id && (
          <div className="w-full relative">
            <TopChat />

            <Chat messageForm={messageForm} onSendMessage={onSendMessage} />
          </div>
        )}
      </div>
    </>
  )
}

const contacts = [
  {
    email: 'rahmatilla@gmail.com',
    _id: '1',
    avatar: 'https://picsum.photos/200/200',
    firstName: 'Rahmatilla',
    lastName: 'Xudoyberdiyev',
    bio: "I'm a student in the field of AI.",
  },
  {
    email: 'komil@gmail.com',
    _id: '2',
    avatar: 'https://picsum.photos/400/400',
    firstName: 'Komil',
    lastName: 'Akbarov',
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    email: 'asror@gmail.com',
    _id: '3',
    avatar: 'https://picsum.photos/600/600',
    firstName: 'Asror',
    lastName: 'Komilov',
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    email: 'jahongir@gmail.com',
    _id: '4',
    avatar: 'https://picsum.photos/800/800',
    firstName: 'Jahongir',
    lastName: 'Abdullayev',
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    email: 'ali@gmail.com',
    _id: '5',
    avatar: 'https://picsum.photos/1000/1000',
    firstName: 'Ali',
    lastName: 'Valiyev',
    bio: "Ali Valiyev - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
]

export default HomePage
