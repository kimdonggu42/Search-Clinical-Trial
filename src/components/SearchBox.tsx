import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

export default function SearchBox() {
  return (
    <Container>
      <TitleStyle>{'국내 모든 임상시험 검색하고\n온라인으로 참여하기'}</TitleStyle>
      <SearchBar />
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
  white-space: pre-line;
  font-weight: 800;
`;
