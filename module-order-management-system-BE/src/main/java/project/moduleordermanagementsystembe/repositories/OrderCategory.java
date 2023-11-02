package project.moduleordermanagementsystembe.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import project.moduleordermanagementsystembe.models.Order;

public interface OrderCategory extends JpaRepository<Order, Long> {
}
