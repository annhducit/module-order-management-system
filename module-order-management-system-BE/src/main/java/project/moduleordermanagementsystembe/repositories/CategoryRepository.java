package project.moduleordermanagementsystembe.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project.moduleordermanagementsystembe.models.Category;
@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
}
