import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const Tool = styled.div`
  background-color: ${theme.colors.black};
`;

export const StyledImage = styled.img`
  width: 100%;
`;

export const Writing = styled.p`
  color: #b8b8b8;
  font-size: 1rem;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 1.4rem;
  word-wrap: break-word;
  text-align: center;
  margin-top: 1rem;
`;

export const Function = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`;

export const Tools = styled.ul`
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
  align-items: center;
`;

export const Anrdma = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const icons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Name = styled.p`
  text-align: right;
  color: #fefefe;
  font-size: 2rem;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 2.4rem;
  word-wrap: break-word;
`;

export const Num = styled.p`
  color: ${theme.colors.gray};
  ${theme.font.mobile.r12};
  word-wrap: break-word;
`;

export const InfoWrap = styled.div`
  padding: 1.2rem;
`;

export const Tags = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 1rem;
`;

export const Tag = styled.div`
  ${theme.font.mobile.b12};
  color: ${theme.colors.white};
`;

export const One = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const InfoTitle = styled.p`
  color: #797979;
  ${theme.font.mobile.r14};
  word-wrap: break-word;
  width: 25%;
`;

export const Atname = styled.p`
  color: #fefefe;
  font-size: 1.3rem;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 2rem;
  word-wrap: break-word;
`;

export const Two = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const Work = styled.p`
  color: #797979;
  font-size: 1.3rem;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 2rem;
  word-wrap: break-word;
`;

export const Cen = styled.p`
  color: #fefefe;
  font-size: 1.3rem;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 2rem;
  word-wrap: break-word;
`;

export const Year = styled.p`
  color: #fefefe;
  font-size: 1.3rem;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 2rem;
  word-wrap: break-word;
`;

export const Three = styled.div`
  display: flex;
  margin-top: 1rem;
  word-break: keep-all;
`;

export const Ex = styled.p`
  color: #797979;
  font-size: 1.3rem;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 2rem;
`;

export const Artwork = styled.p`
  width: 70%;
  color: #fefefe;
  font-size: 1.3rem;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 2rem;
`;

export const Price = styled.p`
  color: #fefefe;
  font-size: 2rem;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 2.4rem;
  word-wrap: break-word;
  margin-top: 3rem;
  margin-bottom: 9rem;
`;

export const Btn = styled.button`
  cursor: pointer;
  background-color: #6e28ac;
  color: #fefefe;
  width: 100%;
  height: 6.5rem;
  font-weight: 700;
  font-size: 2rem;
  margin-top: 15rem;
  border: none;
  position: fixed;
  bottom: 0;
  left: 0;
`;
