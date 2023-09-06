import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../assets/images/search.svg';
import searchIcon from '../assets/images/search.svg';

export default function SearchBar() {
  return (
    <Container>
      <SearchInput placeholder="질환명을 입력해 주세요." />
      <SearchButton>
        <span>검색버튼</span>
        <SearchIcon />
      </SearchButton>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 490px;
  padding: 10px 8px 10px 24px;
  border-radius: 42px;
  border: 2px solid white;
  background-color: white;

  &::before {
    content: '';
    width: 1.125rem;
    height: 1.125rem;
    margin-right: 12px;
    filter: invert(77%) sepia(13%) saturate(189%) hue-rotate(169deg) brightness(90%) contrast(89%);
    background-image: url(${searchIcon});
  }

  &:focus-within {
    border-color: #007bea;

    &::before {
      display: none;
    }
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding-right: 25px;
  outline: none;
  border: none;
  font-size: 1.125rem;

  &::placeholder {
    color: rgba(147, 155, 146, 1);
  }

  &:focus {
    &::placeholder {
      opacity: 0;
    }
  }
`;

const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #007bea;
  border-radius: 50px;
  width: 48px;
  height: 48px;
  border: none;
  cursor: pointer;

  > span {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  > svg {
    width: 21px;
    height: 21px;
    fill: white;
  }
`;
