import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import Input from '~/components/Input';
import Button from '~/components/Button';

import styles from './OpenTable.module.scss';
import logo from '~/assets/images/logo.png';

import openTableService from '~/services/openTableService';
import { CustomerContext } from '../CustomerContext';
import { AppContext } from '~/AppContext';

const cx = classNames.bind(styles);

function OpenTable() {
    const [tableNumber, setTableNumber] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const { toast } = useContext(AppContext);
    const { orderId, saveCredentials } = useContext(CustomerContext);
    const navigate = useNavigate();

    useEffect(() => {
        orderId && navigate('/dishes');
    }, [orderId, navigate]);

    async function handleClickOpenTable() {
        try {
            const data = await openTableService.openTable({
                tableId: parseInt(tableNumber),
                customerPhone,
            });
            saveCredentials(data);
            navigate('/dishes');
        } catch (err) {
            toast(err.message, {
                type: 'error',
            });
        }
    }

    return (
        <div className={cx('container')}>
            <div className={cx('logo')}>
                <img src={logo} className={cx('logo-image')} alt="Logo" />
            </div>
            <div className={cx('content')}>
                <div>
                    <h2>Welcome to my Restaurant</h2>
                </div>
                <p className="note">Have a nice day with your meal!</p>
                <div className={cx('input-group')}>
                    <label htmlFor="table-number" className={cx('label')}>
                        Table number
                    </label>
                    <Input
                        id="table-number"
                        value={tableNumber}
                        onChange={(e) => setTableNumber(e.target.value)}
                    />
                </div>
                <div className={cx('input-group')}>
                    <label htmlFor="customer-phone" className={cx('label')}>
                        Customer phone
                    </label>
                    <Input
                        id="customer-phone"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                    />
                </div>
                <div className={cx('button')}>
                    <Button large primary onClick={handleClickOpenTable}>
                        Open Table
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default OpenTable;
