import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
const AllCraftCategoryItems = ({cat}) => {
    const { imageLink, subcategoryID, itemName, customization, price, subcategoryName, stockStatus, rating } = cat;

    const navigate = useNavigate();

    const handleCraftDetail = () => {
        navigate(`/allCraftCategoryDetail/${cat._id}`);
    }

    return (
        <div>
            <div className='bg-stone-300 p-6 rounded-2xl animate__heartBeat h-full mt-5'>
                <div>
                    <img src={imageLink} alt={subcategoryID} className='w-[350px] h-[250px] rounded-2xl' />
                </div>
                <div className='mt-5'>
                    <div className='flex items-center text-white text-sm font-light'>
                        <h4 className='bg-cyan-700 py-2 px-4 rounded-full'>Rating : {rating}</h4>
                        <h3 className='bg-cyan-700 ml-6 py-2 px-4 rounded-full'>Customization : {customization}</h3>
                    </div>

                    <h3 className='text-2xl font-extrabold mt-5'>Item Name: {itemName}</h3>

                    <h4 className='text-xl font-medium mt-3'>Subcategory : {subcategoryName}</h4>

                    <p className='text-base font-bold my-3'>Stock Status: {stockStatus}</p>

                    <p className='text-lg font-bold my-3'>Price : {price}  <span className="font-extrabold">৳</span></p>
                    <button onClick={handleCraftDetail} className="btn bg-cyan-700 text-white">View Details</button>
                </div>
            </div>
        </div>
    );
};
AllCraftCategoryItems.propTypes = {
    cat: PropTypes.object.isRequired
}
export default AllCraftCategoryItems;