
import Image from "next/image"

export default function ImageFull({ image, imagecaption }) {
  return (
    <section className="max-w-[960px] mx-auto relative aspect-video">
    <Image fill style={{objectFit:"cover"}} src="/images/extrovert-event.jpg" alt="image alt" />
    <figcaption className="antialiased text-[0.75rem] mt-2">{imagecaption}</figcaption>
      </section>
  )
}
