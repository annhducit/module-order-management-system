import { api } from "../configs/config";

class DishesService {
    async getAll() {
        const data = await api.get("/dishes");
        return data.data;
    }

    async getDishesByKeyword(keyword) {
        const data = await api.get(`/dishes/search?keyword=${keyword}`);
        return data.data;
    }

    async getByCategoryId(categoryId) {
        try {
            const data = await api.get(
                `/dishes/category?categoryId=${categoryId}`
            );
            return data.data;
        } catch (err) {
            throw err;
        }
    }

    async updateStatus(id, status) {
        try {
            const res = await api.put(`/dishes/${id}?status=${status}`);

            return res;
        } catch (err) {
            throw err;
        }
    }
}

const dishesService = new DishesService();
export default dishesService;
