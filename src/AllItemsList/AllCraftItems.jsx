import { useLoaderData } from "react-router-dom";
import AllCraftItem from "./AllCraftItem";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AllCraftItems = () => {

    const loadAllCraftData = useLoaderData();

    console.log(loadAllCraftData);

    const { loading } = useContext(AuthContext);
    if (loading) {
        return <div className="flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
    }

    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table bg-stone-600">
                    {/* head */}
                    <thead>
                        <tr className="text-stone-200 text-base">
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
                            loadAllCraftData.map(loadAllCraft => <AllCraftItem key={loadAllCraftData._id} loadAllCraft={loadAllCraft} ></AllCraftItem>)
                        }


                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default AllCraftItems;