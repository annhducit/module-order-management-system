package project.moduleordermanagementsystembe.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project.moduleordermanagementsystembe.models.Bill;
import project.moduleordermanagementsystembe.models.Category;

import java.util.List;

@Repository
public interface BillRepository extends JpaRepository<Bill, Long> {

}
