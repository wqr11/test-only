import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useMemo, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { ArrowButton } from '@/shared/ui';
import { EventCard } from './card';
import { EventsStyled, EventsWrapper, SlideGroup } from './styled';

import 'swiper/css';
import './styles.css';
import { useRootPageContext } from '@/features/root';

export const EventsSwiper = () => {
  const { page } = useRootPageContext();

  const [slide, setSlide] = useState<number>(0);

  const slides = useMemo(
    () =>
      Array.from({ length: 6 }).map((_, i) => (
        <SlideGroup id={`sg-${i}`} className="slide-group">
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
        </SlideGroup>
      )),
    [],
  );

  useGSAP(() => {
    gsap.to('.slide-group', {
      opacity: 0,
      transform: 'translateY(1px)',
      duration: 0.3,
      ease: 'power2.inOut',
    });
    gsap.to(`#sg-${page}`, {
      opacity: 1,
      transform: 'translateY(0px)',
      duration: 0.3,
      ease: 'power2.inOut',
    });
  }, [page]);

  return (
    <EventsStyled>
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
            prevEl: '.prev',
            nextEl: '.next',
          }}
        >
          {/* {slides} */}
        </Swiper>
        <ArrowButton
          className="prev"
          $transparent={false}
          $hidden={slide === 0}
        />
        <ArrowButton
          className="next"
          $transparent={false}
          $hidden={slide === 2}
          $reversed
        />
      </EventsWrapper>
    </EventsStyled>
  );
};
