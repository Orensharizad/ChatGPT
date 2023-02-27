'use client'

import { PaperAirplaneIcon } from "@heroicons/react/24/outline"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useSession } from "next-auth/react"
import { FormEvent, useState } from "react"
import { db } from "../firebase"
import { toast } from "react-hot-toast";

type Props = {
    chatId: string
}



function ChatInput({ chatId }: Props) {
    const { data: session } = useSession()
    const [prompt, setPropmt] = useState('')
    const model = 'text-davinchi-003'

    const sendMsg = async (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        if (!prompt) return
        const input = prompt.trim()
        setPropmt("")

        const msg: Msg = {
            text: input,
            createdAt: serverTimestamp(),
            user: {
                _id: session?.user?.email!,
                name: session?.user?.name!,
                avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`,
            }
        }

        await addDoc(collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'), msg)

        const notification = toast.loading('ChatGPT is thinking ...')

        await fetch('/api/askQuestion', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: input,
                chatId,
                model,
                session
            },
            )
        }).then(() => {
            toast.success('ChatGPT has responded', {
                id: notification
            })

        })



    }

    return (
        <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm ">
            <form onSubmit={sendMsg} className="p-5 space-x-5 flex">
                <input type="text"
                    className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
                    disabled={!session}
                    value={prompt}
                    onChange={(e) => setPropmt(e.target.value)}
                    placeholder="Type your message here..." />
                <button className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4
                py-4 rounded disabled:bg-gray-300 disabled:cursor-not-allowed" disabled={!session || !prompt}>
                    <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
                </button>
            </form>
            <div>

            </div>
        </div>
    )
}

export default ChatInput