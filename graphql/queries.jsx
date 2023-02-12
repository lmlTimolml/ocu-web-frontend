import { gql } from "@apollo/client";
import { FEATURED_EVENT, FEATURED_NEWS, HERO_SECTION } from "./queryfragments";


/* POSTS */

/* ARTICLES */

/* EVENTS */

export const GET_ALL_EVENTS = gql`
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

/* SERVICES */

/* FULL PAGES */

/* Frontpage */
export const GET_FRONT_PAGE = gql`
query HomePage($publicationState: PublicationState) {
  homePage(publicationState: $publicationState) {
    data {
      id
      attributes {
        pageTitle
        slug
        heroSection {
          id
          heroImage {
            data {
              id
              attributes {
                name
                alternativeText
                caption
                width
                height
                formats
                hash
                ext
                mime
                size
                url
                previewUrl
                provider
                provider_metadata
                createdAt
                updatedAt
              }
            }
          }
          heroTitle
          heroDescription
          heroButton {
            id
            label
            url
          }
        }
        breadcrumbpath {
          id
          breadcrumb {
            id
            label
            url
          }
        }
        highLights {
            id
            events {
              data {
                id
                attributes {
                  title
                  description
                  logo {
                    data {
                      attributes {
                        alternativeText
                        width
                        height
                        url
                      }
                    }
                  }
                  slug
                  tags {
                    data {
                      attributes {
                        slug
                      }
                    }
                  }
                  isFeatured
                  button {
                    label
                    url
                  }
                  backGroundColor
                  createdAt
                  updatedAt
                  publishedAt
                }
              }
            }
            id
            articles {
              data {
                id
                attributes {
                  title
                  description
                  image {
                    data {
                      attributes {
                        alternativeText
                        width
                        height
                        url
                      }
                    }
                  }
                  slug
                  isFeatured
                  backGroundColor
                  createdAt
                  updatedAt
                  publishedAt
                  tags {
                    data {
                      attributes {
                        slug
                      }
                    }
                  }
                  button {
                    label
                    url
                  }
                }
              }
            }
          
        }
        dynamicHomePageSection {
          ... on ComponentModulesModul01 {
            id
            title
            description
            txtlinkmod01 {
              id
              label
              url
            }
            serviceLinks {
              id
              label
              linkText
              url
            }
            logoSection {
              id
              clientLogo {
                id
                clientlogo {
                  data {
                    id
                    attributes {
                      name
                      alternativeText
                      caption
                      width
                      height
                      formats
                      hash
                      ext
                      mime
                      size
                      url
                      previewUrl
                      provider
                      provider_metadata
                      createdAt
                      updatedAt
                    }
                  }
                }
                clienturl
              }
            }
          }
          ... on ComponentModulesContactModule {
            id
            image {
              data {
                id
                attributes {
                  name
                  alternativeText
                  caption
                  width
                  height
                  formats
                  hash
                  ext
                  mime
                  size
                  url
                  previewUrl
                  provider
                  provider_metadata
                  createdAt
                  updatedAt
                }
              }
            }
            heading
            contactButton {
              id
              label
              url
            }
          }
          ... on Error {
            code
            message
          }
        }
        createdAt
        updatedAt
        publishedAt
      }
    }
  }
}
`;

/* Inspirasjonpage */
const GET_INSPIRATION_PAGE = gql`
  query {
    inspirationPage {
      data {
        attributes {
          pageTitle
          slug
          heroSection {
            heroImage {
              data {
                attributes {
                  alternativeText
                  url
                  caption
                }
              }
            }
            heroTitle
            heroDescription
            heroButton {
              label
              url
            }
          }
        }
      }
    }
  }
