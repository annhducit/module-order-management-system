package project.moduleordermanagementsystembe.services;

import project.moduleordermanagementsystembe.models.Shift;

import java.util.List;

public interface IShiftService {
    Shift createShift(Shift shift);
    List<Shift> readAllCategories();
    Shift readShiftById(Long id);
    void deleteShiftById(Long id);
    Shift updateShiftById(Long id, Shift shift);
}
