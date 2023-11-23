package project.moduleordermanagementsystembe.controllers;

import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.moduleordermanagementsystembe.models.Order;
import project.moduleordermanagementsystembe.models.OrderDetail;
import project.moduleordermanagementsystembe.services.Impl.OrderDetailService;
import project.moduleordermanagementsystembe.services.Impl.OrderService;

import java.util.List;

@RestController
@RequestMapping("/api/carts")
@RequiredArgsConstructor
public class CartController {
    private final OrderService orderService;
    private final OrderDetailService orderDetailService;


    @PostMapping
    public ResponseEntity<OrderDetail> addDishToOrder(@RequestParam("id") Long orderId,
                                                      @RequestBody OrderDetail orderDetail) {
        try {
            OrderDetail updatedOrderDetail = orderDetailService.createCart(orderId, orderDetail);
            return new ResponseEntity<>(updatedOrderDetail, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity<List<Object[]>> getOrderDetails(@RequestParam("id") Long orderId) {
        try {
            List<Object[]> list = orderDetailService.readDishesByOrderId(orderId);
            return new ResponseEntity<>(list, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id) {
        try {
            Order order = orderService.readOrderById(id);
            return new ResponseEntity<>(order, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
