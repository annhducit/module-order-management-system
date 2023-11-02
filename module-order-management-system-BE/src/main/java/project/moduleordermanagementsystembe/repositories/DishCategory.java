package project.moduleordermanagementsystembe.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import project.moduleordermanagementsystembe.models.Dish;

public interface DishCategory extends JpaRepository<Dish, Long> {
}
