import React from "react";
import { useQuery } from 'react-query';
import { fetchProductList } from '../../../api';
import {Text} from '@chakra-ui/react';
import { Table } from 'antd';

function Products() {
    const {isLoading, isError, data, error} = useQuery('admin:products', fetchProductList);

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Created At',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'Action',
            key: 'action',
            render: () => <div>Test</div>,
        },
    ];

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error... {error.message}</div> 
    }

    return (
        <div>
            <Text fontSize="2xl" p="5">Products</Text>
            <Table dataSource={data} columns={columns} rowKey="_id"/>
        </div>
    );
};

export default Products;