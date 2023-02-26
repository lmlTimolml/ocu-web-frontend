import { gql } from "@apollo/client";


/* POSTS */

/* ARTICLES */

/* EVENTS */

/* SERVICES */
/* Strategi og Rådgivning */
export const SERVICE_STRAT = gql`
query StrategiRadgivning {
  serviceSubPageOne {
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
                alternativeText
                width
                height
                url
              }
            }
          }
          heroTitle
          heroDescription
        }
        breadcrumbpath {
          id
          breadCrumb
        }
        servnav {
          id
          button {
            id
            label
            link
            txt
            style
          }
          bgColor {
            id
            bgcolor
          }
        }
        service {
    data {
      id
      attributes {
        title
        slug
        Feed {
          ... on ComponentBlockContact {
            id
            heading
            contmedia {
              data {
                id
                attributes {
                  alternativeText
                  caption
                  width
                  height
                  url
                }
              }
            }
            button {
              id
              label
              link
              txt
              style
            }
            bgContact {
              id
              bgcolor
            }
            bgModule {
              id
              bgcolor
            }
          }
          ... on ComponentBlockHeadMain {
            id
            heading
            content
            bgHeadMain {
              id
              bgcolor
            }
            button {
              id
              label
              link
              txt
              style
            }
          }
          ... on ComponentBlockQuote {
            id
            quote
            source
            bgQuote {
              id
              bgcolor
            }
          }
          ... on ComponentBlockRichtxtMain {
            id
            content
            heading
            bgRichTxtMain {
              id
              bgcolor
            }
            button {
              id
              label
              link
              txt
              style
            }
          }
          ... on ComponentBlockRichtxt {
            id
            content
            heading
            bgRichTxt {
              id
              bgcolor
            }
            button {
              id
              label
              link
              txt
              style
            }
          }
          ... on ComponentBlockServMain {
            id
            heading
            content
          }
          ... on ComponentBlockTxtLlr {
            id
            heading
            content
            bgColor {
              id
              bgcolor
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
            alt
            caption
          }
          ... on ComponentBlockTxtLsr {
            id
            heading
            content
            bgColor {
              id
              bgcolor
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
            alt
            caption
          }
          ... on ComponentBlockTxtRll {
            id
            heading
            content
            bgColor {
              id
              bgcolor
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
            alt
            caption
          }
          ... on ComponentBlockTxtRsl {
            id
            heading
            content
            bgColor {
              id
              bgcolor
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
            alt
            caption
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
                  attributes {
                    alternativeText
                    caption
                    width
                    height
                    url
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
          ... on ComponentSharedMedia {
            id
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
            caption
            alt
            bgMedia {
              bgcolor
            }
          }
          ... on Error {
            code
            message
          }
          ... on ComponentFormForm {
            id
            form {
              data {
                id
                attributes {
                  FormName
                  FormDescription
                  bgModule {
                    bgcolor
                  }
                  bgForm {
                    bgcolor
                  }
                  slug
                  Formfields {
                    ... on ComponentFormInput {
                      fieldID
                      fieldname
                      id
                      placeholder
                    }
                    ... on ComponentFormFirstname {
                      placeholder
                      fieldname
                      required
                    }
                    ... on ComponentFormEmail {
                      id
                      placeholder
                      fieldname
                      required
                    }
                    ... on ComponentFormLastname {
                      id
                      placeholder
                      fieldname
                      required
                    }
                    ... on ComponentFormCheck {
                      id
                      placeholder
                      fieldname
                      required
                    }
                    ... on ComponentFormPhone {
                      id
                      placeholder
                      fieldname
                      required
                    }
                    ... on ComponentFormSwitch {
                      id
                      placeholder
                      fieldname
                      required
                    }
                    ... on Error {
                      code
                      message
                    }
                    ... on ComponentSharedButton {
                      id
                      label
                      link
                      txt
                      style
                    }
                    ... on ComponentFormTextfield {
                      id
                      disclaimer
                    }
                  }
                  createdAt
                  updatedAt
                  publishedAt
                }
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
}
}
}
`
;

