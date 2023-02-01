
import Image from "next/image"

export default function ImageTwoCol({ image, imagecaption }) {
  return (
    <section>
    <Image fill style={{objectFit:"cover"}} src="/images/extrovert-event.jpg" alt="image alt" />
    <figcaption className="antialiased text-[0.75rem] mt-2">{imagecaption}</figcaption>
      </section>
  )
}
