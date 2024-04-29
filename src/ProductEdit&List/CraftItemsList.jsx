import { useLoaderData } from "react-router-dom";
import CraftItem from "./CraftItem";

const CraftItemsList = () => {
    const craftItems = useLoaderData();
    console.log(craftItems);
    return (
        <div>

            <div className="mt-16 roboto mb-20">
                <h2 className="mb-6 text-4xl text-center font-extrabold">Crafted Items List</h2>
                <p className="my-4 text-center font-normal text-gray-400">
                    A crafted items list catalogs a collection of handmade creations, showcasing the skill and creativity of artisans. From intricately designed jewelry to intricately woven textiles, each item reflects a unique blend of craftsmanship and artistic expression.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        craftItems.slice(0,6).map(craftItem => <CraftItem key={craftItem.id} craftItem={craftItem}></CraftItem>)
                    }
                </div>
            </div>
        </div>

    );
};

export default CraftItemsList;