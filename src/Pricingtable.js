import React from "react";
import Container from "react-bootstrap/Container";
import { RxCheck , RxCross2 } from "react-icons/rx";

import {
  Card,
  CardHeader,
  CardBody
} from "reactstrap";

export default function Pricingtable({ props }) {
  return (
    <Container className="mb-5" >
      <div className="row row-cols-md-1 column-gap-3 ps-5"
      style={{marginLeft: '5%'}}>
       <>
         {props.map((details) => (
           <Card
             key={details.id} // Add a unique key to each Card component
             className="col mt-5"
             style={{
               width: "30%",
               height:"auto",
             }}
           >
 
             <CardHeader className="text-center">
               <div style={{textEmphasisStyle:"muted"}}>{details.type}</div>
               <h1>{details.price}</h1>
             </CardHeader>
             <CardBody>
               <div><RxCheck/> {details.user}</div>
               <div><RxCheck/> {details.Storage}</div>
               <div><RxCheck/> {details.projects}</div>
               <div><RxCheck/> {details.access}</div>
               
               {details.user === 'Single User' ? (<a href="www.google.com" class="btn btn-outline-secondary disabled" tabindex="-1" role="button" aria-disabled="true" style={{
               border: "none",
               color:"black",
               }}> <RxCross2/> {details.private} </a>): (<div> <RxCheck/> {details.private} </div>)}
 
               {details.user === 'Single User' ? (<a href="www.google.com" class="btn btn-outline-secondary disabled" tabindex="-1" role="button" aria-disabled="true" style={{
               border: "none",
               color:"black",
               }}>  <RxCross2/> {details.support} </a>): (<div> <RxCheck/> {details.support} </div>)}

              {details.user === 'Single User' ? (<a href="www.google.com" class="btn btn-outline-secondary disabled" tabindex="-1" role="button" aria-disabled="true" style={{
               border: "none",
               color:"black",
               }}>  <RxCross2/> {details.domain} </a>): (<div> <RxCheck/> {details.domain} </div>)}

               {details.user === 'Single User'&&'5 Users' ? (<a href="www.google.com" class="btn btn-outline-secondary disabled" tabindex="-1" role="button" aria-disabled="true" style={{
               border: "none",
               color:"black",
               }}>  <RxCross2/> {details.report} </a>): (<div> <RxCheck/> {details.report} </div>)}

               <br></br>

               {details.user == 'Unlimited Users' ? (<div class="d-grid col-6 mx-auto"><button class="btn btn-primary" type="button">Button</button></div>) : (<div class="d-grid col-6 mx-auto">
                 <a class="btn btn-primary disabled" aria-disabled="true" role="button" data-bs-toggle="button">Button</a>
                </div>)}
               
             </CardBody>
           </Card>
         ))}
       </>
      </div>
    </Container>
  );
}
