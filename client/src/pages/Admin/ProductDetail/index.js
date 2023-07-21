import React from "react";
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../../../api';
import { useQuery } from 'react-query';
import { Text, Box, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { Formik } from 'formik';

function ProductDetail() {
    const {product_id} = useParams();
    const {isLoading, isError, data, error} = useQuery(['admin:product', product_id], () => fetchProduct(product_id));
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error {error.message}</div>
    }
    const handleSubmit = () => {

    }
	return <div>
        <Text fontSize="2xl">Edit</Text>
        <Formik 
            initialValues={{
                title: data.title,
                description: data.description,
                price: data.price,
                photos: data.photos,
            }}
            validationSchema={}
            onSubmit={handleSubmit}
        >
            {
                ({ handleSubmit, errors, touched, handleChange, handleBlur, values, isSubmitting }) => <>
                    <Box>
                        <Box my="5" textAlign="left">
                            <form onSubmit={handleSubmit}>
                                <FormControl>
                                    <FormLabel>
                                        Title
                                    </FormLabel>
                                    <Input 
                                        name="title"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.title}
                                        disabled={isSubmitting}
                                    />
                                </FormControl>
                                <FormControl mt="4">
                                    <FormLabel>
                                        Description
                                    </FormLabel>
                                    <Textarea 
                                        name="description"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.description}
                                        disabled={isSubmitting}
                                    />
                                </FormControl>
                                <FormControl mt="4">
                                    <FormLabel>
                                        Price
                                    </FormLabel>
                                    <Input 
                                        name="price"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.price}
                                        disabled={isSubmitting}
                                    />
                                </FormControl>
                            </form>
                        </Box>
                    </Box>
                </>
            }
        </Formik>
    </div>;
}

export default ProductDetail;