package project.moduleordermanagementsystembe.services.Impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.moduleordermanagementsystembe.models.Bill;
import project.moduleordermanagementsystembe.repositories.BillRepository;
import project.moduleordermanagementsystembe.services.IBillService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BillService implements IBillService {
    private final BillRepository billRepository;
    @Override
    public Bill createBill(Bill bill) {
        return billRepository.save(bill);
    }

    @Override
    public Bill readBillById(Long id) {
        return billRepository.findById(id).get();
    }

    @Override
    public List<Bill> readAllBills() {
        return billRepository.findAll();
    }
    @Override
    public void deleteBillById(Long id) {
        billRepository.deleteById(id);
    }
}
