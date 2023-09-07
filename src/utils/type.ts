import { LegacyRef } from 'react';

export interface SickData {
  sickCd?: string;
  sickNm: string;
}

export interface CachingData {
  date: Date;
  data: SickData[];
}

export interface History {
  [key: string]: CachingData;
}

export interface SearchBoxProps {
  spread: boolean;
  setSpread: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SearchBarProps {
  spread: boolean;
  listRef: LegacyRef<HTMLUListElement>;
  currentSearchTerm: string;
  recentSearchTerms: SickData[];
  recommendedSearchTerms: SickData[];
  searchKeyWord: any;
}

export interface SearchListProps {
  listRef: LegacyRef<HTMLUListElement>;
  nowWord?: string;
  words: SickData[];
  searchKeyWord: any;
}
