import Chat from "../../../components/Chat"
import ChatInput from "../../../components/ChatInput"

type Props = {
  params: {
    id: string
  }
}

function ChatPage({ params: { id } }: Props) {
  return (
    <div className="flex flex-col overflow-hidden h-screen">
      {/*Chat */}
      <Chat chatId={id} />
      <ChatInput chatId={id} />

      {/*ChatInput */}
    </div>
  )
}

export default ChatPage