package project.moduleordermanagementsystembe.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import project.moduleordermanagementsystembe.models.OrderDetail;
import project.moduleordermanagementsystembe.models.Shift;

import java.util.List;
import java.util.Objects;

@Repository
public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long> {
    @Query("SELECT D.id, D.name, D.price, D.imageLink, OD.quantity, OD.status " +
        "FROM Dish D " +
        "JOIN OrderDetail OD ON OD.dish.id = D.id " +
        "WHERE D.id IN (SELECT od.dish.id FROM OrderDetail od WHERE od.order.id = :orderId)")
    List<Object[]> readDishByOrderId(@Param("orderId") Long orderId);

    @Query("SELECT od FROM OrderDetail od WHERE od.order.id = :orderId AND od.dish.id = :dishId")
    OrderDetail readOrderDetailByOrderAndDish(@Param("orderId") int orderId, @Param("dishId") int dishId);



}
