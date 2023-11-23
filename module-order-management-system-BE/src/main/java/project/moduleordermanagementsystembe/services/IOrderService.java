package project.moduleordermanagementsystembe.services;

import project.moduleordermanagementsystembe.models.Order;

import java.util.List;

public interface IOrderService {
    Order createOrder(Order order);
    List<Order> readAllOrders();
    Order readOrderById(Long id);
    Order updateOrder(Long id, Order order);
    void deleteOrderById(Long id);
    List<Object>getTableNumber(Long orderId);
}
