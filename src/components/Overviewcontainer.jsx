import { OverviewCard,OverviewTodayCard } from './OverviewCard';
import data from '../../data/data.json';

const convertNumberk = (number) => {
  if(number >= 10000){
    number = number / 1000
    return number + 'k'
  }
  return number
}


export function Overviewcontainer() {

  return (
    <section className=' absolute w-full top-[191px] mx-auto right-0 left-0 flex flex-wrap xl:max-w-[1440px]'>
      {
        data.overview.map(object => (
          <OverviewCard 
              key={object.id}
              user={object.user}
              audienceType={object.audienceType}
              audience={convertNumberk(object.audience)}
              network={object.network}
              isUp={object.isUp}
              today={object.today}
          />
        ))
      }
    </section>
  );
}


export function OverviewTodaycontainer() {
  return (
    <section className='flex flex-col items-center justify-center'>
      <h2 className=' text-2xl font-bold mb-6 text-Dark-Grayish-Blue ml-8 dark:text-Very-Pale-Blue'> Overview Today </h2>
      <div className='w-full flex flex-wrap justify-center md:gap-5 lg:max-w-[1440px]'>
        {
          data['overview-today'].map(object => (
            <OverviewTodayCard 
              key={object.id}
              network={object.network}
              statsType={object.statsType}
              stats={convertNumberk(object.stats)}
              porcentage={object.porcentage}
              isUp={object.isUp} 
            /> 
          ))
        }
      </div>
    </section>
  )
}

