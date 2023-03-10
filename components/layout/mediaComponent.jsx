import Image from "next/image"

const MediaComponent = ({ media }) => {
    if (media.mime.includes('video')) {
      return (
        <video controls>
          <source src={media.url} type={media.mime} />
        </video>
      )
    } else if (media.mime.includes('image')) {
      return (
        <Image
          src={media.url}
          alt={media.alternativeText}
          width={media.width}
          height={media.height}
        />
      )
    } else {
      return null
    }
  }

  export default MediaComponent;