import React from 'react';
import { styled } from 'styled-components';
import { SearchWord } from './SearchWords';
import SearchWords from './SearchWords';
import { SearchBarProps } from '../utils/type';

const recommendedWords: string[] = ['B형간염', '비만', '관절염', '우울증', '식도염'];

export default function SearchList({
  spread,
  listRef,
  currentSearchTerm,
  recentSearchTerms,
  recommendedSearchTerms,
  searchKeyWord,
}: SearchBarProps) {
  const sliceRecentSearchTerms = recentSearchTerms.slice(0, 7).reverse();
  const sliceRecommendedSearchTerms = recommendedSearchTerms.slice(0, 7);

  return (
    <Box display={spread ? 'block' : 'none'}>
      {currentSearchTerm ? (
        <>
          <div>
            <SearchWord onClick={() => searchKeyWord(currentSearchTerm)}>
              <b>{currentSearchTerm}</b>
            </SearchWord>
          </div>
          <div>
            <SubTitle>
              {sliceRecommendedSearchTerms.length !== 0 ? '추천 검색어' : '검색어 없음'}
            </SubTitle>
            <SearchWords
              listRef={listRef}
              nowWord={currentSearchTerm}
              words={sliceRecommendedSearchTerms}
              searchKeyWord={searchKeyWord}
            />
          </div>
        </>
      ) : (
        <>
          <div>
            <SubTitle>최근 검색어</SubTitle>
            {sliceRecentSearchTerms.length !== 0 ? (
              <SearchWords
                listRef={listRef}
                words={sliceRecentSearchTerms}
                searchKeyWord={searchKeyWord}
              />
            ) : (
              <NoWord>최근 검색어가 없습니다</NoWord>
            )}
          </div>
          <hr />
          <div>
            <SubTitle>추천 검색어로 검색해보세요</SubTitle>
            <WordsBox>
              {recommendedWords.map(word => (
                <KeyWord key={word} role="button" onClick={() => searchKeyWord(word)}>
                  {word}
                </KeyWord>
              ))}
            </WordsBox>
          </div>
        </>
      )}
    </Box>
  );
}

const Box = styled.div<{ display: string }>`
  position: absolute;
  display: ${props => props.display};
  width: 100%;
  padding: 1.5rem;
  left: 0;
  bottom: -0.5rem;
  transform: translateY(100%);
  background-color: white;
  border-radius: 20px;
  box-shadow:
    4px 4px 4px rgba(167, 175, 183, 0.3),
    -2px -2px 2px rgba(167, 175, 183, 0.3);
  font-weight: bold;
  font-size: 1.125rem;

  > hr {
    margin: 1.5rem -1.5rem;
    border: none;
    border-bottom: 1px solid rgba(167, 175, 183, 1);
    opacity: 0.3;
  }
`;

const SubTitle = styled.p`
  color: rgba(147, 155, 146, 1);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const NoWord = styled.p`
  color: rgba(167, 175, 183, 1);
`;

const WordsBox = styled.ul`
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const KeyWord = styled.li`
  background-color: rgba(238, 248, 255, 1);
  color: rgba(0, 123, 233, 0.8);
  font-size: 0.9rem;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  cursor: pointer;
`;
