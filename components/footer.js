import FooterCompany from "./footer/company";
import FooterCopyright from "./footer/copyright";
import FooterProduct from "./footer/product";
import FooterSite from "./footer/site";
import FooterSocialNetwork from "./footer/social-network";

const Footer=() => {
    return (
        <>
        <footer class="footer bg-color" data-bg-color="#f4f8fa">
           <div class="footer-top">
               <div class="container-fluid">
                   <div class="row border-bottom pt--70 pb--70">
                      <FooterSite></FooterSite>
                      <FooterCompany></FooterCompany>
                      <FooterProduct></FooterProduct>
                      <FooterSocialNetwork></FooterSocialNetwork>
                   </div>
               </div>
           </div>
           <FooterCopyright></FooterCopyright>
       </footer>
       </>
    );

}
export default Footer;