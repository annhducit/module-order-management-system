package project.moduleordermanagementsystembe.services;

import project.moduleordermanagementsystembe.enums.EDishStatus;
import project.moduleordermanagementsystembe.models.Category;
import project.moduleordermanagementsystembe.models.Dish;
import project.moduleordermanagementsystembe.repositories.DishRepository;

import java.util.List;

public interface IDishService {

    List<Dish> readAllDishes();
    Dish readDishById(Long id);
    List<Object> readDishesByTableId(Integer tableId);
    List<Dish> findDishByCategory(Long id);
    List<Dish> findDishByKeyword(String keyword);
    Dish createDish(Dish dish);
    void deleteDishById(Long id);
    Dish updateDishById(Long id, Dish dish);
    Dish updateDishStatus(Long id, EDishStatus status);

}
