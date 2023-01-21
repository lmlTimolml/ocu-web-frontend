import { gql } from "@apollo/client";

const GET_ALL_SLUGS = gql`
  query {
    posts {
      data {
        attributes {
          slug
          title
          content
          cover {
            data {
            	attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const GET_ALL_POSTS = gql`
  query {
    posts {
      data {
        attributes {
          title
          description
          slug
          cover {
            data {
            	attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const GET_INDIVIDUAL_POST = gql`
  query ($slug: String!) {
    posts(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          content
          cover {
            data {
            	attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const GET_ALL_TAGS = gql`
  query {
    posts {
      data {
        attributes {
          tags {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export { GET_ALL_POSTS, GET_INDIVIDUAL_POST, GET_ALL_SLUGS, GET_ALL_TAGS };
