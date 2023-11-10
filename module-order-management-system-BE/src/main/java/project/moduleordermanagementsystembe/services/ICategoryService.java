package project.moduleordermanagementsystembe.services;

import org.hibernate.sql.Update;
import project.moduleordermanagementsystembe.models.Category;

import java.util.List;

public interface ICategoryService {
    Category createCategory(Category category);

    List<Category> readAllCategories();

    Category readCategoryById(Long id);

    void deleteCategoryById(Long id);

    Category updateCategoryById(Long id, Category category);

}
