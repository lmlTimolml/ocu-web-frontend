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
            alt
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
                    alt
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
                  ... on ComponentBlockQuest {
                    id
                    heading
                    content
                    name
                    title
                    phone
                    bgInfo {
                      bgcolor
                    }
                    bgModule {
                      bgcolor
                    }
                    img {
                      data {
                        attributes {
                          alternativeText
                          width
                          height
                          url
                        }
                      }
                    }
                    questlink {
                      label
                      txt
                      link
                      style
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
`;

/* Martech */
export const SERVICE_MARTECH = gql`
  query Martech {
    serviceSubPageTwo {
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
            alt
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
                    alt
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
                  ... on ComponentBlockQuest {
                    id
                    heading
                    content
                    name
                    title
                    phone
                    bgInfo {
                      bgcolor
                    }
                    bgModule {
                      bgcolor
                    }
                    img {
                      data {
                        attributes {
                          alternativeText
                          width
                          height
                          url
                        }
                      }
                    }
                    questlink {
                      label
                      txt
                      link
                      style
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
`;

/* Kundereiser */
export const SERVICE_CLIENT = gql`
  query Kundereiser {
    serviceSubPageThree {
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
            alt
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
                    alt
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
                  ... on ComponentBlockQuest {
                    id
                    heading
                    content
                    name
                    title
                    phone
                    bgInfo {
                      bgcolor
                    }
                    bgModule {
                      bgcolor
                    }
                    img {
                      data {
                        attributes {
                          alternativeText
                          width
                          height
                          url
                        }
                      }
                    }
                    questlink {
                      label
                      txt
                      link
                      style
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
`;

/* Analyse og Innsikt */
export const SERVICE_ANALYTICS = gql`
  query AnalyseInnsikt {
    serviceSubPageFour {
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
            alt
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
                    alt
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
                  ... on ComponentBlockQuest {
                    id
                    heading
                    content
                    name
                    title
                    phone
                    bgInfo {
                      bgcolor
                    }
                    bgModule {
                      bgcolor
                    }
                    img {
                      data {
                        attributes {
                          alternativeText
                          width
                          height
                          url
                        }
                      }
                    }
                    questlink {
                      label
                      txt
                      link
                      style
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
`;

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
                  width
                  height
                  url
                }
              }
            }
            heroTitle
            heroDescription
            alt
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
              alt
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
            ... on ComponentBlockQuest {
              id
              heading
              content
              bgInfo {
                bgcolor
              }
              bgModule {
                bgcolor
              }
              img {
                data {
                  attributes {
                    width
                    height
                    url
                  }
                }
              }
              questlink {
                label
                txt
                link
                style
              }
            }

          ... on ComponentBlockImgGrid {
            bgColor {
              bgcolor
            }
            logo {
              alt
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
              url
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
                width
                height
                url
              }
            }
          }
          heroTitle
          heroDescription
          alt
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
            alt
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

/* Services Page */

export const GET_SERVICES_PAGE = gql`
  query servicesPage {
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
            alt
          }
          breadcrumbpath {
            id
            breadCrumb
          }
          servList {
            servItem {
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
              alt
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

/* About Page */

export const GET_ABOUT_PAGE = gql`
  query aboutPage {
    aboutPage {
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
            alt
          }
          breadcrumbpath {
            id
            breadCrumb
          }
          Feed {
            ... on ComponentBlockContact {
              id
              heading
              alt
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

/* Personvern Page */

export const GET_PERSONVERN_PAGE = gql`
  query personvernPage {
    personvern {
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
            alt
          }
          breadcrumbpath {
            id
            breadCrumb
          }
          Feed {
            ... on ComponentBlockContact {
              id
              heading
              alt
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

/* Clients Page */

export const GET_CLIENTS_PAGE = gql`
query clientPage {
  clientPage {
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
                width
                height
                url
              }
            }
          }
          heroTitle
          heroDescription
          alt
        }
        breadcrumbpath {
          id
          breadCrumb
        }
        clients {
          id
          bgModule {
            id
            bgcolor
          }
          client {
            id
            img {
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
            alt
            title
            content
            bgColor {
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
            tags {
              data {
                attributes {
                  name
                }
              }
            }
            date
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
          ... on ComponentBlockQuest {
            id
            heading
            content
            bgInfo {
              bgcolor
            }
            bgModule {
              bgcolor
            }
            img {
              data {
                attributes {
                  width
                  height
                  url
                }
              }
            }
            questlink {
              label
              txt
              link
              style
            }
          }
          ... on ComponentBlockImgGrid {
            bgColor {
              bgcolor
            }
            logo {
              alt
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
              url
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

/* Featured client Page */
export const GET_CLIENT_INFO = gql`
query clients {
  clients {
    data {
      id
      attributes {
        logo {
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
        clientName
        slug
        ingress
        bgModule {
          bgcolor
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
          ... on ComponentBlockQuest {
            id
            heading
            content
            bgInfo {
              bgcolor
            }
            bgModule {
              bgcolor
            }
            img {
              data {
                attributes {
                  width
                  height
                  url
                }
              }
            }
            questlink {
              label
              txt
              link
              style
            }
          }
          ... on ComponentBlockImgGrid {
            bgColor {
              bgcolor
            }
            logo {
              alt
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
              url
            }
          }
        }
      }
    }
  }
}
`;

/* Career Page */

export const GET_CAREER_PAGE = gql`
  query careerPage {
    careerPage {
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
            alt
          }
          breadcrumbpath {
            id
            breadCrumb
          }
          Feed {
            ... on ComponentBlockContact {
              id
              heading
              alt
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

/* Inspiration Page */

export const GET_INSPIRATION_PAGE = gql`
  query inspirationPage {
    inspirationPage {
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
            alt
          }
          breadcrumbpath {
            id
            breadCrumb
          }
          Feed {
            ... on ComponentBlockContact {
              id
              heading
              alt
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

/* Events Page */

export const GET_EVENTS_PAGE = gql`
  query eventsPage {
    eventsPage {
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
            alt
          }
          breadcrumbpath {
            id
            breadCrumb
          }
          Feed {
            ... on ComponentBlockContact {
              id
              heading
              alt
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

/* GLOBALS */

export const GET_GLOBALS = gql`
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
