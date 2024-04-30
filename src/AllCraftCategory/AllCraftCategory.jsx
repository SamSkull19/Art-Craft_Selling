import { useNavigate } from 'react-router-dom'
import a1 from '../assets/all1.jpg'
import a2 from '../assets/all2.jpg'
import a3 from '../assets/all3.jpg'
import a4 from '../assets/all4.jpg'
import a5 from '../assets/all5.jpg'
import a6 from '../assets/all6.jpg'

const AllCraftCategory = () => {

    const navigate = useNavigate();

    const handleCategory = subId => {
        console.log(subId);
        navigate(`/allCraftCategory/${subId}`)
    }


    return (
        <div className='my-20'>
            <p className='text-4xl font-bold text-center mb-8'>All Craft Category</p>
            <p className='text-base font-medium text-center text-slate-500 mb-12'>With nimble fingers and colorful yarn, knitting enthusiasts embark on a journey of creativity and warmth. Each stitch tells a story, weaving together comfort and craftsmanship in a tapestry of love.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-8 md:ml-0'>
                <div onClick={ () => handleCategory(1)}>
                    <img src={a1} alt="" className='w-[350px] h-[233px] backdrop-brightness-200 rounded-3xl' />
                    <div className='absolute -translate-y-[233px] w-[350px] h-[233px] bg-black bg-opacity-60 rounded-3xl'>
                        <p className='text-4xl font-semibold text-orange-200 pt-20 text-center'>Card Making</p>
                    </div>
                </div>

                <div onClick={ () => handleCategory(2)}>
                    <img src={a2} alt="" className='w-[350px] h-[233px] backdrop-brightness-200 rounded-3xl' />
                    <div className='absolute -translate-y-[233px] w-[350px] h-[233px] bg-black bg-opacity-60 rounded-3xl'>
                        <p className='text-4xl font-semibold text-orange-200 pt-20 text-center'>Scrapbooking</p>
                    </div>
                </div>

                <div onClick={ () => handleCategory(3)}>
                    <img src={a3} alt="" className='w-[350px] h-[233px] backdrop-brightness-200 rounded-3xl' />
                    <div className='absolute -translate-y-[233px] w-[350px] h-[233px] bg-black bg-opacity-60 rounded-3xl'>
                        <p className='text-4xl font-semibold text-orange-200 pt-20 text-center'>Paper Quilling & Origami</p>
                    </div>
                </div>

                <div onClick={ () => handleCategory(4)}>
                    <img src={a4} alt="" className='w-[350px] h-[233px] backdrop-brightness-200 rounded-3xl' />
                    <div className='absolute -translate-y-[233px] w-[350px] h-[233px] bg-black bg-opacity-60 rounded-3xl'>
                        <p className='text-4xl font-semibold text-orange-200 pt-20 text-center'>Glass Painting</p>
                    </div>
                </div>

                <div onClick={ () => handleCategory(5)}>
                    <img src={a5} alt="" className='w-[350px] h-[233px] backdrop-brightness-200 rounded-3xl' />
                    <div className='absolute -translate-y-[233px] w-[350px] h-[233px] bg-black bg-opacity-60 rounded-3xl'>
                        <p className='text-4xl font-semibold text-orange-200 pt-20 text-center'>Lampworking</p>
                    </div>
                </div>

                <div onClick={ () => handleCategory(6)}>
                    <img src={a6} alt="" className='w-[350px] h-[233px] backdrop-brightness-200 rounded-3xl' />
                    <div className='absolute -translate-y-[233px] w-[350px] h-[233px] bg-black bg-opacity-60 rounded-3xl'>
                        <p className='text-4xl font-semibold text-orange-200 pt-20 text-center'>Glass Dying & Staining</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCraftCategory;