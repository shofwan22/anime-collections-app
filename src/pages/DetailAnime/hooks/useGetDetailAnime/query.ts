import { gql } from '@apollo/client';

export const GET_DETAIL_ANIME = gql`
  query ($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      title {
        romaji
        english
        native
      }
      description
      episodes
      format
      duration
      coverImage {
        extraLarge
        large
        medium
        color
      }
      bannerImage
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      popularity
      meanScore
      averageScore
      genres
    }
  }
`;
