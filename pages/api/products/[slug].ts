import { db } from "@/database";
import { IProduct } from "@/interfaces";
import { Product } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = { name: string } | IProduct;

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "GET":
      return getProductBySlug(req, res);
    default:
      return res.status(400).json({ name: "Baq request" });
  }
}

async function getProductBySlug(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await db.connect();
  const { slug } = req.query;
  const product = await Product.findOne({ slug }).lean();

  await db.disconnect();

  if(!product) {
    return res.status(400).json({
      name:'Producto no encotrado'
    })
  }

  return res.json(product)
}
