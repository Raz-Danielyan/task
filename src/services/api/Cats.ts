import axios from 'axios';
import { Cat, getCommand } from '../../store/ducs/Cats/contracts/CatsStructure';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';

export const CatsApi = {
  async fetchCats(params:string): Promise<Cat[]> {
    const data  = await axios.get<Cat[]>(`/images/search?${params ==='' ? 'limit=10&page=1&category_ids=1' : params}`).then(item=>item.data);
    return data;
  },
};

export const GetCategories = {
  async fetchCategoris(): Promise<getCommand[]> {
    const data  = await axios.get('/categories').then(item=>item.data)
    return data
  },
};