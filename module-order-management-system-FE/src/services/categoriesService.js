import { api } from "../configs/config";

class CategoriesService {
    async getAll() {
        const data = await api.get("/categories");
        console.log(data.data);
        return data.data;
    }
}

const categoriesService = new CategoriesService();
export default categoriesService;
