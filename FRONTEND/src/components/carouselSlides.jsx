
function Slides({ image, title, description, totalslides, slidenumber }) {
  return (
    <div
      id={`slide${slidenumber}`}
      className="carousel-item space-y-3  flex flex-col items-center  justify-center relative w-full"
    >
      <img src={image} className="w-[50%]" />
      <p className="text-xl text-white">{description}</p>
      <h3 className="text-2xl font-semibold text-blue-500">{title}</h3>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a
          href={
            slidenumber == 1 ? `#slide${totalslides}` : `#slide${slidenumber - 1}`
          }
          className="btn btn-circle"
        >
          ❮
        </a>
        <a
          href={
            slidenumber == totalslides ? `#slide${1}` : `#slide${slidenumber + 1}`
          }
          className="btn btn-circle"
        >
          ❯
        </a>
      </div>
    </div>
  );
}

export default Slides;