`;

export { GET_INSPIRATION_PAGE };

/* Services Page */

const GET_SERVICES_PAGE = gql`
query Footer($pagination: PaginationArg, $publicationState: PublicationState, $servicesPagePublicationState2: PublicationState, $filters: ServiceFiltersInput) {
  servicesPage(publicationState: $servicesPagePublicationState2) {
    data {
      id
      attributes {
        pageTitle
        slug
        heroSection {
          heroImage {
            data {
              attributes {
                width
                height
                url
                alternativeText
              }
            }
          }
          heroTitle
          heroDescription
          heroButton {
            label
            url
          }
        }
        breadcrumbpath {
          id
          breadcrumb {
            id
            label
            url
          }
        }
        serviceLinks {
          label
          url
          id
        }
        servicesPopulate {
          services(pagination: $pagination, publicationState: $publicationState, filters: $filters) {
            data {
              attributes {
                pageTitle
                slug
                mediaModule {
                  Media {
                    data {
                      attributes {
                        alternativeText
                        width
                        height
                        caption
                        url
                      }
                    }
                  }
                }
                serviceHeadingComponent {
                  serviceHeading
                  serviceContent
                  id
                }
                dynamicServicePageContent {
                  ... on ComponentModulesTxtLLandscapeRModule {
                    id
                    heading
                    content
                    media {
                      data {
                        attributes {
                          alternativeText
                          width
                          height
                          url
                        }
                      }
                    }
                  }
                  ... on ComponentModulesTxtLSquareRModule {
                    id
                    heading
                    content
                    media {
                      data {
                        id
                        attributes {
                          name
                          alternativeText
                          caption
                          width
                          height
                          formats
                          hash
                          ext
                          mime
                          size
                          url
                          previewUrl
                          provider
                          createdAt
                          updatedAt
                          provider_metadata
                        }
                      }
                      
                    }
                  }
                  ... on ComponentModulesTxtRLandscapeLModule {
                    id
                    heading
                    content
                    media {
                      data {
                        id
                        attributes {
                          name
                          alternativeText
                          caption
                          width
                          height
                          formats
                          hash
                          ext
                          mime
                          size
                          url
                          previewUrl
                          provider
                          provider_metadata
                          createdAt
                          updatedAt
                        }
                      }
                    }
                    
                  }
                  ... on ComponentModulesTxtRSquareRModule {
                    id
                    heading
                    content
                    media {
                      data {
                        id
                        attributes {
                          name
                          alternativeText
                          caption
                          width
                          height
                          formats
                          hash
                          ext
                          mime
                          size
                          url
                          previewUrl
                          provider
                          provider_metadata
                          createdAt
                          updatedAt
                        }
                      }
                    }
                  }
                  ... on ComponentSharedSeo {
                    id
                    metaSocial {
                      id
                      socialNetwork
                      title
                      description
                      image {
                        data {
                          id
                          attributes {
                            name
                            alternativeText
                            caption
                            width
                            height
                            formats
                            hash
                            ext
                            mime
                            size
                            url
                            previewUrl
                            provider
                            provider_metadata
                            createdAt
                            updatedAt
                          }
                        }
                      }
                    }
                    metaTitle
                    metaDescription
                    metaImage {
                      data {
                        id
                        attributes {
                          name
                          alternativeText
                          caption
                          width
                          height
                          formats
                          hash
                          ext
                          mime
                          size
                          url
                          previewUrl
                          provider
                          provider_metadata
                          createdAt
                          updatedAt
                        }
                      }
                    }
                    keywords
                    metaRobots
                    structuredData
                    metaViewport
                    canonicalURL
                  }
                  ... on ComponentModulesQuoteModule {
                    id
                    quote
                    source
                  }
                  ... on ComponentModulesRichTextModule {
                    id
                    richTxt
                    backGroundColor
                  }
                  ... on ComponentSharedLink {
                    id
                    label
                    url
                  }
                  ... on ComponentModulesShortcutsModule {
                    id
                    heading
                    shortcutLink {
                      id
                      label
                      url
                    }
                  }
                  ... on Error {
                    code
                    message
                  }
                }
                createdAt
                updatedAt
                publishedAt
              }
              id
            }
          }
          id
        }
        createdAt
        updatedAt
        publishedAt
      }
    }
  }
}
`
;
export { GET_SERVICES_PAGE};

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
            backGroundColor
          }
        }
      }
    }
  }
`;

export { GET_GLOBALS };

/* QUERY FRAGMENTS */

/* Hero */

export const FRAGMENT_TEST = gql`
query HomePage {
  ${HERO_SECTION}
  ${FEATURED_EVENT}
  ${FEATURED_NEWS}
    homePage {
      data {
        id
        attributes {
          pageTitle
          slug
          heroSection {
            ...heroSection
          }
          breadcrumbpath {
            breadcrumb {
              label
              url
            }
          }
          highLights {
            ...eventData
            ...newsData
          }
        }
      }
    }
  }

`;
