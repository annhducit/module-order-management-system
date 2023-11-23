import { api } from "../configs/config";

class CartService {
    async add(orderId, info) {
        try {
            const res = await api.post(`/carts/${orderId}`, info);
            if (!res.ok) return false;
            return true;
        } catch (err) {
            throw err;
        }
    }

    async retrieve(orderId) {
        const res = await api.get(`/carts/${orderId}`);
        return res.data;
    }
}

const cartService = new CartService();
export default cartService;
