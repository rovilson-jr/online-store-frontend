export interface IProduct {
    id: number;
    description: string;
    price: number;
    priceDescription: string;
    image: string;
    stockQuantity: number;
}

export interface ICartProduct extends IProduct {
    quantity: number;
}

export const products: IProduct[] = [
    { id: 1, description: 'Product 01', price: 439.00, priceDescription: 'In cash', image: '', stockQuantity: 5 },
    { id: 2, description: 'Product 02', price: 1200.50, priceDescription: 'In cash', image: '', stockQuantity: 15 },
    { id: 3, description: 'Product 03', price: 749.99, priceDescription: 'In cash', image: '', stockQuantity: 10 },
    { id: 4, description: 'Product 04', price: 599.99, priceDescription: 'In cash', image: '', stockQuantity: 8 },
    { id: 5, description: 'Product 05', price: 299.99, priceDescription: 'In cash', image: '', stockQuantity: 12 },
    { id: 6, description: 'Product 06', price: 399.99, priceDescription: 'In cash', image: '', stockQuantity: 42 },
    { id: 7, description: 'Product 07', price: 499.99, priceDescription: 'In cash', image: '', stockQuantity: 7 },
    { id: 8, description: 'Product 08', price: 18449.99, priceDescription: 'In cash', image: '', stockQuantity: 13 },
    { id: 9, description: 'Product 09', price: 1000, priceDescription: 'In cash', image: '', stockQuantity: 17 },
    { id: 10, description: 'Product 10', price: 2500, priceDescription: 'In cash', image: '', stockQuantity: 18 },
    { id: 11, description: 'Product 11', price: 4500, priceDescription: 'In cash', image: '', stockQuantity: 22 },
    { id: 12, description: 'Product 12', price: 20, priceDescription: 'In cash', image: '', stockQuantity: 23 },
    { id: 13, description: 'Product 13', price: 200, priceDescription: 'In cash', image: '', stockQuantity: 2 },
    { id: 14, description: 'Product 14', price: 50, priceDescription: 'In cash', image: '', stockQuantity: 90 },
    { id: 15, description: 'Product 15', price: 159.99, priceDescription: 'In cash', image: '', stockQuantity: 100 },
    { id: 16, description: 'Product 16', price: 99.99, priceDescription: 'In cash', image: '', stockQuantity: 10 }
]