import styled from 'styled-components';

export const CardWrapper = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 274px;

  &:last-child {
    margin-top: auto;
  }
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
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.4s var(--timing-function);
  &:hover {
    transform: scale(1.1);
  }
`;

export const ButtonFavorite = styled.button`
  position: absolute;
  right: 14px;
  top: 14px;
  align-items: center;
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;
`;

export const FavoriteImg = styled.svg`
  width: 18px;
  height: 18px;
  fill: var(--color-accent);
  stroke: var(--color-accent);
  transition: transform 0.4s var(--timing-function);
  &:hover {
    transform: scale(1.1);
  }
`;

export const NoFavoriteImg = styled.svg`
  width: 18px;
  height: 18px;
  fill: none;
  stroke: rgba(255, 255, 255, 0.8);
  transition: transform 0.4s var(--timing-function);
  &:hover {
    transform: scale(1.1);
  }
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  margin-bottom: 8px;
`;

export const MainTextWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const MainText = styled.h2`
  color: var(--color-text-main);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  > span {
    color: var(--color-accent);
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  margin-bottom: 4px;
  width: 100%;
  justify-content: flex-start;

  &:last-child {
    margin-bottom: 28px;
  }
`;

export const Info = styled.p`
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
    flex-shrink: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const NoImage = styled.svg`
  fill: red;
  stroke: blue;
  width: 38px;
  height: 38px;
`;

export const LinkButton = styled.a`
  display: block;
  color: var(--color-main);
  font-weight: 600;
  line-height: 20px;
  padding: 12px 99px;
  border-radius: 12px;
  background-color: var(--color-accent);
  transition: background-color 0.3s var(--timing-function);
  border: none;
  cursor: pointer;
  &:hover {
    background-color: var(--color-hover);
  }
`;