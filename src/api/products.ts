import http from "./index";

const PREFIX = "/products";

export const fetchProducts = () => http.get(PREFIX);
