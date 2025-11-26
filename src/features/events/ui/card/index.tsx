import { PropsWithChildren, Ref } from "react";
import { EventCardStyled, EventCardText, EventCardTitle } from "./styled";

export interface EventCardProps extends PropsWithChildren {
  title?: string | React.ReactNode;
  ref?: Ref<HTMLDivElement>;
}

export const EventCard = ({ children, title, ref }: EventCardProps) => {
  return (
    <EventCardStyled ref={ref}>
      <EventCardTitle>{title}</EventCardTitle>
      <EventCardText>{children}</EventCardText>
    </EventCardStyled>
  );
};
