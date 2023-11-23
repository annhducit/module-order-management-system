import { api } from "../configs/config";

class TablesService {
    async getAll() {
        try {
            const res = await api.get("/tables");
            return res.data;
        } catch (err) {
            return [];
        }
    }
}

const tablesService = new TablesService();
export default tablesService;
