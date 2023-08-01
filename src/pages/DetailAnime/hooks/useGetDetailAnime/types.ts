export interface Title {
  romaji: string;
  english: string;
  native: string;
}

export interface CoverImage {
  extraLarge: string;
  large: string;
  medium: string;
  color: string;
}

export interface StartDate {
  year: number;
  month: number;
  day: number;
}

export interface EndDate {
  year: number;
  month: number;
  day: number;
}

export interface Media {
  id: number;
  title: Title;
  description: string;
  episodes: number;
  format: string;
  duration: number;
  coverImage: CoverImage;
  bannerImage: string;
  startDate: StartDate;
  endDate: EndDate;
  popularity: number;
  meanScore: number;
  averageScore: number;
  genres: string[];
}

export interface QueryResponses {
  Media: Media;
}

export interface QueryVariables {
  id: number;
}
