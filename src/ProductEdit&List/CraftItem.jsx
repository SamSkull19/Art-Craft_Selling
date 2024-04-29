import PropTypes from 'prop-types';

const CraftItem = ({ craftItem }) => {

    const { imageLink, _id, itemName, customization, price, subcategoryName, stockStatus, rating } = craftItem;


    return (
        <div>
            <div className='bg-teal-100 p-6 rounded-2xl animate__heartBeat'>
                <div>
                    <img src={imageLink} alt={_id} className='w-[350px] h-[250px] rounded-2xl' />
                </div>
                <div className='mt-5'>
                    <div className='flex items-center text-white text-sm font-light'>
                        <h4 className='bg-cyan-700 py-2 px-4 rounded-full'>Rating : {rating}</h4>
                        <h3 className='bg-cyan-700 ml-6 py-2 px-4 rounded-full'>Customization : {customization}</h3>
                    </div>

                    <h3 className='text-2xl font-extrabold mt-5'>Item Name: {itemName}</h3>

                    <h4 className='text-xl font-medium mt-3'>Subcategory : {subcategoryName}</h4>

                    <p className='text-base font-bold my-3'>Stock Status: {stockStatus}</p>

                    <p className='text-lg font-bold my-3'>Price : {price}</p>
                    <button className="btn bg-cyan-700 text-white">View Details</button>
                </div>
            </div>
        </div>
    );
};

CraftItem.propTypes = {
    craftItem: PropTypes.object.isRequired,
}

export default CraftItem;