import Swal from 'sweetalert2'

const AddCraftItems = () => {

    const handleAddCraftItem = event => {
        event.preventDefault();

        const form = event.target;

        const username = form.username.value;
        const email = form.emailAddress.value;
        const itemName = form.item_name.value;
        const subcategoryName = form.subcategory_Name.value;
        const shortDescription = form.short_description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const imageLink = form.image_link.value;
        const imageType = form.image_type.value;
        const processingTime = form.processing_time.value;
        const stockStatus = form.Stock_Status.value;


        const newItem = {username, email, itemName, subcategoryName, shortDescription, price, rating, customization, imageLink, imageType, processingTime, stockStatus}

        console.log(newItem);

        fetch('http://localhost:5000/craftItems', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Item Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  event.target.reset();
            }
        })
    }

    return (
        <div>
            <section className="max-w-4xl p-6 mx-auto bg-stone-600 rounded-md shadow-md dark:bg-gray-800 my-20">
                <h1 className="text-3xl font-bold text-white text-center py-8">Add Craft Items</h1>

                <form onSubmit={handleAddCraftItem}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 text-lg">

                    <div>
                            <label className="text-white dark:text-gray-200">User Name :</label>
                            <input type="text" id="username" name="username" placeholder="Enter Your Name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200">Email Address : </label>
                            <input type="email" id="emailAddress" name="emailAddress" placeholder="Enter Your Email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200">Item Name : </label>
                            <input type="text" id="item_name" name="item_name" placeholder="Enter Item Name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>


                        <div>
                            <label className="text-white dark:text-gray-200">Subcategory Name : </label>
                            <select id="subcategory_Name" name="subcategory_Name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                <option value="" disabled selected>Select Category of Item</option>
                                <option>Card Making</option>
                                <option>Scrapbooking</option>
                                <option>Paper Quilling & Origami</option>
                                <option>Glass Painting</option>
                                <option>Lampworking</option>
                                <option>Glass Dying & Staining</option>
                            </select>
                        </div>


                        <div>
                            <label className="text-white dark:text-gray-200">Short Description : </label>
                            <input type="text" id="short_description" name="short_description" placeholder="Enter Short Description" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200">Price : </label>
                            <input type="number" id="price" name="price" placeholder="Enter Item Price" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200">Rating : </label>
                            <select name="rating" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                <option value="" disabled selected>Select Rating</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        
                        <div>
                            <label className="text-white dark:text-gray-200">Customization : </label>
                            <select name="customization" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                <option value="" disabled selected>Select Customization</option>
                                <option>Yes</option>
                                <option>No</option>

                            </select>
                        </div>

                        

                        <div>
                            <label className="text-white dark:text-gray-200">Image Link : </label>
                            <input type="text" id="image_link" name="image_link" placeholder="Enter Image Link" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200">Image Type : </label>
                            <input type="text" id="image_type" name="image_type" placeholder="Enter Image Type" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200">Processing Time : </label>
                            <input type="number" id="processing_time" name="processing_time" placeholder="Enter Processing Time (In Days)" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200">Stock Status : </label>
                            <select name="Stock_Status" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                <option value="" disabled selected>Select Stock Status</option>
                                <option>In stock</option>
                                <option>Made to Order</option>

                            </select>
                        </div>


                    </div>

                    <div className="flex justify-center mt-10 py-5">
                        <button className="w-1/2 py-3 leading-5 text-black transition-colors duration-200 transform bg-slate-200 rounded-md hover:bg-gray-500 hover:text-white focus:outline-none focus:bg-gray-600 text-lg font-medium">Add Item</button>
                    </div>
                </form>
            </section>

        </div>
    );
};

export default AddCraftItems;