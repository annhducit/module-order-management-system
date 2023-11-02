import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import { Grid, Row, Column } from '~/components/Grid';
import Sidebar from '~/components/Sidebar';
import Button from '~/components/Button';
import Modal from '~/components/Modal';

import styles from './BillManagement.module.scss';
import { formatVietnameseDate } from '~/utils/dateUtils.js';
import useModal from '~/hooks/useModal';
import shiftsService from '~/services/shiftsService';
import billsService from '~/services/billsService';

import BillDetails from './BillDetails';

const cx = classNames.bind(styles);

function BillManagement() {
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
    const [shifts, setShifts] = useState([]);
    const [bills, setBills] = useState([]);
    const [selectedShiftId, setSelectedShiftId] = useState();
    const [selectedBillId, setSelectedBillId] = useState();
    const [billDetails, setBillDetails] = useState([]);
    const [modalShow, toggleModalShow] = useModal(false);

    const billsTotal = bills.reduce((total, bill) => total + bill.total, 0);
    const shiftName =
    shifts.length > 0
    ? shifts.find((s) => s.id === selectedShiftId).name
    : '';
    
    const selectedBill = bills.find(b => b.id === selectedBillId);

    // Render shifts
    useEffect(() => {
        let ignore = false;

        const fetchApi = async () => {
            const shiftsData = await shiftsService.getAll();
            if (!ignore) {
                setShifts(shiftsData);
                setSelectedShiftId(shiftsData[0] ? shiftsData[0].id : null);
            }
        };
        fetchApi();

        return () => (ignore = false);
    }, []);

    // Render bills corresponding to selected shift id
    useEffect(() => {
        let ignore = false;

        const fetchApi = async () => {
            const billsData = await billsService.get(selectedShiftId, date);
            if (!ignore) {
                setBills(billsData);
            }
        };
        selectedShiftId && fetchApi();

        return () => (ignore = true);
    }, [selectedShiftId, date]);

    // Render bill details corresponding to selected bill id
    useEffect(() => {
        let ignore = false;

        const fetchApi = async () => {
            const billDetailsData = await billsService.getDetails(
                selectedBillId,
            );
            if (!ignore) {
                setBillDetails(billDetailsData);
            }
        };
        selectedBillId && fetchApi();

        return () => (ignore = true);
    }, [selectedBillId]);

    // Handle click detail for corresponding to bill id
    function handleClickDetail(id) {
        setSelectedBillId(id);
        toggleModalShow();
    }

    return (
        <div className={cx('container')}>
            <Grid className={cx('wide')}>
                <h2 className={cx('heading')}>Bill Management</h2>
                <Row className={cx('gutter')}>
                    <Column className={cx('l-3')}>
                        <Sidebar
                            title="Shift"
                            date={date}
                            setDate={setDate}
                            items={shifts}
                            selectedId={selectedShiftId}
                            setSelectedId={setSelectedShiftId}
                        />
                    </Column>
                    <Column className={cx('l-9')}>
                        <div className={cx('header-text')}>
                            <h3>
                                {formatVietnameseDate(date)}: {shiftName}
                            </h3>
                            <h3>Total: {billsTotal}$</h3>
                        </div>
                        <Row className={cx('gutter')}>
                            {bills.map((bill) => (
                                <Column key={bill.id} className={cx('l-6')}>
                                    <div className={cx('content')}>
                                        <div className={cx('content-text')}>
                                            <p className={cx('order-id')}>
                                                <b>Order ID:</b> {bill.orderId}{' '}
                                            </p>
                                            <p className={cx('total')}>
                                                <b>Total:</b> {bill.total}$
                                            </p>
                                            <p className={cx('create-at')}>
                                                <b>Create at:</b>{' '}
                                                {bill.createdAt}
                                            </p>
                                            <p className={cx('payee')}>
                                                <b>Payee:</b> {bill.payee}
                                            </p>
                                        </div>
                                        <div className={cx('content-btn')}>
                                            <Button
                                                primary
                                                small
                                                onClick={() =>
                                                    handleClickDetail(bill.id)
                                                }
                                            >
                                                Detail
                                            </Button>
                                        </div>
                                    </div>
                                </Column>
                            ))}
                        </Row>
                    </Column>
                </Row>
            </Grid>

            <Modal
                id="modal"
                className={cx('bill-details-modal')}
                show={modalShow}
                toggle={toggleModalShow}
                close
            >
                <BillDetails bill={selectedBill} data={billDetails} />
            </Modal>
        </div>
    );
}

export default BillManagement;