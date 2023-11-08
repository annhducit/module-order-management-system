const baseURL = import.meta.env.REACT_APP_BASE_URL + "/orders";

class OrdersService {
    async getByTableId(tableId) {
        try {
            const res = await fetch(`${baseURL}?tableId=${tableId}`);
            const json = await res.json();
            return json.data;
        } catch (err) {
            return [];
        }
    }

    async updateOrderDetailsStatus(orderId, dishId, status) {
        try {
            const res = await fetch(
                `${baseURL}?orderId=${orderId}&dishId=${dishId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ status }),
                }
            );
            if (!res.ok) {
                throw new Error();
            }
            await res.json();
            return "Dish status updated successfully";
        } catch (err) {
            throw new Error("Update dish status failed");
        }
    }
}

const ordersService = new OrdersService();
export default ordersService;
