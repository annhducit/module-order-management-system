const baseURL = import.meta.env.REACT_APP_BASE_URL + "/open_table";

class OpenTableService {
    async openTable(credentials) {
        try {
            const res = await fetch(baseURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            });
            const json = await res.json();
            if (!res.ok) {
                throw new Error(json.message);
            }
            return json.data;
        } catch (err) {
            throw err;
        }
    }
}

const openTableService = new OpenTableService();
export default openTableService;
