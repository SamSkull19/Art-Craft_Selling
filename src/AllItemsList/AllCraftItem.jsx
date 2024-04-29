import PropTypes from 'prop-types';

const AllCraftItem = ({ loadAllCraft }) => {

    const { imageLink, _id, itemName, price, subcategoryName, stockStatus, rating } = loadAllCraft;


    return (

        <tr className='bg-orange-300'>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={imageLink} alt={_id} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{itemName}</div>
                    </div>
                </div>
            </td>
            <td>
                {subcategoryName}
            </td>
            
            <td>
                {rating}
            </td>
            
            <td>
                {stockStatus}
            </td>

            <td className='font-bold'>
                {price} <span className="font-extrabold">৳</span>
            </td>
            <th>
                <button className="btn btn-active btn-ghost btn-sm">View Details</button>
            </th>
        </tr>

    );
};

AllCraftItem.propTypes = {
    loadAllCraft: PropTypes.object.isRequired,
}

export default AllCraftItem;