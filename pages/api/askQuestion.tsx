// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import query from '../../lib/queryApi'

import admin from "firebase-admin"
import { adminDb } from '../../firebaseAdmin'

type Data = {
    answer: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { prompt, chatId, model, session } = req.body
    if (!prompt) {
        res.status(400).json({ answer: 'Please procide a valid chat ID' })
        return
    }
    if (!chatId) {
        res.status(400).json({ answer: 'Please procide a valid chatID!' })
        return
    }

    const response = await query(prompt, chatId, model)

    const msg: Msg = {
        text: response || "ChatGPT was unble to find an answer for that !",
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: "ChatGPT",
            name: "ChatGPT",
            avatar: "https://links.papareact.com/89k"
        }
    }

    await adminDb
        .collection('users').
        doc(session)
        .collection('chats')
        .doc(chatId)
        .collection('messages')
        .add(msg)

        
    res.status(200).json({ answer: msg.text })
}
