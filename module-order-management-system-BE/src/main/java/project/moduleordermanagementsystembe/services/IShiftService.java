package project.moduleordermanagementsystembe.services;

import project.moduleordermanagementsystembe.models.Shift;

import java.util.List;

public interface IShiftService {
    Shift createShift(Shift Shift);
    List<Shift> readAllCategories();
    Shift readShiftById();
    Shift deleteShiftById(Long id);
    Shift updateShiftById(Long id, Shift Shift);
}
