export default function VideoPlayer({ src }: { src: string }) {
  return (
<div className="w-full max-w-md p-[2px] rounded-[2.5em] bg-[#373737] border border-[#d1d1d6] shadow-sm z-100">
  <video
    className="w-full rounded-[2.3em] border border-black z-99"
    autoPlay
    loop
    muted
  >
    <source src={src} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>


  );
}
