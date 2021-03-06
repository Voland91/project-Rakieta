import { FC } from 'react';
import Button from '../../atoms/Button/Button';
import Description from '../../atoms/Description/Description';
import Title from '../../atoms/Title/Title';
import { EventWrapper, FullDateWrapper, DateWrapper, DescriptionWrapper, ColoredYear } from './EventItem.styles';

export interface EventProps {
  description?: string;
  title?: string;
  eventDate?: Date;
}

const EventItem: FC<EventProps> = ({ title, description, eventDate }) => {
  const year = eventDate ? eventDate.getUTCFullYear() : null;
  //getMonth - returns month 0-11 so we need +1 to get right number
  const month = eventDate ? eventDate.getUTCMonth() + 1 : null;
  const day = eventDate ? eventDate.getUTCDate() : null;
  const time = eventDate ? eventDate.toTimeString().slice(0, 8) : null;

  // adding 0 when number of a month or a day is less than 10, ex. 03.04 for march 4th
  const fullDate = eventDate ? ` / ${month! < 10 ? `0${month}` : month} / ${day! < 10 ? `0${day}` : day}` : null;

  //limit character length to the "limit" signs for description (if containts more than "limit")
  const limit = 90;
  const cuttedDescription = description ? description.length > limit && description!.substring(0, limit) : null;
  //then trimming to the last full word (if cutted)
  const trimmedDescription = cuttedDescription
    ? `${cuttedDescription.substring(0, cuttedDescription.lastIndexOf(' '))}...`
    : null;

  return (
    <EventWrapper>
      {eventDate ? (
        <FullDateWrapper>
          <DateWrapper>
            <Description description={`${year}`} date year />
            <Description description={`${fullDate}`} date />
          </DateWrapper>
          <Description description={`${time} UTC`} date />
        </FullDateWrapper>
      ) : (
        // conditional rendering when there is no date
        <DateWrapper>
          <Description description={`We don't know the date`} date />
          <ColoredYear>{` yet...`}</ColoredYear>
        </DateWrapper>
      )}

      <DescriptionWrapper>
        {/* conditional rendering when there is no title */}
        <Title title={title || 'No Name Event :('} />

        {/* conditional rendering when there is no description */}
        <Description
          description={trimmedDescription || description || 'There are no words to describe this epic event!'}
        />
      </DescriptionWrapper>
      <Button content="details" />
    </EventWrapper>
  );
};
export default EventItem;
