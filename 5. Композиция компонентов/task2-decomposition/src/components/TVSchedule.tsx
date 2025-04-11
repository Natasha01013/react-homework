import TVScheduleItem, { TVScheduleItemProps } from './TVScheduleItem';

/**
 * @file Блок с программой телепередач.
 */

const tvScheduleData: TVScheduleItemProps[] = [
  { time: '02:00', channel: 'THT. Best', title: 'THT International' },
  { time: '02:15', channel: 'Джинглики', title: 'Карусель INT' },
];

function TVSchedule() {
  return (
    <div className='div-tvshedule'>
      <h3>Телепрограмма</h3>
      <ul>
        {tvScheduleData.map((item, index) => (
          <li key={index}>
            <TVScheduleItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TVSchedule;