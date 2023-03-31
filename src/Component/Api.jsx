import axios from "axios";

const key = '5001daf8b1f94269afc5c4f5fec435ea'
const apiKey = `https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=${key}`;

export const getNews = async () => {
    const news = await axios.get(apiKey)
    return news.data.articles
}


export const searchNews = async (input) => {
    const search = await axios.get(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`)
    return search.data
}