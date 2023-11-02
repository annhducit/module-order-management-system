package project.moduleordermanagementsystembe.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Bill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private float total;
    private Date createdAt;

    @ManyToOne
    @JoinColumn(name = "shiftId")
    private Shift shift;

    @OneToMany(mappedBy = "bill")
    private List<OrderDetail> orderDetails;
}