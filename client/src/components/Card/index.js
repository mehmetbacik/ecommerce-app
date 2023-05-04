import {Box, Image, Button} from '@chakra-ui/react'
import {Link} from 'react-router-dom';

function Card() {
	return <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
        <Link to="#/">
            <Image src="http://via.placeholder.com/500x500" alt="Product" />
            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    1/1/1881
                </Box>
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                    Product Name
                </Box>
                <Box>
                    100$
                </Box>
            </Box>
        </Link>
        <Button colorScheme="blue" width="100%">Add to Cart</Button>
    </Box>;
}

export default Card;