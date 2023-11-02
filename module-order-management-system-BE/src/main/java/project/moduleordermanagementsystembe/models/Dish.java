package project.moduleordermanagementsystembe.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import project.moduleordermanagementsystembe.enums.EDishStatus;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Dish {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private float price;
    private String description;
    private String imageLink;
    private EDishStatus status;

    @ManyToOne
    @JoinColumn(name = "categoryId")
    private Category category;
}
