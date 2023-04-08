import {slides} from "../../constants/card.const";

export const Card = () => {
  return (
    <>
      <div className="wrapper">
        <div className="splide">
          <Splide options={options} aria-label="My Favorite Images">
            {slides.map((slide) => (
              <SplideSlide>
                <div className="slide">
                  <div className="card">
                    <span className="material-symbols-outlined">
                      {slide.icon}
                    </span>
                    <p>{slide.text}</p>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};
