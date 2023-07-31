interface PageInfo {
  total: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
  perPage: number;
}

interface Title {
  romaji: string;
}

interface CoverImage {
  large: string;
}

export interface Media {
  id: number;
  title: Title;
  coverImage: CoverImage;
  types: string;
  format: string;
  genres: string[];
  averageScore: number;
}

interface PageData {
  pageInfo: PageInfo;
  media: Media[];
}

export interface QueryResponses {
  Page: PageData;
}

export interface QueryVariables {
  id?: number;
  page?: number;
  perPage?: number;
  search?: string;
}
