
import Image from "next/image"

export default function ImageFull({ image, imagecaption }) {
  return (
    <section className="max-w-[960px] mx-auto">
    <Image height={540} width={960} src="/images/extrovert-event.jpg" alt="image alt" />
    <figcaption className="antialiased text-[0.75rem] mt-2">{imagecaption}</figcaption>
      </section>
  )
}
