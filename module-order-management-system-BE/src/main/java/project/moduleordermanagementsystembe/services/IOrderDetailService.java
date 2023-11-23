package project.moduleordermanagementsystembe.services;

import project.moduleordermanagementsystembe.models.OrderDetail;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

public interface IOrderDetailService {

    OrderDetail create(OrderDetail orderDetail);
    OrderDetail readOrderDetailById(Long id);
    List<OrderDetail> readAllOrderDetail();
    OrderDetail updateOrderDetail(Long id, OrderDetail orderDetail);
    void delete(Long id);
    List<Object[]> readDishesByOrderId(Long id);
    OrderDetail readOrderDetail(Long orderId, Long dishId, int status);

    OrderDetail createCart(Long orderId, OrderDetail orderDetail);
}
