import classNames from 'classnames/bind';
import styles from './OrderItem.module.scss';
import { Row, Column } from '~/components/Grid';

const cx = classNames.bind(styles);
const baseURL = process.env.REACT_APP_BASE_URL;

function OrderItem({ data }) {

    const statusMap = {
        0: 'Pending',
        1: 'Processing',
        2: 'Completed',
        3: 'Rejected',
    };
    return (
        <div className={cx('order_item')}>
            <Row>
                <Column className={cx('l-3')}>
                    <div className={cx('image_block')}>
                        <img
                            src={baseURL + data.imageLink}
                            alt={data.name}
                            className={cx('image_item')}
                        ></img>
                    </div>
                </Column>
                <Column className={cx('l-6')}>
                    <h3>{data.name}</h3>
                    <p className={cx('price')}>
                        Price: <b>${data.price}</b>
                    </p>
                    <p className={cx('quantity')}>
                        Quantity: <b>{data.quantity}</b>
                    </p>
                </Column>
                <Column className={cx('l-3')}>
                    <h2 className={cx('price_large')}>
                        ${data.quantity * data.price}
                    </h2>
                    <div className={cx('block-status')}>
                        <p
                            className={cx('status', {
                                processing: data.status === 1,
                                completed: data.status === 2,
                                rejected: data.status === 3,
                            })}>
                            {statusMap[data.status]}
                        </p>
                    </div>
                </Column>
            </Row>
        </div>
    );
}

export default OrderItem;
