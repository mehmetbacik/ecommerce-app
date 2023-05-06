import axios from "axios";
export const fetchProductList = async () => {
	/*const { data } = await axios.get("http://localhost:4000/product");*/
	const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
	return data;
};