import ContactList from './_components/contact-list'

function HomePage() {
  return (
    <>
      <div className="w-80 h-screen border-r fixed inset-0 z-50 ">
        {/* <div className="w-full h-[95vh] flex justify-center items-center">
          <Loader2 size={50} className="animate-spin" />
        </div> */}

        <ContactList  contacts={contacts} />
      </div>
    </>
  )
}

const contacts = [
  {
    email: 'rahmatilla@gmail.com',
    _id: '1',
    avatar: "https://picsum.photos/200/200",
  },
  {
    email: 'komil@gmail.com',
    _id: '2',
    avatar: "https://picsum.photos/400/400",

  },
  {
    email: 'asror@gmail.com',
    _id: '3',
    avatar: "https://picsum.photos/600/600",
  },
  {
    email: 'jahongir@gmail.com',
    _id: '4',
    avatar: "https://picsum.photos/800/800",
  },
  {
    email: 'ali@gmail.com',
    _id: '5',
    avatar: "https://picsum.photos/1000/1000",
  },
]
export default HomePage
