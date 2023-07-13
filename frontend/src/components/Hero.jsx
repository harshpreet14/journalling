import {girl} from '../assets';

const Hero = () => {
  return (
    <div className='w-full bg-white py-20'>
        <div className='md:max-w-[1200px] m-auto grid md:grid-cols-2 max-w-[500px]  px-4 md:px-0'>
            
            <div className='flex flex-col justify-start gap-4'>
                <h1 className='md:leading-[72px] py-2 md:text-6xl text-4xl font-semibold'> Experience a new dimension of   <span className='text-[#FFC000]'> journaling, </span> capture your thoughts and emotions <span  className='text-[#FFC000]'> effortlessly. </span> 
                </h1>
                <p className='py-2 text-lg text-gray-600'>Sign in now to embark on a path of self-understanding and empower your mental well-being.</p>
                
            </div>
            <img src={girl}></img>

        </div>
        

    </div>
  )
}

export default Hero