import { useState } from "react";
import { Outlet } from "react-router-dom";
import classNames from "classnames/bind";

import Header from "../../components/Header";
import styles from "./MainLayout.module.scss";

import { MainLayoutContext } from "./MainLayoutContext";

const cx = classNames.bind(styles);

function MainLayout() {
    const [search, setSearch] = useState("");
    const [searchInputValue, setSearchInputValue] = useState("");

    return (
        <div className={cx("container")}>
            <MainLayoutContext.Provider
                value={{
                    search,
                    setSearch,
                    searchInputValue,
                    setSearchInputValue,
                }}
            >
                <Header />
                <Outlet />
            </MainLayoutContext.Provider>
        </div>
    );
}

export default MainLayout;
