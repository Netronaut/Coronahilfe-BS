import { format, utcToZonedTime } from 'date-fns-tz';
import locale from 'date-fns/locale/de';

const timeZone = 'Europe/Berlin';
const formatPublishDate = isoDate =>
  format(utcToZonedTime(isoDate, timeZone), 'PPPp', { timeZone, locale });

type PublishInfoProps = {
  author: string;
  publishDate: string;
};

const PublishInfo: React.FC<PublishInfoProps> = ({ author, publishDate }) => {
  const info = [];

  if (author) {
    info.push(author);
  }

  if (publishDate) {
    info.push(formatPublishDate(publishDate));
  }

  return info.length > 0 ? <small>{info.join(' | ')}</small> : null;
};

export default PublishInfo;
