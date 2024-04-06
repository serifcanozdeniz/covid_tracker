import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { headers } from '../constants/index';


// api'lardan bayrak ve ülke corona versini alacak ve slice'a aktaracak asenkron thunk aksiyonu yaz
export const getData = createAsyncThunk("countryData", async (isoCode) => {
    // api isteğinde kullanılacak parametreyi belirle
    const params = { iso: isoCode };

    // api dan corona bilgilerini al
    const req1 = axios.get(`https://covid-19-statistics.p.rapidapi.com/reports`, { params, headers });

    // api dan ülke detaylarını al
    const req2 = axios.get(`https://restcountries.com/v3.1/name/${isoCode}`);

    // her iki api isteğini paralel bir şekilde gönder
    const responses = await Promise.all([req1, req2]);

    // covid bilgilerindeki region nesnesini covid nesnesi içine dahil et
    const covid = { ...responses[0].data.data[0], ...responses[0].data.data[0].region };

    // gereksiz değerleri kaldır
    delete covid.region;
    delete covid.cities;

    // payload'ı return et
    return {
        covid,
        country: responses[1].data[0],
    };
});