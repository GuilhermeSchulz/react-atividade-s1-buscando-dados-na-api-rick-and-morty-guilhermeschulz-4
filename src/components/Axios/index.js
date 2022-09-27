import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://some-domain.com/api/'
  });

export const GetRequest = async () => {
    const Results = await instance
    .get()
    .then(response => response)
    .catch(err => err)
    return Results
}