package project.moduleordermanagementsystembe.services.Impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.moduleordermanagementsystembe.models.Shift;
import project.moduleordermanagementsystembe.repositories.ShiftRepository;
import project.moduleordermanagementsystembe.services.IShiftService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ShiftService implements IShiftService {

    private final ShiftRepository shiftRepository;
    @Override
    public Shift createShift(Shift shift) {
        return shiftRepository.save(shift);
    }

    @Override
    public List<Shift> readAllCategories() {
        return shiftRepository.findAll();
    }

    @Override
    public Shift readShiftById(Long id) {
        return shiftRepository.findById(id).get();
    }

    @Override
    public void deleteShiftById(Long id) {
        shiftRepository.deleteById(id);
    }

    @Override
    public Shift updateShiftById(Long id, Shift shift) {
        Shift shiftNew = readShiftById(id);
        shiftNew.setName(shift.getName());
        shiftNew.setEndedAt(shift.getEndedAt());
        shiftNew.setStartedAt(shift.getStartedAt());

        return shiftRepository.save(shiftNew);
    }
}
