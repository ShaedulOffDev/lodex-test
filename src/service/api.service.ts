import axios from "axios";

export const getProducts = async () => {
  const {data} = await axios.get("https://real-time-amazon-data.p.rapidapi.com/products-by-category", {
    headers: {
      'x-rapidapi-key': '32001f2eb2mshf2e31f7940dafbap1695b9jsn202bb9790c54',
      'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
    },
    params: {
      category_id: '2478868012',
      page: '1',
      country: 'US',
      sort_by: 'RELEVANCE',
      product_condition: 'ALL',
      is_prime: 'false',
      deals_and_discounts: 'NONE'
    },
  });
  return data.data.products
};
