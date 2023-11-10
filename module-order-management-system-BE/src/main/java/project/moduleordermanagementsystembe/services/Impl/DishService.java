package project.moduleordermanagementsystembe.services.Impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.moduleordermanagementsystembe.models.Dish;
import project.moduleordermanagementsystembe.repositories.DishRepository;
import project.moduleordermanagementsystembe.services.IDishService;

import java.util.List;


@Service
@RequiredArgsConstructor
public class DishService implements IDishService {

    private final DishRepository dishRepository;
    @Override
    public List<Dish> readAllDishes() {
        return dishRepository.findAll();
    }

    @Override
    public Dish readDishById(Long id) {
        return dishRepository.findById(id).get();
    }

    @Override
    public List<Object> readDishesByTableId(Integer tableId) {
        return null;
    }

    @Override
    public List<Dish> findDishByCategory(Long id) {
        return dishRepository.findDishByCategory(id);
    }

    @Override
    public Dish createDish(Dish dish) {
        return dishRepository.save(dish);
    }

    @Override
    public void deleteDishById(Long id) {
        dishRepository.deleteById(id);
    }

    @Override
    public Dish updateDishById(Long id, Dish dish) {
        Dish isDish = readDishById(id);
        isDish.setName(dish.getName());
        isDish.setPrice(dish.getPrice());
        isDish.setStatus(dish.getStatus());
        isDish.setCategory(dish.getCategory());
        isDish.setDescription(dish.getDescription());
        isDish.setImageLink(dish.getImageLink());
        return dishRepository.save(isDish);
    }
}
