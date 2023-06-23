import {Mongodata} from "../utils/mongodata"

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).end()
    }
    const result = await Mongodata('insertOne', {
        document: {
            text: 'do your car',
            date: Date.now
        }
    })
    res.status(200).json(result)
}