package project.moduleordermanagementsystembe.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project.moduleordermanagementsystembe.models.Category;
import project.moduleordermanagementsystembe.models.Dish;
import project.moduleordermanagementsystembe.repositories.CategoryRepository;
import project.moduleordermanagementsystembe.services.Impl.CategoryService;

import java.util.List;

@RestController
@RequestMapping("/categories")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;

    @GetMapping
    public ResponseEntity<List<Category>> readAllDish() {
        List<Category> dishList = categoryService.readAllCategories();
        return new ResponseEntity<>(dishList, HttpStatus.OK);
    }
}
