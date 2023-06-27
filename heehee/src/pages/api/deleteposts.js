import {Mongodata} from "../utils/mongodata"

export default async function handler(req, res) {
    if(req.method !== 'DELETE'){
        res.status(405).end();
        return;
    }
    const result = await Mongodata('find', {})
    res.status(200).json(result)
}Â