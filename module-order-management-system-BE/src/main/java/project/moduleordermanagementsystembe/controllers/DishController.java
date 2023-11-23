package project.moduleordermanagementsystembe.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.moduleordermanagementsystembe.enums.EDishStatus;
import project.moduleordermanagementsystembe.models.Dish;
import project.moduleordermanagementsystembe.services.Impl.DishService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/dishes")
public class DishController {

    private final DishService dishService;

    @PostMapping
    public ResponseEntity<Dish> createDish(@RequestBody Dish dish) {
        Dish dish1 = dishService.createDish(dish);
        return new ResponseEntity<>(dish1, HttpStatus.CREATED);
    }

    @GetMapping({"/category"})
    public ResponseEntity<List<Dish>> readDishesByCategory(@RequestParam("categoryId") Long categoryId) {
        List<Dish> dishList = dishService.findDishByCategory(categoryId);
        return new ResponseEntity<>(dishList, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Dish>> readAllDish() {
        List<Dish> dishList = dishService.readAllDishes();
        return new ResponseEntity<>(dishList, HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Dish>> findDishByKeyword(@RequestParam("keyword") String keyword) {
        List<Dish> dishList = dishService.findDishByKeyword(keyword);
        return new ResponseEntity<>(dishList, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDish(@PathVariable Long id) {
        try {
            dishService.deleteDishById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/status/{id}")
    public ResponseEntity<Dish> updateDishStatus(@RequestParam("status") EDishStatus status, @PathVariable Long id)  {
        Dish dish = dishService.updateDishStatus(id, status);
        return new ResponseEntity<>(dish, HttpStatus.OK);

    }
}
