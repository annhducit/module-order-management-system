package project.moduleordermanagementsystembe.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.moduleordermanagementsystembe.models.Bill;
import project.moduleordermanagementsystembe.services.Impl.BillService;

import java.util.List;

@RestController
@RequestMapping("/api/bills")
public class BillController {

    private final BillService billService;

    @Autowired
    public BillController(BillService billService) {
        this.billService = billService;
    }

    @PostMapping
    public ResponseEntity<Bill> createBill(@RequestBody Bill bill) {
        Bill createdBill = billService.createBill(bill);
        return new ResponseEntity<>(createdBill, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Bill>> readAllBills() {
        List<Bill> billList = billService.readAllBills();
        return new ResponseEntity<>(billList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Bill> readBillById(@PathVariable Long id) {
        Bill bill = billService.readBillById(id);
        return new ResponseEntity<>(bill, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBillById(@PathVariable Long id) {
        billService.deleteBillById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
