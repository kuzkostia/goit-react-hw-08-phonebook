import styled from '@emotion/styled';

export const UserNavigarion = styled.div`
  display: flex;
  margin-left: auto;
`;
export const UserWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;
  margin-right: 32px;

  > div {
    display: grid;
    align-items: center;
    gap: 6px;
  }
`;

export const UserName = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;

  text-align: right;

  color: #000000;
`;
export const UserEmail = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;

  text-align: right;

  color: #8f8f8f;
`;

export const UserAvatar = styled.div`
  width: 58px;
  height: 58px;

  background-color: #efefef;
  border-radius: 14px;
`;
export const LogOutBtn = styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;

  padding: 18px 26px;

  color: #ffffff;
  background-color: lightblue;

  border: 1px solid #000000;
  border-radius: 14px;

  cursor: pointer;

  :hover,
  :focus {
    color: lightblue;
    background: #ffffff;
  }
`;
