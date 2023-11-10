package project.moduleordermanagementsystembe.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@jakarta.persistence.Table(name = "tables")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Table {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer number;
    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;
    private Integer capacity;
}
