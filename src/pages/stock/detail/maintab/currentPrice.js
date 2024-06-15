const APP_KEY = "PSFtwDMJ9zt5YJhtqwpL7MOKYaYwclKaSMLZ";
const APP_SECRET = "TX8lP5381dlQ/DfTFF/gj1VEr7KUkvBXi614ES/ffRzELJLzWkQT1vdILWHwScuUowmfVacdfzEvoq3QsiyPDLp8iwElirja12Ir91lzftG+agWBs8wb3QFAkWoe1ErAyre/G7zXNMJXao25J2fEAk3KqY64X6EnH7PBaw1BLuVbeJKCpiA=";
let ACCESS_TOKEN = "";
const URL_BASE = "https://openapi.koreainvestment.com:9443"; //실전투자
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
// Auth
async function auth() {
    const headers = {"content-type": "application/json"};
    const body = {
        "grant_type": "client_credentials",
        "appkey": APP_KEY,
        "appsecret": APP_SECRET
    };
    const PATH = "oauth2/tokenP";
    const URL = `${URL_BASE}/${PATH}`;
    
    const res = await fetch(`${proxyUrl+URL}`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    });
    
    const data = await res.json();
    ACCESS_TOKEN = data.access_token;
}
// 주식현재가 시세
async function getCurrentPrice(stockNo) {
    const PATH = "uapi/domestic-stock/v1/quotations/inquire-price";
    const URL = `${URL_BASE}/${PATH}`;

    const headers = {
        "Content-Type": "application/json",
        "authorization": `Bearer ${ACCESS_TOKEN}`,
        "appKey": APP_KEY,
        "appSecret": APP_SECRET,
        "tr_id": "FHKST01010100"
    };
    const params = new URLSearchParams({
        "fid_cond_mrkt_div_code": "J",
        "fid_input_iscd": stockNo
    });

    const res = await fetch(`${proxyUrl+URL}?${params.toString()}`, {
        method: 'GET',
        headers: headers
    });

    const data = await res.json();

    if (res.status === 200 && data.rt_cd === "0") {
        return data;
    } else if (res.status === 200 && data.msg_cd === "EGW00123") {
        await auth();
        return getCurrentPrice(stockNo);
    } else {
        console.log("Error Code: " + res.status + " | " + res.statusText);
        return null;
    }
}
// (async () => {
//     await auth();
//     const price = await getCurrentPrice("005930"); //현재 삼성전자로 하드코딩
//     console.log(price);
// })();

export { auth, getCurrentPrice };