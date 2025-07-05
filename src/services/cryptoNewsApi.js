import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders={
    'x-rapidapi-key': '4761971c19msh93b67f60309c048p1f81e1jsnce36c08774f5',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'X-BingApis-SDK': 'true'
}

const baseUrl='https://bing-news-search1.p.rapidapi.com/news/search';

const createRequest=(url)=>({url,headers:cryptoNewsHeaders})

export const cryptoNewsApi=createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
          }),
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi;