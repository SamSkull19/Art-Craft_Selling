import { useLoaderData } from "react-router-dom";
import AllCraftItem from "./AllCraftItem";

const AllCraftItems = () => {

    const loadAllCraftData = useLoaderData();

    console.log(loadAllCraftData);


    return (
        <div>
            {/* <p>Data : {loadAllCraftData.length}</p> */}
            <div className="overflow-x-auto">
                <table className="table bg-stone-300">
                    {/* head */}
                    <thead>
                        <tr className="text-black text-sm">
                            <th>Item Name</th>
                            <th>Subcategory</th>
                            <th>Rating</th>
                            <th>Stock</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            loadAllCraftData.map( loadAllCraft => <AllCraftItem key={loadAllCraftData._id} loadAllCraft={loadAllCraft} ></AllCraftItem> )
                        }

                        
                    </tbody>
                    {/* foot */}
                    {/* <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot> */}

                </table>
            </div>

        </div>
    );
};

export default AllCraftItems;