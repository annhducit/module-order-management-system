package project.moduleordermanagementsystembe.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.Repository;
import project.moduleordermanagementsystembe.models.Shift;

public interface ShiftRepository extends JpaRepository<Shift, Long> {
}
