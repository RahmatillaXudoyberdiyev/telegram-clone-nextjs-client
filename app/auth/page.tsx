import { ModeToggle } from '@/components/shared/mode-toggle'
import { FaTelegram } from 'react-icons/fa'
import StateAuth from './_component/state'
import Social from './_component/social'

const page = () => {
  return (
    <div className="container w-full mx-auto h-screen flex justify-center items-center flex-col space-y-4">
      <div className="max-w-[50%] flex flex-col justify-center items-center gap-2 text-center">
        <FaTelegram size={120} className="text-blue-500" />
        <div className='flex items-center gap-2'>
          <h1 className="text-4xl font-bold">Telegram</h1>
          <ModeToggle />
        </div>

        <StateAuth />
        <Social />
      </div>
    </div>
  )
}

export default page
