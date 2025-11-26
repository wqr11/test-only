import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

import { useRootPageContext } from "@/features/root";
import { ArrowButton } from "@/shared/ui";
import { EventCard } from "./card";
import { EventsDotPagination, EventsStyled, EventsWrapper } from "./styled";

import { SLIDES_DATA } from "./config";

import "swiper/css";
import "./styles.css";
import { DotButton } from "@/shared/ui/dot-button";

export const EventsSwiper = () => {
  const { page } = useRootPageContext();

  const ctxRef = useRef<gsap.Context>(null);
  const slidesRef = useRef<HTMLDivElement>(null);
  const initial = useRef<boolean>(true);

  const [isBeginningVisible, setBeginningVisible] = useState<boolean>(true);
  const [isEndVisible, setEndVisible] = useState<boolean>(true);

  const [slidesNode, setSlidesNode] = useState<React.ReactNode>(null);

  const renderNode = useCallback(
    (page: number) =>
      SLIDES_DATA[page].map(({ content, title }) => (
        <SwiperSlide key={content}>
          <EventCard title={title}>{content}</EventCard>
        </SwiperSlide>
      )),
    []
  );

  useGSAP(
    () => {
      if (initial.current) {
        initial.current = false;
        return;
      }

      if (!slidesRef.current) return;

      if (ctxRef.current) {
        ctxRef.current.kill();
        ctxRef.current = null;
      }

      ctxRef.current = gsap.context(() => {
        gsap.to(slidesRef.current, {
          opacity: 0,
          y: 12,
          duration: 1,
          ease: "power2.out",
          onComplete: () => {
            const node = renderNode(page);
            setSlidesNode(node);

            gsap.to(slidesRef.current, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
            });
          },
        });
      });

      return () => ctxRef.current?.revert();
    },
    { dependencies: [page], scope: slidesRef }
  );

  useLayoutEffect(() => {
    const node = renderNode(0);
    setSlidesNode(node);
  }, []);

  return (
    <EventsStyled>
      <EventsWrapper ref={slidesRef}>
        <Swiper
          key={page}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView="auto"
          slidesOffsetBefore={0}
          slidesOffsetAfter={0}
          onSlideChange={(swiper) => {
            setBeginningVisible(swiper.isBeginning);
            setEndVisible(swiper.progress > 0.8);
          }}
          onSwiper={(swiper) => {
            setBeginningVisible(swiper.isBeginning);
            setEndVisible(swiper.progress > 0.8);
          }}
          navigation={{
            addIcons: true,
            enabled: true,
            prevEl: ".prev",
            nextEl: ".next",
          }}
        >
          {slidesNode}
        </Swiper>
        <ArrowButton
          className="prev"
          $transparent={false}
          $hidden={isBeginningVisible}
        />
        <ArrowButton
          className="next"
          $transparent={false}
          $hidden={isEndVisible}
          $reversed
        />
      </EventsWrapper>
      <EventsDotPagination>
        {Array.from({ length: 6 }).map((_, i) => (
          <DotButton className="pagination-dot" $active={page === i} />
        ))}
      </EventsDotPagination>
    </EventsStyled>
  );
};
