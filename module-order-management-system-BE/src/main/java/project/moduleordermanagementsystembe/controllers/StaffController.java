package project.moduleordermanagementsystembe.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.moduleordermanagementsystembe.models.Staff;
import project.moduleordermanagementsystembe.services.Impl.StaffService;

import java.util.List;

@RestController
@RequestMapping("/api/staffs")
public class StaffController {

    private final StaffService staffService;

    @Autowired
    public StaffController(StaffService staffService) {
        this.staffService = staffService;
    }

    @PostMapping
    public ResponseEntity<Staff> createStaff(@RequestBody Staff staff) {
        Staff createdStaff = staffService.createStaff(staff);
        return new ResponseEntity<>(createdStaff, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Staff>> readAllStaff() {
        List<Staff> staffList = staffService.readAllStaff();
        return new ResponseEntity<>(staffList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Staff> readStaffById(@PathVariable Long id) {
        Staff staff = staffService.readStaffById(id);
        return new ResponseEntity<>(staff, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStaffById(@PathVariable Long id) {
        staffService.deleteStaffById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Staff> updateStaffById(@PathVariable Long id, @RequestBody Staff staff) {
        Staff updatedStaff = staffService.updateStaffById(id, staff);
        return new ResponseEntity<>(updatedStaff, HttpStatus.OK);
    }

    @GetMapping("/username/{username}")
    public ResponseEntity<Staff> readByUserName(@PathVariable String username) {
        Staff staff = staffService.readByUserName(username);
        return new ResponseEntity<>(staff, HttpStatus.OK);
    }
}
