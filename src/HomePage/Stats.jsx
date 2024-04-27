
const Stats = () => {
    return (
        <div className="mt-20">
            <div className="flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl font-bold ">Statistical Arts and Crafts</h1>
                <h3 className="mt-4 text-gray-400">Discover the beauty of data through our unique collection of statistical arts and crafts. <br />Merge analytics with aesthetics and bring numbers to life in stunning visual representations.</h3>
            </div>

            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ml-20 lg:ml-0">
                <div className="w-[250px] bg-stone-300 p-6 rounded-3xl text-red-950">
                    <div className="radial-progress " style={{ "--value": "75", "--size": "12rem", "--thickness": "2rem" }} role="progressbar">75%</div>
                    <p className="text-center text-xl font-bold mt-5">Scrapbooking Selling</p>
                </div>

                <div className="w-[250px] bg-stone-300 p-6 rounded-3xl text-orange-900">
                    <div className="radial-progress " style={{ "--value": "90", "--size": "12rem", "--thickness": "2rem" }} role="progressbar">90%</div>
                    <p className="text-center text-xl font-bold mt-5">Glass Painting Selling</p>
                </div>

                <div className="w-[250px] bg-stone-300 p-6 rounded-3xl text-teal-700">
                    <div className="radial-progress" style={{ "--value": "80", "--size": "12rem", "--thickness": "2rem" }} role="progressbar">80%</div>
                    <p className="text-center text-xl font-bold mt-5 ">Glass Dying & Staining Selling</p>
                </div>

                <div className="w-[250px] bg-stone-300 p-6 rounded-3xl text-indigo-900">
                    <div className="radial-progress" style={{ "--value": "85", "--size": "12rem", "--thickness": "2rem" }} role="progressbar">85%</div>
                    <p className="text-center text-xl font-bold mt-5">Paper Quilling & Origami Selling</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;