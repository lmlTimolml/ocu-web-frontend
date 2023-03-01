import dynamic from "next/dynamic";

export default function ComponentSharedButton({ label, link, txt, style }) {
  // fetch button
  const Button = dynamic(() => import(`../buttons/${style}`), {
    ssr: false,
  });

  return (
    <div className="flex py-3">
      
        <Button label={label} txt={txt} link={link} style={style} />
      
    </div>
  );
}
