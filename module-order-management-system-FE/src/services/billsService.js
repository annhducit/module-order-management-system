/* eslint-disable no-useless-catch */

import { api } from "../configs/config";

class BillsService {
    async get(shiftId, date) {
        try {
            const data = await api.get(
                `/bills/?shiftId=${shiftId}&date=${date}`
            );
            return data.data;
        } catch (err) {
            return [];
        }
    }

    async getDetails(id) {
        try {
            const data = await api.get(`/bills/${id}`);
            return data.data;
        } catch (err) {
            return [];
        }
    }

    async create(info) {
        try {
            const data = JSON.stringify(info);
            const res = await api.post(`/bills`, data);

            return res;
        } catch (err) {
            throw err;
        }
    }
}

const billsService = new BillsService();
export default billsService;
