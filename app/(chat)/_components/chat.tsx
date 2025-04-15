import ChatLoading from "@/components/loadings/chat.loading"
import MessageCard from "@/components/cards/message.card"

function Chat() {
  return <div className="flex flex-col justify-end z-40 min-h-[90vh]">
    {/* Loading */}
    <ChatLoading/>

    {/* Message */}
  <MessageCard />



  </div>
}

export default Chat
