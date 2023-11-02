import classNames from 'classnames/bind';
import {useContext } from 'react';

import Input from '~/components/Input';
import Button from '~/components/Button';

import styles from './Signin.module.scss';
import logo from '~/assets/images/logo.png';

import { AppContext } from '~/AppContext';
const cx = classNames.bind(styles);

function Signin() {

    const { toast } = useContext(AppContext);
    function handleClickValidation() {
        var user = document.getElementById('username').value;
        var pass = document.getElementById('password').value;
        if(user === "") {
            toast('Please enter username', { type: 'error' });
        }
        else if (pass === "") {
            toast('Please enter password', { type: 'error' });
        }
        else if(user === "admin" || pass === "1234") {
            toast('Login successfull', { type: 'success' });
        }
        else {
            toast("Login Fail", {
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
                <p className="note">Please signin access to System!</p>
                <div className={cx('input-group')}>
                    <label htmlFor="username" className={cx('label')}>
                        Username
                    </label>
                    <Input
                        id="username"
                        placeholder="Please enter username"
                    />
                </div>
                <div className={cx('input-group')}>
                    <label htmlFor="password" className={cx('label')}>
                        Password
                    </label>
                    <Input 
                        id="password"
                        placeholder="Please enter password"
                    />
                </div>
                <div className={cx('button')}>
                    <Button primary large onClick={handleClickValidation}>
                        Signin
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Signin;
