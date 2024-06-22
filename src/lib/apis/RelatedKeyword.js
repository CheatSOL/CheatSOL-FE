import axios from "axios";

const BASE_URL = "/api/keyword";
const service = axios.create({
    baseURL: BASE_URL,
})

//1. 연관키워드 가져오기
export async function relatedKeywordAPI({keyword, scoringKeyword, startDate, endDate}) {
    try {
        const resp = await service.post("/",{
            keyword: keyword,
            scoringKeyword: scoringKeyword,
            startDate: startDate,
            endDate: endDate,
        })
        console.log(resp)

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


//2. 검색어-연관키워드 관련 뉴스 가져오기
export async function relatedNewsAPI({ex, keyword, scoringKeyword, startDate, endDate}) {
    try {
        const resp = await service.post("/",{
            ex: ex,
            keyword: keyword,
            scoringKeyword: scoringKeyword,
            startDate: startDate,
            endDate: endDate,
        })
    ;
    return resp.data;

    } catch(error) {        
    if (!ex || !keyword || !scoringKeyword || !startDate || !endDate) {
        return res.status(400).json({ error: 'ex, keyword, scoringKeyword, startDate, and endDate are required' });
    }
    else {
        return false;
    }
    }
};