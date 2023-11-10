package project.moduleordermanagementsystembe.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project.moduleordermanagementsystembe.models.Staff;

@Repository
public interface StaffRepository extends JpaRepository<Staff, Long> {
    Staff readByUsername(String username);
}