/* Services feed */
export const SERVICEFEED = gql`
query Services {
  services {
    data {
      id
      attributes {
        title
        slug
        Feed {
          ... on ComponentBlockContact {
            id
            heading
            contmedia {
              data {
                id
                attributes {
                  alternativeText
                  caption
                  width
                  height
                  url
                }
              }
            }
            button {
              id
              label
              link
              txt
              style
            }
            bgContact {
              id
              bgcolor
            }
            bgModule {
              id
              bgcolor
            }
          }
          ... on ComponentBlockHeadMain {
            id
            heading
            content
            bgHeadMain {
              id
              bgcolor
            }
            button {
              id
              label
              link
              txt
              style
            }
          }
          ... on ComponentBlockQuote {
            id
            quote
            source
            bgQuote {
              id
              bgcolor
            }
          }
          ... on ComponentBlockRichtxtMain {
            id
            content
            heading
            bgRichTxtMain {
              id
              bgcolor
            }
            button {
              id
              label
              link
              txt
              style
            }
          }
          ... on ComponentBlockRichtxt {
            id
            content
            heading
            bgRichTxt {
              id
              bgcolor
            }
            button {
              id
              label
              link
              txt
              style
            }
          }
          ... on ComponentBlockServMain {
            id
            heading
            content
          }
          ... on ComponentBlockTxtLlr {
            id
            heading
            content
            bgColor {
              id
              bgcolor
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
            alt
            caption
          }
          ... on ComponentBlockTxtLsr {
            id
            heading
            content
            bgColor {
              id
              bgcolor
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
            alt
            caption
          }
          ... on ComponentBlockTxtRll {
            id
            heading
            content
            bgColor {
              id
              bgcolor
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
            alt
            caption
          }
          ... on ComponentBlockTxtRsl {
            id
            heading
            content
            bgColor {
              id
              bgcolor
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
            alt
            caption
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
                  attributes {
                    alternativeText
                    caption
                    width
                    height
                    url
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
          ... on ComponentSharedMedia {
            id
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
            caption
            alt
            bgMedia {
              bgcolor
            }
          }
          ... on Error {
            code
            message
          }
          ... on ComponentFormForm {
            id
            form {
              data {
                id
                attributes {
                  FormName
                  FormDescription
                  bgModule {
                    bgcolor
                  }
                  bgForm {
                    bgcolor
                  }
                  slug
                  Formfields {
                    ... on ComponentFormInput {
                      fieldID
                      fieldname
                      id
                      placeholder
                    }
                    ... on ComponentFormFirstname {
                      placeholder
                      fieldname
                      required
                    }
                    ... on ComponentFormEmail {
                      id
                      placeholder
                      fieldname
                      required
                    }
                    ... on ComponentFormLastname {
                      id
                      placeholder
                      fieldname
                      required
                    }
                    ... on ComponentFormCheck {
                      id
                      placeholder
                      fieldname
                      required
                    }
                    ... on ComponentFormPhone {
                      id
                      placeholder
                      fieldname
                      required
                    }
                    ... on ComponentFormSwitch {
                      id
                      placeholder
                      fieldname
                      required
                    }
                    ... on Error {
                      code
                      message
                    }
                    ... on ComponentSharedButton {
                      id
                      label
                      link
                      txt
                      style
                    }
                    ... on ComponentFormTextfield {
                      id
                      disclaimer
                    }
                  }
                  createdAt
                  updatedAt
                  publishedAt
                }
              }
            }
          }
        }
        createdAt
        updatedAt
        publishedAt
      }
    }
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
  }
}
`
;



/* FULL PAGES */

