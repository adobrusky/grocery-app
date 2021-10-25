import { createSlice } from '@reduxjs/toolkit';
const webScraperSlice = createSlice({
  name: 'webScraper',
  initialState: {
    query: 'initial search query',
    productInfo: { 'name': 'N/A', 'image': 'N/A', 'price': 'N/A', 'source': 'N/A'},
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