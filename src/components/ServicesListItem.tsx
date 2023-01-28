import styled from 'styled-components';

const ListItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  margin-bottom: 60px;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

type IImg = {
  order: string;
};

const Img = styled.img<IImg>`
  max-width: 100%;
  margin: 0 auto;
  order: 0;
  @media (min-width: 1024px) {
    margin: 0;
    order: ${({ order }) => order};
  }
`;

const ItemTitle = styled.span`
  margin-bottom: 10px;
  font-weight: var(--fw-bold);
  font-size: 34px;
`;

const ItemInfo = styled.span`
  display: flex;
  flex-direction: column;
`;

const ItemText = styled.span`
  color: var(--subtitle-color);
  font-size: 18px;
  margin-bottom: 20px;
`;

const Stick = styled.div`
  height: 3px;
  width: 50px;
  background-color: var(--bg-color);
  margin-bottom: 20px;
`;

type IServicesListItem = {
  img: string;
  title: string;
  order: string;
};

export const ServicesListItem: React.FC<IServicesListItem> = ({
  img,
  title,
  order,
}) => {
  return (
    <ListItem>
      <Img order={order} src={img} />
      <ItemInfo>
        <ItemTitle>{title}</ItemTitle>
        <Stick />
        <ItemText>
          Exponent WordPress theme is insanely flexible and amazingly easy to
          use. This alone would be enough for a 5 star rating. On top of a great
          tool is even better customer support. The only theme you will ever
          need.
        </ItemText>
        <ItemText>
          We collaborate with organizations that are keen to transform the legal
          industry with tech. Using the legal design process, we can help you
          ideate, build prototypes.
        </ItemText>
      </ItemInfo>
    </ListItem>
  );
};
