import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState } from "react";

import { EventCard } from "./card";
import { EventsArrow } from "./arrow";
import { EventsWrapper } from "./styled";

import "swiper/css";
import "./styles.css";

export const EventsSwiper = () => {
  const [slide, setSlide] = useState<number>(0);

  return (
    <EventsWrapper>
      <Swiper
        modules={[Navigation]}
        spaceBetween={80}
        slidesPerView={3}
        onSlideChange={(swiper) => {
          setSlide(swiper.activeIndex);
        }}
        navigation={{
          addIcons: true,
          enabled: true,
          prevEl: ".prev",
          nextEl: ".next",
        }}
      >
        <SwiperSlide>
          <EventCard title="2015">
            13 сентября — частное солнечное затмение, видимое в Южной Африке и
            части Антарктиды
          </EventCard>
        </SwiperSlide>
        <SwiperSlide>
          <EventCard title="2016">
            Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных
            галактик, получившую обозначение GN-z11
          </EventCard>
        </SwiperSlide>
        <SwiperSlide>
          <EventCard title="1945">Победа Гитлер капут</EventCard>
        </SwiperSlide>
        <SwiperSlide>
          <EventCard title="1945">Победа Гитлер капут</EventCard>
        </SwiperSlide>
        <SwiperSlide>
          <EventCard title="1945">Победа Гитлер капут</EventCard>
        </SwiperSlide>
      </Swiper>
      <EventsArrow
        className="prev"
        $transparent={false}
        $hidden={slide === 0}
      />
      <EventsArrow
        className="next"
        $transparent={false}
        $hidden={slide === 2}
        $reversed
      />
    </EventsWrapper>
  );
};
