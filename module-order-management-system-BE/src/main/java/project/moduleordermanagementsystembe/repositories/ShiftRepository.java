package project.moduleordermanagementsystembe.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project.moduleordermanagementsystembe.models.Shift;
@Repository
public interface ShiftRepository extends JpaRepository<Shift, Long> {
}
