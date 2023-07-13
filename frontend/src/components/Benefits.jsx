import Card from './Card';


const Courses = () => {
 
  return (
    <div className='w-full bg-[#FFFCC9] py-32'>
        <div className='md:max-w-[1200px] m-auto max-w-[500px]  px-4 md:px-0'>
            <Card/>
            <div className='py-4'>
              <h1 className='py-3 text-3xl font-bold'>Most Popular <span className='text-[#20B486]'>Courses</span></h1>
              <p className='text-[#6D737A]'>Various versions have evolved over the years, sometimes by accident.</p>
            </div>
        
        </div>

    </div>
  )
}

export default Courses