import {Grid, GridItem } from '@chakra-ui/react'

import Card from '../../components/Card'

function Products() {
	return <div>
        
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Grid>
    </div>;
}

export default Products;