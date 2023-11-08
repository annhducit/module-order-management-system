package project.moduleordermanagementsystembe.services;

import project.moduleordermanagementsystembe.models.Order;

import java.util.List;

public interface IOrderService {
    Order createOrder(Order order);
    List<Order> readAllOrders();
    Order readAllOrderById();
    Order updateOrder(Long id, Order order);
    Order deleteOrderById(Long id);
}
