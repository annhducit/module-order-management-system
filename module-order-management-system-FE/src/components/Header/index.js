import { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    faCartShopping,
    faCircleQuestion,
    faCircleUser,
    faClipboardList,
    faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import { Grid } from '~/components/Grid';

import styles from './Header.module.scss';
import image from '~/assets/images/logo.png';

import { MainLayoutContext } from '~/layouts/MainLayout/MainLayoutContext';

const cx = classNames.bind(styles);

function Header() {
    const [,] = useState('');
    const { setSearch, searchInputValue, setSearchInputValue } =
        useContext(MainLayoutContext);

    function handleClickSearch() {
        setSearch(searchInputValue);
    }

    const location = useLocation();
    const customerPages = ['/dishes', '/cart'];
    const cookerPages = ['/cooker', '/cooker/dishes'];

    const leftContent = customerPages.includes(location.pathname) && (
        <>
            <div className={cx('table')}>
                <FontAwesomeIcon
                    className={cx('table-icon')}
                    icon={faUtensils}
                />
                <span className={cx('table-text')}>Table 5A</span>
            </div>
            <Option
                className={cx('control')}
                text="Question"
                icon={faCircleQuestion}
            />
        </>
    );

    const rightContent = customerPages.includes(location.pathname) ? (
        <>
            <div className={cx('search-bar')}>
                <input
                    className={cx('search-input')}
                    type="text"
                    placeholder="What would you like to search?"
                    value={searchInputValue}
                    onChange={(e) => setSearchInputValue(e.target.value)}
                />
                <button className={cx('search-btn')} onClick={handleClickSearch}>Search</button>
            </div>
            <Option
                className={cx('control')}
                text="Dishes"
                icon={faUtensils}
                to="/dishes"
            />
            <Option
                className={cx('control')}
                text="Cart"
                icon={faCartShopping}
                to="/cart"
            />
        </>
    ) : cookerPages.includes(location.pathname) ? (
        <>
            <Option
                className={cx('control')}
                text="Orders"
                icon={faClipboardList}
                to="/cooker"
            />
            <Option
                className={cx('control')}
                text="Dishes"
                icon={faUtensils}
                to="/cooker/dishes"
            />
        </>
    ) : (
        <Option
            className={cx('control')}
            text="Bills"
            icon={faClipboardList}
            to="/admin"
        />
    );

    return (
        <div className={cx('container')}>
            <Grid className={cx('nav', 'wide')}>
                <div className={cx('left')}>
                    <img className={cx('logo')} src={image} alt="logo" />
                    {leftContent}
                </div>
                <div className={cx('right')}>
                    {rightContent}
                    <Option
                        className={cx('control')}
                        text="User"
                        icon={faCircleUser}
                    />
                </div>
            </Grid>
        </div>
    );
}

export default Header;

function Option({ className, text, icon, to }) {
    return (
        <Link to={to} className={cx('option', className)}>
            <FontAwesomeIcon className={cx('icon')} icon={icon} />
            <span className={cx('text')}>{text}</span>
        </Link>
    );
}
