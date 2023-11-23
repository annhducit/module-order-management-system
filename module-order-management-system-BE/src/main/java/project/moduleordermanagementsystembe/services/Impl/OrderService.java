package project.moduleordermanagementsystembe.services.Impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.moduleordermanagementsystembe.models.Order;
import project.moduleordermanagementsystembe.models.OrderDetail;
import project.moduleordermanagementsystembe.repositories.OrderDetailRepository;
import project.moduleordermanagementsystembe.repositories.OrderRepository;
import project.moduleordermanagementsystembe.services.IOrderService;

import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService implements IOrderService {

    private final OrderRepository orderRepository;
    @Override
    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public List<Order> readAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Order readOrderById(Long id) {
        return orderRepository.findById(id).get();
    }

    @Override
    public Order updateOrder(Long id, Order order) {
        Order order1 = readOrderById(id);
        order1.setPaid(order1.isPaid());
        order1.setCreatedAt(order.getCreatedAt());
        order1.setCustomerPhone(order.getCustomerPhone());
        order1.setTableNumber(order.getTableNumber());
        order1.setOrderDetails(order.getOrderDetails());
        return orderRepository.save(order1);
    }

    @Override
    public void deleteOrderById(Long id) {
         orderRepository.deleteById(id);
    }

    @Override
    public List<Object> getTableNumber(Long orderId) {
        return Collections.singletonList(orderRepository.findTableNumberById(orderId));
    }

}
