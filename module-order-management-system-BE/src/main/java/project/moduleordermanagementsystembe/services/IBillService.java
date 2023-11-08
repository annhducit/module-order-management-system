package project.moduleordermanagementsystembe.services;

import project.moduleordermanagementsystembe.models.Bill;

import java.util.List;

public interface IBillService {
    Bill createBill(Bill bill);
    Bill readBillById(Long id);
    List<Bill> readAllBills();
    Bill deleteBillById(Long id);
}
