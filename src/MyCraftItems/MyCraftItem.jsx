import PropTypes from 'prop-types';

const MyCraftItem = ({ myCraft }) => {

    const { imageLink, _id, itemName, customization, price, stockStatus, rating } = myCraft;

    console.log(myCraft);
    return (
        <div>
            <div className='bg-stone-300 p-6 rounded-2xl animate__heartBeat h-full mt-5 w-[400px] '>
                <div>
                    <img src={imageLink} alt={_id} className='w-[350px] h-[250px] rounded-2xl' />
                </div>
                <div className='mt-5'>
                    <div className='flex items-center text-white text-sm font-light'>
                        <h4 className='bg-cyan-700 py-2 px-4 rounded-full'>Rating : {rating}</h4>
                        <h3 className='bg-cyan-700 ml-6 py-2 px-4 rounded-full'>Customization : {customization}</h3>
                    </div>

                    <h3 className='text-2xl font-extrabold mt-5'>Item Name: {itemName}</h3>


                    <p className='text-base font-bold my-3'>Stock Status: {stockStatus}</p>

                    <p className='text-lg font-bold my-3'>Price : {price}  <span className="font-extrabold">৳</span></p>
                    <button className="btn bg-cyan-700 text-white w-[100px]">Update</button>
                    <button className="btn bg-cyan-700 text-white w-[100px] ml-6">Delete</button>
                </div>
            </div>
        </div>
    );
};

MyCraftItem.propTypes = {
    myCraft: PropTypes.object.isRequired,
}

export default MyCraftItem;