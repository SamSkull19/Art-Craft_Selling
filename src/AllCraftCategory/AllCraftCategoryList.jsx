import { useLoaderData, useParams } from "react-router-dom";
import AllCraftCategoryItems from "./AllCraftCategoryItems";

const AllCraftCategoryList = () => {
    const categoryData = useLoaderData();
    const { id } = useParams();

    console.log(id);


    const newCategoryData = categoryData.filter(item => item.subcategoryID === id);

    console.log(newCategoryData);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                Array.isArray(newCategoryData) && newCategoryData.length > 0 ? (
                    newCategoryData.map(cat => (
                        <AllCraftCategoryItems key={cat._id} cat={cat}></AllCraftCategoryItems>
                    ))
                ) : (
                    <p>No items found for this category</p>
                )
            }
        </div>
    );
};

export default AllCraftCategoryList;
