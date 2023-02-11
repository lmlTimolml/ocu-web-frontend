import { gql } from "@apollo/client";

/* QUERY FRAGMENTS */

/* Hero */

export const HERO_SECTION = gql`
fragment heroSection on ComponentLayoutHero {
    heroTitle
    heroDescription
    heroImage {
      data {
        attributes {
          url
        }
      }
    }
    heroButton {
      label
      url
    }
  }
`;

export const FEATURED_EVENT = gql`
fragment eventData on ComponentModulesHighLights {
    featuredEvent {
      heading
      events {
        data {
          attributes {
            title
            description
            images {
              data {
                attributes {
                  url
                }
              }
            }
            slug
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
  }
`;

export const FEATURED_NEWS = gql`
fragment newsData on ComponentModulesHighLights {
    featuredNews {
      heading
      articles {
        data {
          attributes {
            title
            cover {
              data {
                attributes {
                  width
                  height
                  alternativeText
                  caption
                }
              }
            }
            content
            slug
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
  }
`;
