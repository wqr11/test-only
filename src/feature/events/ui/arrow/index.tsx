import { ArrowLeftIcon } from "./icon";
import { EventsArrowStyledProps, EventsArrowStyled } from "./styled";

export interface EventsArrowProps extends EventsArrowStyledProps {}

export const EventsArrow = (props: EventsArrowProps) => (
  <EventsArrowStyled {...props}>
    <ArrowLeftIcon />
  </EventsArrowStyled>
);
