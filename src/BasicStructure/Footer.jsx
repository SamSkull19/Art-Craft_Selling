
import '../App.css';

const Footer = () => {
    return (
        <div className="mt-10 max-w-[1170px] mx-auto">
            <footer className="footer p-10 bg-stone-400 bg-opacity-5 text-base-content roboto">
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
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Our Crafts</a>
                    <a className="link link-hover">Our Arts</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Copyright Policy</a>
                    <a className="link link-hover">Patent Policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;