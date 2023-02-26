'use client'

import { PaperAirplaneIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

type Props = {
    chatId: string
}
function ChatInput({ chatId }: Props) {
    const [prompt, setPropmt] = useState('')

    return (
        <div>
            <form className="p-5 space-x-5 flex-1">
                <input type="text"
                    value={prompt}
                    onChange={(e) => setPropmt(e.target.value)}
                    placeholder="Type your message here..." />
                <button>
                    <PaperAirplaneIcon className="h-4 w-4 ~rotate-45" />
                </button>
            </form>
            <div>

            </div>
        </div>
    )
}

export default ChatInput