/* Frontpage */
export const GET_FRONT_PAGE = gql`
query HomePage {
  homePage {
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
        }
        breadcrumbpath {
          id
          breadCrumb
        }
        highLights {
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
                      caption
                      width
                      height
                      url
                    }
                  }
                }
                slug
                isFeatured
                button {
                  label
                  link
                  txt
                  style
                }
                bgArticle {
                  bgcolor
                }
                createdAt
                updatedAt
                publishedAt
              }
            }
          }
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
                      caption
                      width
                      height
                      url
                    }
                  }
                }
                slug
                isFeatured
                button {
                  label
                  link
                  txt
                  style
                }
                bgEvent {
                  bgcolor
                }
                createdAt
                updatedAt
                publishedAt
              }
            }
          }
          bgColor {
            id
            bgcolor
          }
        }
        Feed {
          ... on ComponentBlockContact {
            id
            heading
            contmedia {
              data {
                id
                attributes {
                  alternativeText
                  caption
                  width
                  height
                  url
                }
              }
            }
            button {
              id
              label
              link
              txt
              style
            }
            bgContact {
              id
              bgcolor
            }
            bgModule {
              id
              bgcolor
            }
          }
          ... on ComponentBlockHeadMain {
            id
            heading
            content
            bgHeadMain {
              id
              bgcolor
            }
            button {
              id
              label
              link
              txt
              style
            }
          }
          ... on ComponentBlockQuote {
            id
            quote
            source
            bgQuote {
              id
              bgcolor
            }
          }
          ... on ComponentBlockRichtxtMain {
            id
            content
            heading
            bgRichTxtMain {
              id
              bgcolor
            }
            button {
              id
              label
              link
              txt
              style
            }
          }
          ... on ComponentBlockRichtxt {
            id
            content
            heading
            bgRichTxt {
              id
              bgcolor
            }
            button {
              id
              label
              link
              txt
              style
            }
          }
          ... on ComponentBlockServMain {
            id
            heading
            content
          }
          ... on ComponentBlockTxtLlr {
            id
            heading
            content
            bgColor {
              id
              bgcolor
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
            alt
            caption
          }
          ... on ComponentBlockTxtLsr {
            id
            heading
            content
            bgColor {
              id
              bgcolor
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
            alt
            caption
          }
          ... on ComponentBlockTxtRll {
            id
            heading
            content
            bgColor {
              id
              bgcolor
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
            alt
            caption
          }
          ... on ComponentBlockTxtRsl {
            id
            heading
            content
            bgColor {
              id
              bgcolor
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
            alt
            caption
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
                  attributes {
                    alternativeText
                    caption
                    width
                    height
                    url
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
          ... on ComponentSharedMedia {
            id
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
            caption
            alt
            bgMedia {
              bgcolor
            }
          }
          ... on Error {
            code
            message
          }
          ... on ComponentFormForm {
            id
            form {
              data {
                id
                attributes {
                  FormName
                  FormDescription
                  bgModule {
                    bgcolor
                  }
                  bgForm {
                    bgcolor
                  }
                  slug
                  Formfields {
                    ... on ComponentFormInput {
                      fieldID
                      fieldname
                      id
                      placeholder
                    }
                    ... on ComponentFormFirstname {
                      placeholder
                      fieldname
                      required
                    }
                    ... on ComponentFormEmail {
                      id
                      placeholder
                      fieldname
                      required
                    }
                    ... on ComponentFormLastname {
                      id
                      placeholder
                      fieldname
                      required
                    }
                    ... on ComponentFormCheck {
                      id
                      placeholder
                      fieldname
                      required
                    }
                    ... on ComponentFormPhone {
                      id
                      placeholder
                      fieldname
                      required
                    }
                    ... on ComponentFormSwitch {
                      id
                      placeholder
                      fieldname
                      required
                    }
                    ... on Error {
                      code
                      message
                    }
                    ... on ComponentSharedButton {
                      id
                      label
                      link
                      txt
                      style
                    }
                    ... on ComponentFormTextfield {
                      id
                      disclaimer
                    }
                  }
                  createdAt
                  updatedAt
                  publishedAt
                }
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
`;

