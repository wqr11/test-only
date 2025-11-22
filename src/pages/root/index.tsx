import { EventsSwiper } from "@/entities/events";
import { RootPageHeader, RootPageStyled, RootPageTitle } from "./styled";
import { Years } from "@/feature/years";
import { Periods } from "@/feature/periods";

export const RootPage = () => {
  return (
    <RootPageStyled>
      {/* <RootPageHeader>
        <RootPageTitle>Исторические даты</RootPageTitle>
      </RootPageHeader> */}
      {/* <EventsSwiper /> */}
      <Periods />
    </RootPageStyled>
  );
};
