
import { scribble} from '../assets'


const Card = () => {
  return (
    <div className='z-10 bg-white drop-shadow-md overflow-hidden rounded-2xl mr-2 my-4'>
        <img src={scribble} 
                className="h-40 w-full object-cover"
        />
        <div className='p-5 border border-b'>
            <h1 className='py-2 truncate'>Python</h1>
        </div>
        <h3 className='p-5 text-xl'>100</h3>
        <div className='absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold'>
           technology
        </div>
    </div>
  )
}

export default Card