/* Contactpage */
export const GET_CONTACT_PAGE = gql`
query ContactPage {
  contactPage {
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
        }
        breadcrumbpath {
          id
          breadCrumb
        }
        ContactInfo {
          bgColor {
            bgcolor
          }
          companycontactinfo {
          icon {
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
          description
          address
          email
          phonenmbr
          url
        }
        }
        Feed {
          ... on ComponentBlockContact {
            id
            heading
            contmedia {
              data {
                id
                attributes {
                  alternativeText
                  caption
                  width
                  height
                  url
                }
              }
            }
            button {
              id
              label
              link
              txt
              style
            }
            bgContact {
              id
              bgcolor
            }
            bgModule {
              id
              bgcolor
            }
          }
          ... on ComponentBlockHeadMain {
            id
            heading
            content
            bgHeadMain {
              id
              bgcolor
            }
            button {
              id
              label
              link
              txt
              style
            }
          }
          ... on ComponentBlockQuote {
            id
            quote
            source
            bgQuote {
              id
              bgcolor
            }
          }
          ... on ComponentBlockRichtxtMain {
            id
            content
            heading
            bgRichTxtMain {
              id
              bgcolor
            }
            button {
              id
              label
              link
              txt
              style
            }
          }
          ... on ComponentBlockRichtxt {
            id
            content
            heading
            bgRichTxt {
              id
              bgcolor
            }
            button {
              id
              label
              link
              txt
              style
            }
          }
          ... on ComponentBlockServMain {
            id
            heading
            content
          }
          ... on ComponentBlockTxtLlr {
            id
            heading
            content
            bgColor {
              id
              bgcolor
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
            alt
            caption
          }
          ... on ComponentBlockTxtLsr {
            id
            heading
            content
            bgColor {
              id
              bgcolor
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
            alt
            caption
          }
          ... on ComponentBlockTxtRll {
            id
            heading
            content
            bgColor {
              id
              bgcolor
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
            alt
            caption
          }
          ... on ComponentBlockTxtRsl {
            id
            heading
            content
            bgColor {
              id
              bgcolor
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
            alt
            caption
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
                  attributes {
                    alternativeText
                    caption
                    width
                    height
                    url
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
          ... on ComponentSharedMedia {
            id
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
            caption
            alt
            bgMedia {
              bgcolor
            }
          }
          ... on Error {
            code
            message
          }
          ... on ComponentFormForm {
            id
            form {
              data {
                id
                attributes {
                  FormName
                  FormDescription
                  bgModule {
                    bgcolor
                  }
                  bgForm {
                    bgcolor
                  }
                  slug
                  Formfields {
                    ... on ComponentFormInput {
                      fieldID
                      fieldname
                      id
                      placeholder
                    }
                    ... on ComponentFormFirstname {
                      placeholder
                      fieldname
                      required
                    }
                    ... on ComponentFormEmail {
                      id
                      placeholder
                      fieldname
                      required
                    }
                    ... on ComponentFormLastname {
                      id
                      placeholder
                      fieldname
                      required
                    }
                    ... on ComponentFormCheck {
                      id
                      placeholder
                      fieldname
                      required
                    }
                    ... on ComponentFormPhone {
                      id
                      placeholder
                      fieldname
                      required
                    }
                    ... on ComponentFormSwitch {
                      id
                      placeholder
                      fieldname
                      required
                    }
                    ... on Error {
                      code
                      message
                    }
                    ... on ComponentSharedButton {
                      id
                      label
                      link
                      txt
                      style
                    }
                    ... on ComponentFormTextfield {
                      id
                      disclaimer
                    }
                  }
                  createdAt
                  updatedAt
                  publishedAt
                }
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
`;


/* Inspirasjonpage */
export const GET_INSPIRATION_PAGE = gql`
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
                      bgColor
                    }
                  }
                  __typename
                  ... on ComponentModulesRichTextElementModule {
                    id
                    heading
                    richTxt
                    backgroundColor {
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
query Global {
  global {
    data {
      id
      attributes {
        navigation {
          id
          companylogo {
            data {
              id
              attributes {
                alternativeText
                width
                height
                url
              }
            }
          }
          navlink {
            id
            label
            url
            txt
            style
          }
          bgColor {
            bgcolor
        }
      }
        footer {
          id
          companyinfo {
            id
            companyName
            companyAddress
            companyEmail
            orgNr
            companyPhone
          }
          socialmedia {
            id
            socialImg {
              data {
                attributes {
                  alternativeText
                  width
                  height
                  url
                }
              }
            }
            url
            target
            isExternal
            label
          }
          link {
            label
            url
            style
            txt
          }
          label
          bgColor {
            bgcolor
          }
        }
      }
    }
  }
}
`;

export { GET_GLOBALS };
