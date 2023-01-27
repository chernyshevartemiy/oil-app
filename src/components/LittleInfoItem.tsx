import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
`;

const Icon = styled.img`
  height: 50px;
  padding-right: 20px;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 24px;
  font-weight: var(--fw-bold);
`;

const Stick = styled.div`
  height: 2px;
  width: 20px;
  margin: 7px 0 21px 0;
  background-color: var(--bg-color);
`;

const Subtitle = styled.div`
  color: var(--subtitle-color);
`;

type ILittleInfoItem = {
  img: string;
};

export const LittleInfoItem: React.FC<ILittleInfoItem> = ({ img }) => {
  return (
    <Item>
      <Icon src={img} />
      <ItemInfo>
        <Title>Buliding new homes</Title>
        <Stick />
        <Subtitle>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea libero
          vero, fugiat eum repellat odit enim sed voluptas. Laborum, excepturi?
        </Subtitle>
      </ItemInfo>
    </Item>
  );
};
