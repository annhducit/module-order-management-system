package project.moduleordermanagementsystembe.services.Impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.moduleordermanagementsystembe.models.Table;
import project.moduleordermanagementsystembe.repositories.TableRepository;
import project.moduleordermanagementsystembe.services.ITableService;

import java.util.List;
@Service
@RequiredArgsConstructor
public class TableService implements ITableService {

    private final TableRepository tableRepository;
    @Override
    public Table createTable(Table table) {
        return tableRepository.save(table);
    }

    @Override
    public List<Table> readAllTables() {
        return tableRepository.findAll();
    }

    @Override
    public Table readTableById(Long id) {
        return tableRepository.findById(id).get();
    }

    @Override
    public void deleteTableById(Long id) {
        tableRepository.deleteById(id);
    }
    @Override
    public Table updateTableById(Long id, Table Table) {
        Table tableNew = readTableById(id);
        tableNew.setNumber(tableNew.getNumber());
        tableNew.setCapacity(tableNew.getCapacity());
        tableNew.setOrder(tableNew.getOrder());
        return tableRepository.save(tableNew);
    }

    @Override
    public Table readOrderById(Long orderId) {
        return tableRepository.readTableByOrder(orderId);
    }
}
