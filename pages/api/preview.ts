import { NextApiRequest, NextApiResponse } from "next";
import accountApi from "../../api/accountApi";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const updatedAccount = await accountApi.updateTier();
    // ...
    res.setPreviewData('revalidate');
    // ...
    res.end('previewModa enable');
  } catch (err) {
    console.error(err);
  }
}
