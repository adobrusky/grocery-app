import { createSlice } from '@reduxjs/toolkit';
const webScraperSlice = createSlice({
  name: 'webScraper',
  initialState: {
    query: 'initial search query',
    productInfo:{'name': 'Peanut butter', 'image': 'https://www.peanutbutter.com/wp-content/uploads/2019/03/SKIPPY_Product_PB_Spread_Creamy_Peanut_Butter_28oz.png', 'price': 20},
  },
  reducers: {
    setQuery: (webScraper, action) => {
      const {
        query,
      } = action.payload;
      webScraper.query = query;
    },
    setProductInfo: (webScraper, action) => {
      const {
        productInfo,
      } = action.payload;
      webScraper.productInfo = productInfo;
    },
  },
});
export default webScraperSlice;

export const {
  setQuery,
  setProductInfo,
} = webScraperSlice.actions;

export function selectQuery(state) {
  return state.webScraper.query;
}

export function selectProductInfo(state) {
  return state.webScraper.productInfo;
}