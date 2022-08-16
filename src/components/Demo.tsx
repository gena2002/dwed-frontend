import React from "react";
import styled from "styled-components";

export const Demo = () => {
    return (
        <GroupRoot>
            <Image1 src={`https://file.rendit.io/n/xuhik9HdTjO7JunnUgo6.svg`}/>
            <CardBody>
                <Color>
                    <Text1>Вход</Text1>
                    <Text2>Телефон</Text2>
                    <Text3>+999 __ ___ __ __</Text3>
                    <Line src={`https://file.rendit.io/n/DDiRXLuGLWQwkZkdM0XV.svg`}/>
                    <WhiteFlexColumn>
                        <Content>ВОЙТИ</Content>
                    </WhiteFlexColumn>
                    <Text4
                        placeholder={`Login by username and password`}
                        type={`password`}
                    />
                </Color>
            </CardBody>
            <Element2>
                У меня нет аккаунта. <Element1>Зарегистрироватся</Element1>
            </Element2>
        </GroupRoot>
    );
};
const GroupRoot = styled.div`
  width: 432px;
  height: 384px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Image1 = styled.img`
  width: 48px;
  height: 48px;
  align-self: flex-end;
  margin: 0px 0px 16px 0px;
`;
const CardBody = styled.div`
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin: 0px 0px 22px 0px;
`;
const Color = styled.div`
  box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.05);
  height: 230px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 24px;
`;
const Text1 = styled.div`
  font-size: 24px;
  font-family: Golos;
  line-height: 24px;
  color: #262626;
  align-self: flex-start;
  margin: 0px 0px 24px 0px;
`;
const Text2 = styled.div`
  font-size: 12px;
  font-family: Golos;
  line-height: 20px;
  color: #1da1f2;
  align-self: flex-start;
  margin: 0px 0px 6px 0px;
`;
const Text3 = styled.div`
  font-size: 14px;
  font-family: Golos;
  line-height: 20px;
  color: #262626;
  align-self: flex-start;
  margin: 0px 0px 11.75px 0px;
`;
const Line = styled.img`
  width: 384px;
  height: 0.5px;
  margin: 0px 0px 31.75px 0px;
`;
const WhiteFlexColumn = styled.button`
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin: 0px 0px 24px 0px;
  padding: 0px;
  border-width: 0px;
  box-sizing: content-box;
  cursor: pointer;

  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
const Content = styled.div`
  text-align: center;
  display: flex;
  font-size: 16px;
  font-family: Golos;
  line-height: 16px;
  text-transform: uppercase;
  color: #ffffff;
  width: 190px;
  height: 16px;
  background-color: #1da1f2;
  flex-direction: row;
  justify-content: center;
  border-radius: 4px;
  padding: 16px 0px;
`;
const Text4 = styled.input`
  font-size: 16px;
  font-family: Golos;
  line-height: 20px;
  color: #1da1f2;
  padding: 0px;
  border-width: 0px;
  background: none;
  width: 100%;

  :: placeholder {
    color: #1da1f2;
  }

  display: inline-block;
  outline-width: 0px;
`;
const Element2 = styled.div`
  text-align: center;
  font-size: 14px;
  font-family: Golos;
  letter-spacing: 0.25px;
  line-height: 20px;
  color: #ffffff;
  white-space: pre-wrap;
`;
const Element1 = styled.div`
  font-size: 14px;
  font-family: Golos;
  text-decoration: underline;
  letter-spacing: 0.25px;
  line-height: 20px;
  color: #ffffff;
  display: contents;
`;
