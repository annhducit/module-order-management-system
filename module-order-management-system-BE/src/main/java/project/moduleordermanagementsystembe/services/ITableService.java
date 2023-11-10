package project.moduleordermanagementsystembe.services;

import project.moduleordermanagementsystembe.models.Table;

import java.util.List;

public interface ITableService {
    Table createTable(Table Table);

    List<Table> readAllTables();

    Table readTableById(Long id);

    void deleteTableById(Long id);

    Table updateTableById(Long id, Table Table);

    Table readOrderById(Long orderId);
}
