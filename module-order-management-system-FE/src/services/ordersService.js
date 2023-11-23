import { api } from "../configs/config";

class OrdersService {
    async getByTableId(tableId) {
        try {
            const res = await api.get(`/orders/?tableId=${tableId}`);

            return res.data;
        } catch (err) {
            return [];
        }
    }

    async updateOrderDetailsStatus(orderId, dishId, status) {
        try {
            const data = JSON.stringify({ status });
            const res = await api.put(
                `/orders/${orderId}&dishId=${dishId}`,
                data
            );
            if (!res.ok) {
                throw new Error();
            }

            return "Dish status updated successfully";
        } catch (err) {
            throw new Error("Update dish status failed");
        }
    }
}

const ordersService = new OrdersService();
export default ordersService;
