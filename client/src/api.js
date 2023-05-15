import axios from "axios";
export const fetchProductList = async ({ pageParam = 1 }) => {
	/*const { data } = await axios.get(`${proces.env.REACT_APP_BASE_ENDPOINT/product?page=${pageParam}`);*/
	const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
	return data;
};

export const fetchProduct = async (id) => {
	const { data } = await axios.get(`${proces.env.REACT_APP_BASE_ENDPOINT}/product/${id}`);
	return data;
};