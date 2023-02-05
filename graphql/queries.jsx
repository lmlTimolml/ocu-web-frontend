import { gql } from "@apollo/client";

/* POSTS */
const GET_ALL_POSTSLUGS = gql`
  query {
    posts {
      data {
        id
        attributes {
          slug
        }
      }
    }
  }
`;

const GET_ALL_POSTS = gql`
  query {
    posts {
      data {
        id
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
        id
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

const GET_ALL_POSTTAGS = gql`
  query {
    posts {
      data {
        id
        attributes {
          tags {
            data {
              attributes {
                name
                slug
              }
            }
          }
        }
      }
    }
  }
`;

export { GET_ALL_POSTS, GET_INDIVIDUAL_POST, GET_ALL_POSTSLUGS, GET_ALL_POSTTAGS };

/* ARTICLES */

const GET_ALL_ARTICLESLUGS = gql`
  query {
    articles {
      data {
        id
        attributes {
          tags {
            data {
              attributes{
                name
                slug
              }
            }
          }
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

const GET_ALL_ARTICLES = gql`
  query {
    articles {
      data {
        id
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
          tags {
            data {
              id
              attributes {
                name
                slug
              }
            }
          }
        }
      }
    }
  }
`;

const GET_INDIVIDUAL_ARTICLE = gql`
  query ($slug: String!) {
    articles(filters: { slug: { eq: $slug } }) {
      data {
        id
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
          tags {
            data {
              id
              attributes {
                name
                slug
              }
            }
          }
        
        }
      }
    }
  }
`;

const GET_ALL_ARTICLETAGS = gql`
  query {
    articles {
      data {
        id
        attributes {
          tags {
            data {
              id
              attributes {
                name
                slug
              }
            }
          }
        }
      }
    }
  }
`;

export { GET_ALL_ARTICLES, GET_INDIVIDUAL_ARTICLE, GET_ALL_ARTICLESLUGS, GET_ALL_ARTICLETAGS };

/* EVENTS */

/* export { GET_ALL_EVENTS, GET_INDIVIDUAL_EVENT, GET_ALL_EVENTSLUGS, GET_ALL_EVENTTAGS }; */

/* SERVICES */

/* export { GET_ALL_SERVICES, GET_INDIVIDUAL_SERVICE, GET_ALL_SERVICESLUGS, GET_ALL_SERVICETAGS }; */