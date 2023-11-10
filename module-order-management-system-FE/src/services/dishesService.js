import { api } from "../configs/config";

const baseURL = import.meta.env.REACT_APP_BASE_URL + "/dishes";

class DishesService {
    async getAll() {
        // let url = "";
        // if (categoryId && search.length > 0) {
        //     url = `${baseURL}?categoryId=${categoryId}&search=${search}`;
        // } else if (categoryId) {
        //     url = `${baseURL}?categoryId=${categoryId}`;
        // } else if (search.length > 0) {
        //     url = `${baseURL}?search=${search}`;
        // } else {
        //     url = baseURL;
        // }

        const data = await api.get("/dishes");
        return data.data;
    }

    async getByCategoryId(categoryId) {
        try {
            const res = await fetch(`${baseURL}?categoryId=${categoryId}`);
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const json = await res.json();
            return json.data;
        } catch (err) {
            throw err;
        }
    }

    async updateStatus(id, info) {
        try {
            const res = await fetch(`${baseURL}?id=${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(info),
            });
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const json = await res.json();
            return json;
        } catch (err) {
            throw err;
        }
    }
}

const dishesService = new DishesService();
export default dishesService;
