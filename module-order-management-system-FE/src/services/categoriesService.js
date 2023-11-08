const baseURL = import.meta.env.REACT_APP_BASE_URL + "/categories";

class CategoriesService {
    async getAll() {
        try {
            const res = await fetch(baseURL);
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const json = await res.json();
            return json.data;
        } catch (err) {
            console.err(`Error fetching data: ${err}`);
        }
    }
}

const categoriesService = new CategoriesService();
export default categoriesService;
