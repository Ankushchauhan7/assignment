import { Product } from '../components/ProductCard';

const API_BASE_URL = 'https://fakestoreapi.com';

// API response cache to reduce unnecessary requests
const cache = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Security: Input validation and sanitization
const validateUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === 'https:' && urlObj.hostname === 'fakestoreapi.com';
  } catch {
    return false;
  }
};

// Generic fetch function with error handling and caching
const fetchWithCache = async <T>(endpoint: string): Promise<T> => {
  const fullUrl = `${API_BASE_URL}${endpoint}`;
  
  // Security check
  if (!validateUrl(fullUrl)) {
    throw new Error('Invalid API URL');
  }

  // Check cache first
  const cached = cache.get(endpoint);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(fullUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Cache the response
    cache.set(endpoint, { data, timestamp: Date.now() });
    
    return data;
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error('Request timeout - please try again');
      }
      throw new Error(`API Error: ${error.message}`);
    }
    throw new Error('An unexpected error occurred');
  }
};

// API functions
export const api = {
  // Get all products
  getProducts: async (): Promise<Product[]> => {
    return fetchWithCache<Product[]>('/products');
  },

  // Get single product
  getProduct: async (id: number): Promise<Product> => {
    if (!Number.isInteger(id) || id <= 0) {
      throw new Error('Invalid product ID');
    }
    return fetchWithCache<Product>(`/products/${id}`);
  },

  // Get products by category
  getProductsByCategory: async (category: string): Promise<Product[]> => {
    if (!category || typeof category !== 'string') {
      throw new Error('Invalid category');
    }
    // Sanitize category input
    const sanitizedCategory = encodeURIComponent(category.trim());
    return fetchWithCache<Product[]>(`/products/category/${sanitizedCategory}`);
  },

  // Get all categories
  getCategories: async (): Promise<string[]> => {
    return fetchWithCache<string[]>('/products/categories');
  },

  // Get limited products for performance
  getLimitedProducts: async (limit: number = 10): Promise<Product[]> => {
    if (!Number.isInteger(limit) || limit <= 0 || limit > 20) {
      throw new Error('Invalid limit. Must be between 1 and 20');
    }
    return fetchWithCache<Product[]>(`/products?limit=${limit}`);
  },
};

// Clear cache function (useful for testing or manual refresh)
export const clearApiCache = (): void => {
  cache.clear();
};