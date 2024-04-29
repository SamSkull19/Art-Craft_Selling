import { useLoaderData, useParams } from "react-router-dom";


const CItemsDetail = () => {
    const crafted = useLoaderData();

    console.log(crafted);

    const { id } = useParams();

    console.log(id);

    const craftedDetail = crafted.find(crafted => crafted._id === id);

    console.log(craftedDetail);

    if (!craftedDetail) {
        return <div>Details not found.</div>;
    }

    const { imageLink, _id, itemName, customization, price, subcategoryName, stockStatus, rating, shortDescription, processingTime, username, email } = craftedDetail;

    return (
        <div className="mt-10 flex justify-center">

            <div className='bg-stone-300 p-6 rounded-2xl '>
                <h3 className='text-3xl text-gray-700 md:text-5xl font-bold mb-10 text-center '>{itemName}</h3>
                <div className="flex flex-col md:flex-row justify-evenly bg-gray-800 p-8 rounded-2xl">
                    <div>
                        <img src={imageLink} alt={_id} className='rounded-2xl w-[350px] md:w-[400px] lg:w-[550px] h-[300px]' />
                    </div>
                    <div className='ml-0 md:ml-10 mt-7 md:mt-0'>

                        <h4 className='text-3xl font-semibold text-cyan-200'>Subcategory : {subcategoryName}</h4>


                        <div className='flex items-center text-white text-sm md:text-xl font-light mt-5'>
                            <h3 className='bg-cyan-700 py-2 px-4 rounded-full'>Rating : {rating}</h3>
                            <h4 className='bg-cyan-700 py-2 px-4 rounded-full ml-5'>Customization : {customization}</h4>
                        </div>


                        <div className="mt-5">
                            <p className='text-2xl md:text-lg font-bold text-cyan-200 mt-1'>Stock Status : {stockStatus}</p>
                            <p className='text-2xl md:text-lg font-bold text-cyan-200 mt-1'>Processing Time : {processingTime} Day</p>
                            <p className='text-2xl md:text-xl font-bold text-gray-400 mt-2'>Added By : {username}</p>
                            <p className='text-2xl md:text-xl font-bold text-gray-400 mt-1'>Contact : {email}</p>
                            <p className='text-2xl md:text-3xl font-bold text-cyan-200 mt-2'>Price : {price} <span className="font-extrabold">৳</span></p>
                        </div>

                    </div>
                </div>

                <div className="my-8 bg-gray-800 text-stone-300 p-5 rounded-xl">
                    <h1 className="text-xl md:text-2xl font-semibold  mb-3">Product Detail :</h1> 
                    <h3 className='text-xl md:text-xl font-semibold '>{shortDescription}</h3>
                </div>
            </div>
        </div>
    );
};

export default CItemsDetail;