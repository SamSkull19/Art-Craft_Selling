import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



import '../App.css';

const Footer = () => {
    return (
        <div className="mt-10 max-w-[1170px] mx-auto">
            <footer className="footer p-10 bg-stone-400 bg-opacity-0 text-base-content roboto">
                <aside>

                    <p ><span className="text-2xl font-extrabold flex items-center">NeffRoxx Crafts<br /><br /></span>Transforming paper and glass into timeless Wonders<br /><br />NeffRoxx Crafts ignites creativity and elevates <br />the artistry of everyday materials.</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Creativity</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Glass Arts</a>
                    <a className="link link-hover">Paper Crafts</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Company</h6>
                    <p className="">Email: info@neffroxxcrafts.com</p>
                    <p className="">Phone: +8801234567811</p>
                    <p className="">Website: www.neffroxxcrafts.com</p>
                    <p className="">Address: 123 Craft Street, <br />Bajra, Sylhet</p>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Copyright Policy</a>
                    <a className="link link-hover">Patent Policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <a className="link link-hover flex items-center"><FaFacebook /> <span className="ml-2">Facebook</span></a>
                    <a className="link link-hover flex items-center"><FaTwitter /> <span className="ml-2">Twitter</span></a>
                    <a className="link link-hover flex items-center"><FaLinkedin /> <span className="ml-2">Linkedin</span></a>
                    <a className="link link-hover flex items-center"><FaInstagram /> <span className="ml-2">Instagram</span></a>


                </nav>
            </footer>
            <div className="flex justify-center items-center pt-5 pb-16">
                <h1 className="w-4/6 text-center text-sm font-semibold">
                    © NeffRoxx Crafts 2024. All rights reserved. The content, designs, and images on this website are the intellectual property of NeffRoxx Crafts and may not be reproduced, distributed, or transmitted without prior written permission. </h1>
            </div>
        </div>
    );
};

export default Footer;