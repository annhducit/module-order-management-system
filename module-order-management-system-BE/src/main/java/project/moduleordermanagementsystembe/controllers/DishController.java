package project.moduleordermanagementsystembe.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.moduleordermanagementsystembe.models.Dish;
import project.moduleordermanagementsystembe.services.Impl.DishService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/dishes")
public class DishController {

    private final DishService dishService;

    @PostMapping
    public ResponseEntity<Dish> createDish(@RequestBody Dish dish) {
        Dish dish1 = dishService.createDish(dish);
        return new ResponseEntity<>(dish1, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Dish>> readAllDish() {
        List<Dish> dishList = dishService.readAllDishes();
        return new ResponseEntity<>(dishList, HttpStatus.OK);
    }
}
