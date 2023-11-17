import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { query } = req;
    console.log(query.id)
    const response = await axios.get(`${process.env.API_URL}${query.id}`)
    const data = await response.data;    
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: 'Error fetching data'
    })
  }
}