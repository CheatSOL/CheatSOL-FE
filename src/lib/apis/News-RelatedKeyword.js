import axios from "axios";

const BASE_URL = "/api/news";
const service = axios.create({
    baseURL: BASE_URL,
})
export async function relatedKeywordAPI({keyword, scoringKeyword, ex, startDate, endDate}) {
    try {
        const resp = await service.post("/",{
            keyword: keyword,
            scoringKeyword: scoringKeyword,
            ex: ex,
            startDate: startDate,
            endDate: endDate,
        })
    ;
    return resp.data;

    } catch(error) {        
    if (!keyword || !scoringKeyword || !startDate || !endDate) {
        return res.status(400).json({ error: 'keyword, scoringKeyword, startDate, and endDate are required' });
    }
    else {
        return false;
    }
    }
};
