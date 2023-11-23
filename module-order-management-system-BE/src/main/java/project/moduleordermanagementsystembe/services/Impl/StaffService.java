package project.moduleordermanagementsystembe.services.Impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.moduleordermanagementsystembe.models.Staff;
import project.moduleordermanagementsystembe.repositories.StaffRepository;
import project.moduleordermanagementsystembe.services.IStaffService;

import java.util.List;
@Service
@RequiredArgsConstructor
public class StaffService implements IStaffService {

    private final StaffRepository staffRepository;
    @Override
    public Staff createStaff(Staff staff) {
        return staffRepository.save(staff);
    }

    @Override
    public List<Staff> readAllStaff() {
        return staffRepository.findAll();
    }

    @Override
    public Staff readStaffById(Long id) {
        return staffRepository.findById(id).get();
    }

    @Override
    public void deleteStaffById(Long id) {
        staffRepository.deleteById(id);
    }

    @Override
    public Staff updateStaffById(Long id, Staff staff) {
        Staff staffNew = readStaffById(id);
        staffNew.setName(staff.getName());
        staffNew.setLevel(staff.getLevel());
        staffNew.setBirthday(staff.getBirthday());
        staffNew.setUsername(staff.getUsername());
        return staffRepository.save(staffNew);
    }

    @Override
    public Staff readByUserName(String username) {
        return staffRepository.readByUsername(username);
    }
}
