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
            link {
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


/* Contactpage */
export const GET_CONTACT_PAGE = gql`
query {
  contactPage {
    data {
      id
      attributes {
        pageTitle
        slug
        heroSection {
          heroImage {
            data {
              attributes {
                url
                alternativeText
                width
                height
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
          breadcrumb {
            label
            url
            id
          }
        }
        companyContactModule {
          companycontactinfo {
            icon {
              data {
                attributes {
                  alternativeText
                  url
                  height
                  width
                }
              }
            }
            description
            address
            email
            phonenmbr
            url
          }
        }
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

export const GET_SERVICES_PAGE = gql`
query Query {
  servicesPage {
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
            linkText
          }
        }
        breadcrumbpath {
          id
          breadcrumb {
            id
            label
            url
            linkText
          }
        }
        serviceLinks {
          id
          label
          url
          linkText
        }
        servicesPopulate {
          id
          service {
            data {
              id
              attributes {
                pageTitle
                slug
                serviceHeadingComponent {
                  id
                  serviceHeading
                  serviceContent
                }
                dynamicServicePageContent {
                  __typename
                  ... on ComponentModulesTxtLLandscapeRModule {
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
                  __typename
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
                          provider_metadata
                          createdAt
                          updatedAt
                        }
                      }
                    }
                  }
                  __typename
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
                  __typename
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
                    shortcut {
                      data {
                        id
                        attributes {
                          name
                          slug
                          createdAt
                          updatedAt
                        }
                      }
                      
                    }
                  }
                  __typename
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
                  __typename
                  ... on ComponentModulesQuoteModule {
                    id
                    quote
                    source
                  }
                  __typename
                  ... on ComponentModulesRichTextModule {
                    id
                    heading
                    richTxt
                    backgroundColor {
                      id
                      bgColor
                    }
                  }
                  __typename
                  ... on ComponentSharedLink {
                    id
                    label
                    url
                    linkText
                  }
                  __typename
                  ... on ComponentModulesShortcutsModule {
                    id
                    heading
                    shortcutLink {
                      id
                      label
                      url
                      linkText
                    }
                  }
                  __typename
                  ... on Error {
                    code
                    message
                  }
                }
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
                createdAt
                updatedAt
                publishedAt
              }
            }
            
          }
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
