import fetch from 'node-fetch'
import getCookies from './getCookies'

export const getIndex = async (indexKey: string) => {
    const cookies = await getCookies()
    const init = {
        headers: {
            'Host': 'www.nseindia.com',
            'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:77.0) Gecko/20100101 Firefox/77.0',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
            'Accept-Encoding': 'gzip, deflate, br',
            'DNT': '1',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
            'Cookie': cookies || ''
        },
    };

    const url = 'https://www.nseindia.com/api/equity-stockIndices?index=';
    const data = await fetch(`${url}${encodeURI(indexKey)}`, init).then(res => res.json())
    return data
}

export const getIndexList = async () => {
    const cookies = await getCookies()
    const init = {
        headers: {
            'Host': 'www.nseindia.com',
            'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:77.0) Gecko/20100101 Firefox/77.0',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
            'Accept-Encoding': 'gzip, deflate, br',
            'DNT': '1',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
            'Cookie': cookies || ''
        },
    }
    const url = 'https://www.nseindia.com/api/allIndices'
    const data = await fetch(`${url}`, init).then(res => res.json())
    return data
}