import React from "react";
import { useQuery } from 'react-query';
import { fetchProductList } from '../../../api';
import { DatePicker } from 'antd';

function Products() {
    const {isLoading, isError, data, error} = useQuery('admin:products', fetchProductList);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error... {error.message}</div> 
    }

    return (
        <div>
            Products
        </div>
    );
};

export default Products;