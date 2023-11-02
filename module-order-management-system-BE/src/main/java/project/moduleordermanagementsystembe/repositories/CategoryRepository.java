package project.moduleordermanagementsystembe.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import project.moduleordermanagementsystembe.models.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
