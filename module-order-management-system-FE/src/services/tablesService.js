const baseURL = process.env.REACT_APP_BASE_URL + '/tables';

class TablesService {
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

const tablesService = new TablesService();
export default tablesService;
