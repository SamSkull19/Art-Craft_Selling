
const AddCraftItems = () => {
    return (
        <div>
            <section className="max-w-4xl p-6 mx-auto bg-stone-600 rounded-md shadow-md dark:bg-gray-800 my-20">
                <h1 className="text-3xl font-bold text-white text-center py-8">Add Craft Items</h1>
                <form>
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
                            <input type="email" id="subcategory_Name" name="subcategory_Name" placeholder="Enter Subcategory Name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
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
                            <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
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
                            <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                <option value="" disabled selected>Select Customization</option>
                                <option>Yes</option>
                                <option>No</option>

                            </select>
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200">Processing Time : </label>
                            <input type="number" id="processing_time" name="processing_time" placeholder="Enter Processing Time (In Days)" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200">Stock Status : </label>
                            <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                <option value="" disabled selected>Select Stock Status</option>
                                <option>In stock</option>
                                <option>Made to Order</option>

                            </select>
                        </div>


                    </div>

                    <div className="flex justify-center mt-10 py-5">
                        <button className="px-16 py-3 leading-5 text-black transition-colors duration-200 transform bg-slate-200 rounded-md hover:bg-gray-500 hover:text-white focus:outline-none focus:bg-gray-600 text-lg font-medium">Add Item</button>
                    </div>
                </form>
            </section>

        </div>
    );
};

export default AddCraftItems;