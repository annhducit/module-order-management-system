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
}
