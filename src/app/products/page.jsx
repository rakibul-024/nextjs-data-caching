import React from 'react';
import ProductCard from '../components/ProductCard';


const GetProducts = async () => {
    const res = await fetch('http://localhost:5000/products' , { cache: 'no-store' });
    return res.json();
};

const ProductsPage = async () => {

    const products = await GetProducts();
    return (
        <div>
            <h2>Hello products :{products.length} </h2>

            <div className="grid grid-cols-3 gap-4">
                {
                    products.map(product => <ProductCard key={product.id} product={product} />)
                }


            </div>
        </div>
    );
};

export default ProductsPage;