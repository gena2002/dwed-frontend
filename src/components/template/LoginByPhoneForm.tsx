import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import {TextField} from "@mui/material";
import {LoadingButton} from '@mui/lab';
import MyLink from "../UI/MyLink";
import InputMask from "react-input-mask";

import {Context} from '../../context';
import {observer} from "mobx-react-lite";

const LoginByPhoneForm = () => {
    const [phone, setPhone] = useState<string>('');
    const {store} = useContext(Context);

    function submit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        const _phone = phone.replace(/[\s.?*^$[\]\\(){}|-]/g, "")
        store.login(_phone)
        store.getAccount()
    }

    // useEffect(() => {
    //     console.log(store.isLoading)
    // }, [store.isLoading]);

    return (
        <Root onSubmit={submit}>
            <Title>Вход</Title>

            <InputMask
                mask="+\9\98 (99) 999 99 99"
                value={phone}
                disabled={false}
                onChange={(e) => setPhone(e.target.value)}
            >
                <TextField label="Телефон"
                           helperText="Введите номер телефона"
                           required
                           fullWidth/>
            </InputMask>


            <EnterButton type={'submit'} loading={store.isLoading} variant="contained">Войти</EnterButton>
            <MyLink>
                Войти с помощью логина и пароля
            </MyLink>
        </Root>
    );
};

export default observer(LoginByPhoneForm);

const Root = styled.form`
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  max-width: 432px;
  background-color: white;
`;

const Title = styled.div`
  margin: 0 0 20px 0;
  font-size: 24px;
  font-weight: 500;
`;

const EnterButton = styled(LoadingButton)`
  margin: 20px auto !important;
  //width: 100% !important;
  display: flex !important;
  padding: 10px 60px !important;
  //padding: 16.5px 14px !important;
  //background-color: #1DA1F2 !important;
`;

