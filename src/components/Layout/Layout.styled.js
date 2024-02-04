import styled from 'styled-components';

export const SectionStyled = styled.section`
  background-repeat: no-repeat;
  background-position: 80% 30%;
  background-image: ${(props) => props.$backgroundImage || 'none'};
  background-size: 50%;
`;

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 375px;
  margin: 0 auto;
  width: 100%;
  height: 'auto';
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 40px;
  gap: 50px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: '50px';
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 128px;
    padding-right: 128px;
  }
`;