import { NextApiRequest, NextApiResponse } from "next";


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({
        data: [
            {
              quranText: "الرَّحْمٰنِ الرَّحِيْمِۙ ٣",
              quranSurah: "",
              quranAyat: 3,
              quranMeaning: "Yang Maha Pengasih lagi Maha Penyayang,",
              quranMeaningRef: "",
              counter: 0,
            },
            {
              quranText: "الرَّحْمٰنِ الرَّحِيْمِۙ ٣",
              quranSurah: "",
              quranAyat: 3,
              quranMeaning: "Yang Maha Pengasih lagi Maha Penyayang,",
              quranMeaningRef: "",
              counter: 0,
            },
          ]
    })
}