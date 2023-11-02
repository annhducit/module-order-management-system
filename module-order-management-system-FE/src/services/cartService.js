const baseURL = process.env.REACT_APP_BASE_URL + '/cart';

class CartService {
    async add(orderId, info) {
        try {
            const res = await fetch(`${baseURL}?id=${orderId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(info),
            });

            if (!res.ok) return false;
            return true;
        } catch (err) {
            throw err;
        }
    }

    async retrieve(orderId) {
        try {
            const res = await fetch(`${baseURL}?id=${orderId}`);
            if (!res.ok) return [];
            const json = await res.json();
            return json.data;
        } catch (err) {
            throw err;
        }
    }
}

const cartService = new CartService();
export default cartService;
