import { api } from "../configs/config";

class OpenTableService {
    async openTable(credentials) {
        try {
            const data = JSON.stringify(credentials);
            const res = await api.post(`/tables`, data);

            return res.data;
        } catch (err) {
            throw err;
        }
    }
}

const openTableService = new OpenTableService();
export default openTableService;
