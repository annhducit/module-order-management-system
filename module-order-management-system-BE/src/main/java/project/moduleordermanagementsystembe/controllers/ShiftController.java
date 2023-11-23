package project.moduleordermanagementsystembe.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.moduleordermanagementsystembe.models.Shift;
import project.moduleordermanagementsystembe.services.Impl.ShiftService;

import java.util.List;

@RestController
@RequestMapping("/api/shifts")
public class ShiftController {

    private final ShiftService shiftService;

    @Autowired
    public ShiftController(ShiftService shiftService) {
        this.shiftService = shiftService;
    }

    @PostMapping
    public ResponseEntity<Shift> createShift(@RequestBody Shift shift) {
        Shift createdShift = shiftService.createShift(shift);
        return new ResponseEntity<>(createdShift, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Shift>> readAllShifts() {
        List<Shift> shiftList = shiftService.readAllCategories();
        return new ResponseEntity<>(shiftList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Shift> readShiftById(@PathVariable Long id) {
        Shift shift = shiftService.readShiftById(id);
        return new ResponseEntity<>(shift, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Shift> updateShiftById(@PathVariable Long id, @RequestBody Shift shift) {
        Shift updatedShift = shiftService.updateShiftById(id, shift);
        return new ResponseEntity<>(updatedShift, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteShiftById(@PathVariable Long id) {
        shiftService.deleteShiftById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}