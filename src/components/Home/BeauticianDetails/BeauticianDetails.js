import React from 'react';
import "./BeauticianDetails.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";




const BeauticianDetails = ({team}) => {
   return (
     <div className="col-md-3 pb-4">
       <div className="team-member shadow-sm rounded">
         <figure className="effect-zoe p-1">
           <div>
             <img className="img-fluid" src={team.img} alt="" />
           </div>
           <div className="team-attrs fw-bold mt-4 mb-4">
             <div className="text-brand team-name">
               {team.name}
             </div>
             <div className="">{team.position}</div>
           </div>
           <figcaption className="">
             <p className="icon-links">
               <a href="#!">
                 <FontAwesomeIcon icon={faFacebook} />
                 {team.fb}
               </a>
               <a href="#!">
                 <FontAwesomeIcon icon={faInstagram} />
                 {team.instagram}
               </a>
               <a href="#!">
                 <FontAwesomeIcon icon={faEnvelope} className= "icon"/>
                 {team.email}
               </a>
             </p>

             <p className="phone-number">
               <a href="#!">
                 <FontAwesomeIcon icon={faPhone} className="" /> tel: 1 234 567-89-10
               </a>
             </p>
           </figcaption>
         </figure>
       </div>
       <div className="dividewhite4"></div>
     </div>
   );
};

export default BeauticianDetails;