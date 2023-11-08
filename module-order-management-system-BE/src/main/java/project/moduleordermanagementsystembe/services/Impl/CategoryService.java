package project.moduleordermanagementsystembe.services.Impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.moduleordermanagementsystembe.models.Category;
import project.moduleordermanagementsystembe.repositories.CategoryRepository;
import project.moduleordermanagementsystembe.services.ICategoryService;

import java.util.List;
@Service
@RequiredArgsConstructor
public class CategoryService implements ICategoryService {
    private final CategoryRepository categoryRepository;
    @Override
    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public List<Category> readAllCategories() {
        return categoryRepository.findAll();
    }

    @Override
    public Category readCategoryById(Long id) {
        return categoryRepository.findById(id).get();
    }

    @Override
    public void deleteCategoryById(Long id) {
        categoryRepository.deleteById(id);
    }

    @Override
    public Category updateCategoryById(Long id, Category category) {
        Category isCategory = readCategoryById(id);
        isCategory.setName(category.getName());
        return categoryRepository.save(isCategory);
    }
}
