import { EventsSwiper } from "@/features/events";
import {
  RootPageContent,
  RootPageHeading,
  RootPageStyled,
  RootPageTitle,
} from "./styled";
import { Periods } from "@/features/periods";
import { useState } from "react";
import { RootPageContext } from "@/features/root";
import { Paginator } from "@/features/paginator";

export const RootPage = () => {
  const [page, setPage] = useState<number>(0);

  return (
    <RootPageStyled>
      <RootPageContent>
        <RootPageContext value={{ page, setPage }}>
          <RootPageHeading>
            <RootPageTitle>Исторические даты</RootPageTitle>
          </RootPageHeading>
          <Periods />
          <Paginator />
          <EventsSwiper />
        </RootPageContext>
      </RootPageContent>
    </RootPageStyled>
  );
};
