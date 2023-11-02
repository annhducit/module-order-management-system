import { useState, useEffect, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Customer.module.scss';

import { AppContext } from '~/AppContext';
import { CustomerContext } from './CustomerContext';

import cartService from '~/services/cartService';
import useCredentials from '~/hooks/useCredentials';

const cx = classNames.bind(styles);

function Customer() {
    const { orderId, saveCredentials, clearCredentials } = useCredentials();
    const [cart, setCart] = useState([]);
    const [isPaid, setIsPaid] = useState(false);
    const { toast } = useContext(AppContext);

    // Render lastest cart data
    useEffect(() => {
        let ignore = false;

        const fetchApi = async () => {
            try {
                const cartData = await cartService.retrieve(orderId);
                if (!ignore) {
                    setCart(cartData);
                }
            } catch (err) {
                toast('An error occurred', {
                    type: 'error',
                });
            }
        };
        orderId && fetchApi();

        return () => {
            ignore = true;
        };
    }, [orderId, toast]);

    // Handle add to cart
    async function addToCart(info) {
        try {
            await cartService.add(orderId, info);
            const cartData = await cartService.retrieve(orderId);
            setCart(cartData);
            toast('Add to cart succesfully!', {
                type: 'success',
            });
        } catch (err) {
            toast('Add to cart failed!', {
                type: 'error',
            });
        }
    }

    return (
        <div className={cx('container')}>
            <CustomerContext.Provider
                value={{
                    orderId,
                    saveCredentials,
                    clearCredentials,
                    cart,
                    addToCart,
                    isPaid,
                    setIsPaid,
                }}
            >
                <Outlet />
            </CustomerContext.Provider>
        </div>
    );
}

export default Customer;
