package project.moduleordermanagementsystembe.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import project.moduleordermanagementsystembe.models.Table;

public interface TableRepository extends JpaRepository<Table, Long> {
}
