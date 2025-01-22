import CarModelCardWrapper from "../CarModelCardWrapper/CarModelCardWrapper";
import { CardModelCardItemsWrapper } from "./CarModelCardItemsWrapper.styled";

export default function CardModelCardItemsWrapperComponent() {
  return (
    <CardModelCardItemsWrapper>
      <CarModelCardWrapper></CarModelCardWrapper>
      <CarModelCardWrapper></CarModelCardWrapper>
      <CarModelCardWrapper></CarModelCardWrapper>
      <CarModelCardWrapper></CarModelCardWrapper>
    </CardModelCardItemsWrapper>
  );
}
