import { DocumentData } from "firebase/firestore"


type Props = {
    msg: DocumentData
}

function Message({ msg }: Props) {

    const isChatGPT = msg.user.name === 'ChatGPT'



    return (<div className={`py-5 text-white ${isChatGPT && 'bg-[#434654]'}`}>

        <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
            <img src={msg.user.avatar} className="h-8 w-8" alt="" />
            <p className="pt-1 text-sm">
                {msg.text}
            </p>
        </div>

    </div>
    )
}

export default Message