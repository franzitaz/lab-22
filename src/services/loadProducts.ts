import { ProductProps } from '../components/Product/ProductProps';
import apiClient from '../services/apiClient';

async function loadProducts() {
    //setLoadingProducts(true);
  
    const response = await apiClient.get<ProductProps[]>(
      '/products'
    );
  
    //setLoadingProducts(false);
    
    return response.data;
  
  }

  export default loadProducts;