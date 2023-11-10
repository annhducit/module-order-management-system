package project.moduleordermanagementsystembe.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import project.moduleordermanagementsystembe.models.Table;
@Repository
public interface TableRepository extends JpaRepository<Table, Long> {
    @Query("SELECT tbl FROM Table tbl WHERE tbl.order.id =: orderId")
    Table readTableByOrder(@Param("orderId") Long orderId);
}
