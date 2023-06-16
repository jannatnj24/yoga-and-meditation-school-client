import { FaFacebook,FaInstagram,FaTwitterSquare } from "react-icons/fa";


const Footer = () => {
    return (
        
    <footer className="footer p-10 bg-purple-100 text-neutral-content">
  <div className="text-black">
    <img className="w-[160 px] h-[60px] rounded" src={'https://i.ibb.co/vJgqn5s/png-transparent-yoga-logo-rishikesh-yogi-yoga-text-monochrome-flower.png'} alt="" />
    <a ><FaFacebook></FaFacebook></a>
    <a ><FaInstagram></FaInstagram></a>
    <a ><FaTwitterSquare></FaTwitterSquare></a>
   
    
  </div> 
  <div className="text-black">
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Class</a>
    <a className="link link-hover">low cost</a>
    <a className="link link-hover">best teaching</a>
    
  </div> 
  <div className="text-black">
    <span className="footer-title">School</span> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Class</a>
  </div> 
  <div className="text-black">
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer> 
        
    );
};

export default Footer;