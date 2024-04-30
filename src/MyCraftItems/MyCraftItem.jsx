import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCraftItem = ({ myCraft, handleDeleteItems}) => {

  const [remainItems, setRemainItems] = useState([]);

  useEffect(() => {
    setRemainItems(myCraft);
  }, [myCraft]);

  console.log(remainItems);

  const handleDelete = id => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    })
      .then((result) => {
        if (result.isConfirmed) {

          fetch(`https://neff-roxx-server-afa7i0hfc-sifat-samins-projects.vercel.app/craftItems/${id}`, {
            method: 'DELETE'
          })
            .then(res => res.json())
            .then(data => {
              if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your Items has been deleted.",
                  icon: "success"
                });
              }
            })
          handleDeleteItems(id);
        }
      });
  }

  const navigate = useNavigate();

    const handleUpdate = id => {
        navigate(`/updatePage/${id}`);
        console.log(id);
    }

  const { imageLink, _id, itemName, customization, price, stockStatus, rating } = remainItems;



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

          <button onClick={() => handleUpdate(_id)} className="btn bg-cyan-700 text-white w-[100px]">Update</button>

          <button onClick={() => handleDelete(_id)} className="btn bg-cyan-700 text-white w-[100px] ml-6">Delete</button>
        </div>
      </div>
    </div>
  );
};

MyCraftItem.propTypes = {
  myCraft: PropTypes.object.isRequired,
  handleDeleteItems: PropTypes.func.isRequired
}

export default MyCraftItem;