import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { UseCurrentContact } from '@/hooks/use-current'
import { Settings2 } from 'lucide-react'
import Image from 'next/image'



function TopChat() {
  const { currentContact } = UseCurrentContact()
  return (
    <div className="w-full flex items-center justify-between sticky top-0 z-50 h-[8vh] p-2 border-b bg-background">
      <div className="flex items-center">
        <Avatar className="z-40">
          <AvatarImage
            src={currentContact?.avatar}
            alt={currentContact?.email}
            className="object-cover"
          />
          <AvatarFallback className="uppercase">
            {currentContact?.email[0]}
          </AvatarFallback>
        </Avatar>
        <div className="ml-2">
          <h2 className="font-medium text-sm">{currentContact?.email}</h2>
          {/* <div className="text-xs flex items-center gap-1 text-muted-foreground">
            <p className="text-secondary-foreground animate-pulse line-clamp-1">
              Typing
            </p>
            <div className="size-1 bg-white rounded-full animate-bounce [animation-delay: -0.3s] mt-1.5"></div>
            <div className="size-1 bg-white rounded-full animate-bounce [animation-delay: -0.10s] mt-1.5"></div>
            <div className="size-1 bg-white rounded-full animate-bounce [animation-delay: -0.15s] mt-1.5"></div>
          </div> */}
          <p className="text-xs">
            {/* <span className="text-green-500">●</span> Online   */}
            <span className="text-muted-foreground">● </span> Last seen recently
          </p>
        </div>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button size={'icon'} variant={'secondary'}>
            <Settings2 />
          </Button>
        </SheetTrigger>
        <SheetContent className="overflow-y-scroll">
          <SheetHeader>
            <SheetTitle />
          </SheetHeader>
          <div className="mx-auto w-1/2 h-48 relative ">
            <Avatar className="w-50 h-50 rounded-full">
              <AvatarImage
                src={currentContact?.avatar}
                alt={currentContact?.email}
                className="object-cover"
              />
              <AvatarFallback className="text-6xl uppercase">
                {currentContact?.email[0]}
              </AvatarFallback>
            </Avatar>
          </div>
          <Separator className="my-2" />
          <h1 className="text-center capitalize text-2xl">
            {currentContact?.email}
          </h1>

          <div className="flex flex-col space-y-1">
            {currentContact?.firstName && (
              <div className="flex items-center gap-1 mt-4">
                <p>First Name: </p>
                <p className="text-muted-foreground">
                  {currentContact?.firstName}
                </p>
              </div>
            )}
            {currentContact?.lastName && (
              <div className="flex items-center gap-1 mt-4">
                <p>First Name: </p>
                <p className="text-muted-foreground">
                  {currentContact?.lastName}
                </p>
              </div>
            )}
            {currentContact?.bio && (
              <div className="flex gap-1 mt-4 ">
                <p>About: </p>
                <p className="text-muted-foreground">{currentContact?.bio}</p>
              </div>
            )}

            <Separator className="my-2" />

            <h2 className="text-xl">Image</h2>
            <div className="flex flex-col space-y-2">
              <div className="w-full h-36 relative">
                <Image
                  src={'https://picsum.photos/3000/1000'}
                  alt="Image"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default TopChat
