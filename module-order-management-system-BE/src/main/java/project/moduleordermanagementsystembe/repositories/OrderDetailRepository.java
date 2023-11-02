package project.moduleordermanagementsystembe.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import project.moduleordermanagementsystembe.models.OrderDetail;
import project.moduleordermanagementsystembe.models.Shift;

public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long> {
}
