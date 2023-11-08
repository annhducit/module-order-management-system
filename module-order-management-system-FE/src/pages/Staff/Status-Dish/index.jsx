import { useState, useEffect } from "react";

import { Grid, Row, Column } from "../../../components/Grid";
import Sidebar from "../../../components/Sidebar";
import StatusDishItem from "./StatusDishItem";

import styles from "./StatusDish.module.scss";
import classNames from "classnames/bind";

import categoriesService from "../../../services/categoriesService";
import dishesService from "../../../services/dishesService";

const cx = classNames.bind(styles);

function StatusDish() {
    const [categories, setCategories] = useState([]);
    const [dishes, setDishes] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState();

    // Render categories
    useEffect(() => {
        let ignore = false;

        const fetchApi = async () => {
            const data = await categoriesService.getAll();

            if (!ignore) {
                setCategories(data);
                setSelectedCategoryId(data[0].id);
            }
        };
        fetchApi();

        return () => (ignore = true);
    }, []);

    // Render dishes corresponding to selected category id
    useEffect(() => {
        let ignore = false;

        const fetchApi = async () => {
            const data = await dishesService.getByCategoryId(
                selectedCategoryId
            );
            if (!ignore) {
                setDishes(data);
            }
        };
        selectedCategoryId && fetchApi();

        return () => (ignore = true);
    }, [selectedCategoryId]);

    return (
        <div className={cx("container")}>
            <Grid className={cx("wide")}>
                <h2 className={cx("title")}>Dishes Management</h2>
                <Row className={cx("gutter")}>
                    <Column className={cx("l-3")}>
                        <Sidebar
                            title="Categories"
                            items={categories}
                            selectedId={selectedCategoryId}
                            setSelectedId={setSelectedCategoryId}
                        />
                    </Column>
                    <Column className={cx("l-9")}>
                        {dishes.map((dish, index) => (
                            <StatusDishItem
                                key={index}
                                item={dish}
                                setDishes={setDishes}
                            />
                        ))}
                    </Column>
                </Row>
            </Grid>
        </div>
    );
}

export default StatusDish;
