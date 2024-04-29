import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyCraftItem from "./MyCraftItem";

const MyCraftItems = () => {

    const { user, loading } = useContext(AuthContext);


    const [myCraftData, setMyCraftData] = useState([]);
    const [filterMyData, setFilterMyData] = useState([]);


    const handleFilterData = filter => {
        if(filter === 'all'){
            setFilterMyData(myCraftData);
        }

        else if(filter === 'yes'){
            const newMyCraftDataYes = myCraftData.filter(data => data.customization === 'Yes');
            setFilterMyData(newMyCraftDataYes);
        }
        
        else if(filter === 'no'){
            const newMyCraftDataNo = myCraftData.filter(data => data.customization === 'No');
            setFilterMyData(newMyCraftDataNo);
        }
    }


    useEffect(() => {
        if (user && user.email) {
            fetch('http://localhost:5000/craftItems')
                .then(response => response.json())
                .then(data => {
                    const myData = data.filter(item => item.email === user.email);
                    setMyCraftData(myData);
                    setFilterMyData(myData);
                });
        }
    }, [user]);

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    console.log(myCraftData);

    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 bg-stone-300 text-base px-11">Customization Filter</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow text-base rounded-box w-60 bg-stone-300">
                        <li onClick={ () => handleFilterData('all') }><a>All</a></li>

                        <li onClick={ () => handleFilterData('yes') }><a>Yes</a></li>

                        <li onClick={ () => handleFilterData('no') }><a>No</a></li>
                    </ul>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
                {
                    filterMyData.map(myCraft => <MyCraftItem key={myCraft._id} myCraft={myCraft}></MyCraftItem>)
                }
            </div>
        </div>
    );
};

export default MyCraftItems;