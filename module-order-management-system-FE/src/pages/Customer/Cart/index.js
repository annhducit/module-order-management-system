import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmileBeam } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';

import { Grid, Row, Column } from '~/components/Grid';
import Button from '~/components/Button';
import Modal from '~/components/Modal';
import OrderItem from './Order_Item';

import styles from './Cart.module.scss';

import useModal from '~/hooks/useModal';
import { AppContext } from '~/AppContext';
import { CustomerContext } from '~/pages/Customer/CustomerContext';

import billsService from '~/services/billsService';

const cx = classNames.bind(styles);

function Cart() {
    const { toast } = useContext(AppContext); // <=== Change app context to customer context
    const { orderId, clearCredentials, cart, isPaid, setIsPaid } = useContext(CustomerContext);
    const [modalShow, toggleModalShow] = useModal(false);
    const navigate = useNavigate();

    const subtotal = cart.reduce(
        (acc, data) => acc + data.quantity * data.price,
        0,
    );
    const discount = 0;
    const tax = 0;
    const total = subtotal + discount + tax;

    // Authenticate the user
    useEffect(() => {
        orderId || navigate('/');
    }, [orderId, navigate]);

    // Handle payment request
    function handleClickCheckout() {
        const fetchApi = async () => {
            try {
                await billsService.create({ orderId });
                setIsPaid(true);
                toast('Checkout request successfully', { type: 'success' });
                toggleModalShow();
            } catch (err) {
                console.log(err.message);
                toast('Failed to request checkout!', { type: 'error' });
            }
        };
        !isPaid && fetchApi();
    }

    function handleClickConfirm() {
        clearCredentials();
    }

    return (
        <div className={cx('container')}>
            <Grid className={cx('wide')}>
                <Row>
                    <Column className={cx('l-8')}>
                        <div className={cx('content_left')}>
                            <p className={cx('cart-heading')}>Cart</p>
                            {cart.map((data, index) => (
                                <OrderItem key={index} data={data} />
                            ))}
                        </div>
                    </Column>
                    <Column className={cx('l-4')}>
                        <div className={cx('content_right')}>
                            <Row>
                                <Column className={cx('l-12')}>
                                    <div className={cx('content')}>
                                        <div className={cx('item_left')}>
                                            <h3 className={cx('subtotal')}>
                                                Subtotal
                                            </h3>
                                            <p className={cx('discount')}>
                                                Discount
                                            </p>
                                            <p className={cx('tax')}>Tax</p>
                                        </div>
                                        <div className={cx('item_right')}>
                                            <h3 className={cx('item_price')}>
                                                ${subtotal}
                                            </h3>
                                            <p>(0%) - ${discount}</p>
                                            <p
                                                className={cx(
                                                    'item_price-small',
                                                )}
                                            >
                                                ${tax}
                                            </p>
                                        </div>
                                    </div>
                                    <p className={cx('line')}>
                                        ----------------------------------------------------------------------
                                    </p>
                                </Column>
                            </Row>
                            <Row>
                                <Column className={cx('l-12')}>
                                    <div className={cx('content')}>
                                        <div className={cx('item_left')}>
                                            <h3>Total</h3>
                                        </div>
                                        <div className={cx('total_price')}>
                                            <h3>${total}</h3>
                                        </div>
                                    </div>
                                </Column>
                            </Row>
                            <Row>
                                <Column className={cx('l-12')}>
                                    <div className={cx('button')}>
                                        <div className={cx('btn')}>
                                            <Button
                                                primary
                                                className={cx('btn_checkout')}
                                                disabled={isPaid}
                                                onClick={handleClickCheckout}
                                            >
                                                Checkout
                                            </Button>
                                        </div>
                                        <div className={cx('btn')}>
                                            <Button
                                                className={cx('btn_continue')}
                                                outline
                                                disabled={isPaid}
                                                to={!isPaid && '/dishes'}
                                            >
                                                Continue ordering
                                            </Button>
                                        </div>
                                    </div>
                                </Column>
                            </Row>
                        </div>
                    </Column>
                </Row>
            </Grid>

            <Modal
                id="modal"
                className={cx('modal-checkout-cart')}
                show={modalShow}
                toggle={toggleModalShow}
                close
            >
                <div className={cx('dialog')}>
                    <FontAwesomeIcon
                        className={cx('dialog-icon')}
                        icon={faFaceSmileBeam}
                    />
                    <h4 className={cx('dialog-title')}>
                        Hooray! Your order
                        <br />
                        has been requested for payment.
                    </h4>
                    <div className={cx('dialog-subtitle')}>
                        Please wait for a moment, the payment <br /> staff will
                        come and complete the procedure
                    </div>
                    <Button className={cx('confirm-btn')} primary onClick={handleClickConfirm}>Confirm payment</Button>
                </div>
            </Modal>
        </div>
    );
}

export default Cart;
