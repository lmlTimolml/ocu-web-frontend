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

export {
  GET_ALL_POSTS,
  GET_INDIVIDUAL_POST,
  GET_ALL_POSTSLUGS,
  GET_ALL_POSTTAGS,
};

/* ARTICLES */

const GET_ALL_ARTICLESLUGS = gql`
  query {
    articles {
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

export {
  GET_ALL_ARTICLES,
  GET_INDIVIDUAL_ARTICLE,
  GET_ALL_ARTICLESLUGS,
  GET_ALL_ARTICLETAGS,
};

/* EVENTS */

const GET_ALL_EVENTS = gql`
  query {
    eventPage {
      data {
        attributes {
          uthevetSone {
            __typename
            ... on ComponentLayoutUthevet {
              nyevent {
                __typename
                ... on ComponentLayoutNyEvent {
                  nytittel
                }
              }
            }
          }
        }
      }
    }
  }
`;

export { GET_ALL_EVENTS };

/* SERVICES */

/* export { GET_ALL_SERVICES, GET_INDIVIDUAL_SERVICE, GET_ALL_SERVICESLUGS, GET_ALL_SERVICETAGS }; */

/* FULL PAGES */

/* Frontpage */
const GET_FRONT_PAGE = gql`
  query {
    homePage {
      data {
        attributes {
          pageTitle
          slug
          mainNav {
            companylogo {
              data {
                attributes {
                  url
                }
              }
            }
            links {
              url
            }
          }
          heroSection {
            heroTitle
            heroDescription
            heroImage {
              data {
                attributes {
                  alternativeText
                  url
                  caption
                }
              }
            }
          }
        }
      }
    }
  }
`;
export { GET_FRONT_PAGE };

/* GLOBALS */

const GET_GLOBALS = gql`
  query {
    global {
      data {
        attributes {
          navigation {
            companylogo {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
            navlink {
              label
              url
            }
          }
          footer {
            id
            companyinfo {
              companyName
              companyAddress
              companyEmail
              companyPhone
              orgNr
            }
            socialmedia {
              label
              url
              socialImg {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            footerlink {
              label
              url
            }
          }
        }
      }
    }
  }
`;

export { GET_GLOBALS };