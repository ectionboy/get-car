import styled from 'styled-components';

export const FullCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 24px;
  width: 541px;
  padding: 40px;
  background-color: white;
`;

export const ImgWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 268px;
  border-radius: 14px;
  margin-bottom: 14px;
  background-color: rgba(18, 20, 23, 0.1);
`;

export const Img = styled.img`
  object-fit: cover;
  object-position: 50% 50%;
  width: 100%;
  height: 100%;
`;

export const MainText = styled.h2`
  color: var(--color-text-main);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px;

  > span {
    color: var(--color-accent);
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
  }
`;

export const DescriptionWrapper = styled.ul`
  display: flex;
  margin-bottom: 4px;
  width: 100%;
  justify-content: flex-start;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const DescriptionText = styled.li`
  color: var(--color-text-prescription);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  padding-right: 6px;
  margin-right: 6px;
  border-right: 1px solid rgba(18, 20, 23, 0.1);
  flex-shrink: 0;

  &:last-child {
    border-right: none;
    padding-right: 0px;
    margin-right: 0px;
  }
`;

export const AboutText = styled.p`
  color: var(--color-text-main);
  font-weight: 400;
  line-height: 20px;
  margin-top: 14px;
`;

export const AboutMoreTitle = styled.h3`
  color: var(--color-text-main);
  font-weight: 500;
  line-height: 20px;
  padding-bottom: 8px;
`;

export const RentalList = styled.ul`
  display: flex;
  margin-bottom: 8px;
  gap: 8px;
`;

export const RentalItem = styled.li`
  display: flex;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  border-radius: 34px;
  background-color: #f9f9f9;
`;

export const RentalInfo = styled.p`
  color: #363535;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: -0.24px;
  > span {
    color: var(--color-accent);
    font-weight: 600;
  }
`;

export const ButtonLink = styled.a`
  color: var(--color-main);
  font-weight: 600;
  line-height: 20px;
  display: flex;
  width: fit-content;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background-color: var(--color-accent);
  transition: background-color 0.3s var(--timing-function);
  border: none;

  &:hover {
    background-color: var(--color-hover);
  }
`;