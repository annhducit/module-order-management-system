package project.moduleordermanagementsystembe.services;

import project.moduleordermanagementsystembe.models.Staff;

import java.util.List;

public interface IStaffService {
    Staff createStaff(Staff staff);

    List<Staff> readAllStaff();

    Staff readStaffById(Long id);

    void deleteStaffById(Long id);

    Staff updateStaffById(Long id, Staff staff);

    Staff readByUserName(String username);
}
