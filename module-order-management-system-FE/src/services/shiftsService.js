import { api } from "../configs/config";

class ShiftsService {
    async getAll() {
        try {
            const res = await api.get("/shifts");

            return res.data;
        } catch (err) {
            return [];
        }
    }
}

const shiftsService = new ShiftsService();
export default shiftsService;
