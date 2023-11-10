package project.moduleordermanagementsystembe.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import project.moduleordermanagementsystembe.models.Dish;

import java.util.List;

@Repository
public interface DishRepository extends JpaRepository<Dish, Long> {
    @Query("SELECT d FROM Dish d WHERE d.category.id = :categoryId")
    List<Dish> findDishByCategory(@Param("categoryId") Long categoryId);
//    @Query("SELECT o.id, od.quantity, od.status, od.note, d.name, d.imageLink FROM Order o JOIN OrderDetail od ON od.dish.id = o.id JOIN Dish d WHERE o.id IN (SELECT order.id FROM OrderDetail WHERE tableNumber = :tableId)")
//    List<Object> getOrderDetailsByTableNumber(@Param("tableId") int tableId);
}
