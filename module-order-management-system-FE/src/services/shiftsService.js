const baseURL = import.meta.env.REACT_APP_BASE_URL + "/shifts";

class ShiftsService {
    async getAll() {
        try {
            const res = await fetch(baseURL);
            const json = await res.json();
            return json.data;
        } catch (err) {
            return [];
        }
    }
}

const shiftsService = new ShiftsService();
export default shiftsService;
