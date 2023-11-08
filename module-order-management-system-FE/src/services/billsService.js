/* eslint-disable no-useless-catch */
const baseURL = import.meta.env.REACT_APP_BASE_URL + "/bills";

class BillsService {
    async get(shiftId, date) {
        try {
            const res = await fetch(
                `${baseURL}?shiftId=${shiftId}&date=${date}`
            );
            const json = await res.json();
            return json.data;
        } catch (err) {
            return [];
        }
    }

    async getDetails(id) {
        try {
            const res = await fetch(`${baseURL}?id=${id}`);
            const json = await res.json();
            return json.data;
        } catch (err) {
            return [];
        }
    }

    async create(info) {
        try {
            const res = await fetch(baseURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(info),
            });
            const json = await res.json();
            if (!res.ok) {
                throw new Error(json.message);
            }
        } catch (err) {
            throw err;
        }
    }
}

const billsService = new BillsService();
export default billsService;
