import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import SearchBar from './SearchBar';

export default function SearchBox() {
  const [spread, setSpread] = useState<boolean>(false);

  const spreacBoxClose = () => {
    setSpread(false);
  };

  return (
    <Container onClick={spreacBoxClose}>
      <TitleStyle>
        <div>국내 모든 임상시험 검색하고</div>
        <div>온라인으로 참여하기</div>
      </TitleStyle>
      <SearchBar spread={spread} setSpread={setSpread} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
  width: 100vw;
  padding: 80px 0 160px;
  margin: 0 auto;
  background-color: #c9e9ff;
`;

const TitleStyle = styled.h1`
  font-size: 2.2rem;
  text-align: center;
  line-height: 1.6;
  font-weight: 800;
`;
