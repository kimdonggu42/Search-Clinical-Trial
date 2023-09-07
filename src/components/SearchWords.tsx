import React from 'react';
import { KeyboardEvent, useState } from 'react';
import { styled } from 'styled-components';
import searchIcon from '../assets/images/search.svg';
import { SearchListProps } from '../utils/type';

export default function SearchWords({ listRef, nowWord, words, searchKeyWord }: SearchListProps) {
  const [tabIndex, setTabIndex] = useState(-1);

  const moveList = (e: KeyboardEvent<HTMLUListElement>) => {
    if (e.key === 'ArrowUp') {
      setTabIndex(pre => (pre <= 0 ? words.length - 1 : pre - 1));
    } else if (e.key === 'ArrowDown') {
      setTabIndex(pre => (pre >= words.length - 1 ? 0 : pre + 1));
    }
  };

  return (
    <WordsBox
      ref={listRef}
      tabIndex={0}
      onFocus={() => setTabIndex(0)}
      onBlur={() => setTabIndex(-1)}
      onKeyUp={e => e.key === 'Enter' && searchKeyWord(words[tabIndex].sickNm)}
      onKeyDown={moveList}
    >
      {words.map((word, i) => (
        <li key={word.sickCd || word.sickNm}>
          <SearchWord
            bgcolor={tabIndex === i ? 'rgba(238, 248, 255, 1)' : undefined}
            onClick={() => searchKeyWord(word.sickNm)}
          >
            <span>
              {nowWord
                ? word.sickNm
                    .replaceAll(nowWord, `*#${nowWord}*#`)
                    .split('*#')
                    .map((el, i) => (el === nowWord ? <b key={i}>{el}</b> : el))
                : word.sickNm}
            </span>
          </SearchWord>
        </li>
      ))}
    </WordsBox>
  );
}

const WordsBox = styled.ul`
  display: flex;
  flex-direction: column;

  &:focus {
    outline: none;
  }
`;

export const SearchWord = styled.p<{ bgcolor?: string }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: normal;
  margin: 0 -1.5rem;
  padding: 0.5rem 1.5rem;
  background-color: ${props => props.bgcolor || 'inherit'};

  &:hover {
    background-color: rgba(238, 248, 255, 1);
  }

  &::before {
    content: '';
    width: 1.125rem;
    height: 1.125rem;
    margin-right: 12px;
    filter: invert(77%) sepia(13%) saturate(189%) hue-rotate(169deg) brightness(90%) contrast(89%);
    background-image: url(${searchIcon});
  }
`;
