package project.moduleordermanagementsystembe.services.Impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.moduleordermanagementsystembe.models.Dish;
import project.moduleordermanagementsystembe.models.Order;
import project.moduleordermanagementsystembe.models.OrderDetail;
import project.moduleordermanagementsystembe.repositories.DishRepository;
import project.moduleordermanagementsystembe.repositories.OrderDetailRepository;
import project.moduleordermanagementsystembe.repositories.OrderRepository;
import project.moduleordermanagementsystembe.services.IOrderDetailService;

import java.util.List;
@Service
@RequiredArgsConstructor
public class OrderDetailService implements IOrderDetailService {

    private final OrderDetailRepository orderDetailRepository;
    private final DishRepository dishRepository;
    private final OrderRepository orderRepository;
    @Override
    public OrderDetail create(OrderDetail orderDetail) {
        return orderDetailRepository.save(orderDetail);
    }

    @Override
    public OrderDetail readOrderDetailById(Long id) {
        return orderDetailRepository.findById(id).get();
    }

    @Override
    public List<OrderDetail> readAllOrderDetail() {
        return orderDetailRepository.findAll();
    }

    @Override
    public OrderDetail updateOrderDetail(Long id, OrderDetail orderDetail) {
        OrderDetail orderDetail1 = readOrderDetailById(id);
        orderDetail1.setOrder(orderDetail.getOrder());
        orderDetail1.setNote(orderDetail.getNote());
        orderDetail1.setQuantity(orderDetail.getQuantity());
        orderDetail1.setDish(orderDetail.getDish());
        orderDetail1.setBill(orderDetail.getBill());
        orderDetail1.setStatus(orderDetail.getStatus());
        return orderDetailRepository.save(orderDetail);
    }

    @Override
    public void delete(Long id) {
        orderDetailRepository.deleteById(id);
    }

    @Override
    public List<Object[]> readDishesByOrderId(Long id) {
        return orderDetailRepository.readDishByOrderId(id);
    }

    @Override
    public OrderDetail readOrderDetail(Long orderId, Long dishId, int status) {
        return orderDetailRepository.readOrderDetailByOrderAndDishAndStatus(orderId, dishId, status);
    }

    @Override
    public OrderDetail createCart(Long orderId, OrderDetail orderDetail) {
            Long dishId = orderDetail.getDish().getId();
            int quantity = orderDetail.getQuantity();
            String note = orderDetail.getNote();
        boolean isValid = true;
        if (orderId == null || !orderRepository.existsById(orderId)
            || dishRepository.findById(dishId).isEmpty() || note == null) {
            isValid = false;
        }
        if (!isValid) {
            return new OrderDetail();
        }
        OrderDetail existingOrderDetail = orderDetailRepository.readOrderDetailByOrderAndDishAndStatus(orderId, dishId, 0);
        if (existingOrderDetail != null) {
            existingOrderDetail.setQuantity(existingOrderDetail.getQuantity() + quantity);
            orderDetailRepository.save(existingOrderDetail);
        } else {

            Order order = orderRepository.findById(orderId).orElseThrow();
            Dish dish = dishRepository.findById(dishId).orElseThrow();

            OrderDetail newOrderDetail = new OrderDetail(null, quantity, 0, note, order, dish, null);
            orderDetailRepository.save(newOrderDetail);
        }
        return orderDetailRepository.readOrderDetailByOrderAndDishAndStatus(orderId, dishId, 0);
    }

}
