import p1 from '../assets/1.jpg'
import p2 from '../assets/2.jpg'
import p3 from '../assets/6.jpg'


const Executives = () => {

    return (
        <div className="my-16 roboto">

            <h2 className="mb-6 text-4xl text-center font-extrabold">Our Executives</h2>
            <p className="my-4 text-center font-normal text-gray-400">NeffRoxx Crafts, we take pride in our talented and dedicated team of professionals who are the backbone of our success. Each member of our team brings unique skills, experiences, and perspectives, contributing to a dynamic and collaborative work environment. </p>


            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto ml-6 md:ml-20 lg:ml-0">

                <div className="card w-[350px] bg-orange-200 shadow-xl" data-aos="zoom-in" data-aos-delay="10000" data-aos-anchor=".example-selector" data-aos-duration="2000">
                    <figure><img src={p1} alt="..." /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-red-950">
                            John Denver
                            <div className="badge badge-accent text-yellow-100 p-2">CEO</div>
                        </h2>
                        <p className='text-orange-900 font-medium text-justify'>John Denver is the driving force behind our companies vision and success. As the CEO, she leads with unwavering dedication and a keen strategic mindset. With over two decades of experience in the industry, Jane brings a wealth of knowledge and expertise to her role.</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Founder</div>
                            <div className="badge badge-outline">Entrepreneur</div>
                        </div>
                    </div>
                </div>

                <div className="card w-[350px] bg-orange-200 shadow-xl" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="2000">
                    <figure><img src={p2} alt="..." /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-red-950">
                            John Doe
                            <div className="badge badge-success text-yellow-100 p-2">General Manager</div>
                        </h2>
                        <p className='text-orange-900 font-medium text-justify'>John Doe is our General Manager, responsible for overseeing the day-to-day operations of our organization. With a wealth of experience in management and a proven track record of success, John plays a pivotal role in driving our company forward.</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Founder</div>
                            <div className="badge badge-outline">Enthusiast</div>
                        </div>
                    </div>
                </div>

                


                <div className="card w-[350px] bg-orange-200 shadow-xl" data-aos="fade-up-left" data-aos-duration="2000">
                    <figure><img src={p3} alt="..." /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-red-950">
                            Sarah Smith
                            <div className="badge badge-secondary text-yellow-100 p-2">Project Head</div>
                        </h2>
                        <p className='text-orange-900 font-medium text-justify'>Sarah Smith is our dedicated Project Head, leading our team with precision and expertise to deliver successful outcomes on every project. With a background in project management and a passion for innovation, Sarah brings a dynamic energy to our organization.</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Traveler</div>
                            <div className="badge badge-outline">Watcher</div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Executives;