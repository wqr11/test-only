import { PropsWithChildren } from "react";
import { EventCardStyled, EventCardText, EventCardTitle } from "./styled";

export interface EventCardProps extends PropsWithChildren {
  title?: string | React.ReactNode;
}

export const EventCard = ({ children, title }: EventCardProps) => {
  return (
    <EventCardStyled>
      <EventCardTitle>{title}</EventCardTitle>
      <EventCardText>{children}</EventCardText>
    </EventCardStyled>
  );
};
