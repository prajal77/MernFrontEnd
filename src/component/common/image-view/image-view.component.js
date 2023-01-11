import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'


export const Imageview = ({ path, dir }) => {
   const onInit = (e) => {
      // console.log('lightGallery has been initialized');
   };
   return (<>
      <LightGallery
         onInit={onInit}
         speed={500}
         plugins={[lgThumbnail, lgZoom]}
      >
         <a href={process.env.REACT_APP_IMAGE_URL + dir + "/" + path}>View Image</a>
         {/* <img className="img img-fluid" alt="" src={process.env.REACT_APP_IMAGE_URL + dir + "/" + path} /> */}
      </LightGallery>
   </>)
} 