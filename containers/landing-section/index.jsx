export default function Movie() {
  return (
    <section className="">
      <article className="relative">
        <video
          className="h-screen object-cover

          "
          width={100}
          height={100}
          loop
          autoPlay
          muted
          playsInline
          preload="metadata"
        >
          <source src="/videos/hands.mp4" type="video/mp4"></source>
          다른 브라우저로 시도해 보세요.
        </video>
          <div className="txt-bg bg-[rgba(255,255,255,.7]">
            <h2
              className="absolute top-0 w-full h-full flex justify-center bg-[rgba(255,255,255,.7]"
            >
              <span className="text-white place-content-center mix-blend-soft-light text-[30vw]">사 랑</span>
            </h2>
          </div>
      </article>
    </section>
  );
}
