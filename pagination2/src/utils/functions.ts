import axios from "axios"
const API_URL = import.meta.env.VITE_API_URL


export const getData = (page: number, pageSize: number, field: string, sortOrder: string, search : string) => {
    console.log(import.meta.env.VITE_API_URL)
    return axios.get(API_URL, {
      params : {
        page,
        pageSize,
        title : field,
        sortIn : sortOrder,
        input : search,
      },
     
    }
    )

}