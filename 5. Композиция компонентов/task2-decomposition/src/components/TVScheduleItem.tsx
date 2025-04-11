/**
 * @interface TVScheduleItemProps
 * @property {string} time - Время начала передачи.
 * @property {string} channel - Название канала.
 * @property {string} title - Название передачи.
 */
export interface TVScheduleItemProps {
  time: string;
  channel: string;
  title: string;
}

/**
 * @file Элемент списка телепередач, принимает время, название канала и передачи через props.
 * @param {TVScheduleItemProps} props - Объект с данными телепередачи.
 */

function TVScheduleItem({ time, channel, title }: TVScheduleItemProps) {
  return (
    <div>
      <span>{time}</span> {channel} - {title}
    </div>
  );
}

export default TVScheduleItem;