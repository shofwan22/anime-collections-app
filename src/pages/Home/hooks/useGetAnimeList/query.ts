import { gql } from '@apollo/client';

export const GET_ANIME_LIST = gql`
  query ($id: Int, $page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(id: $id, search: $search) {
        id
        title {
          romaji
        }
        coverImage {
          large
        }
        type
        format
        genres
        averageScore
      }
    }
  }
`;
