// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Headercss from "./Header.module.css";

function Header() {
  return (
    <div className={Headercss.container}>
      <div className="row align-items-center">
        <div className="col-lg-8 mb-4 mb-lg-0">
          <h2>Bootstrap Responsive Pricing Table Snippet</h2>
          <p>Pricing Table With Custom Hover And Effects</p>
        </div>
      </div>
    </div>
  );
}

export default Header;

// add to cart problem

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import headercss from './header.module.css'

// function Header() {
//   return (
//     <header className="bg-dark py-5">
//       <div className='Container px-4 px-lg-5 my-5'>
//         <div className='text-center text-white'>
//           <h1 className='display-4 fw-bolder'>
//           Shop in style
//           </h1>
//           <p className='lead fw-normal text-white-50 mb-0'>with this shop homepage template</p>
//         </div>
//       </div>
//     </header>
// <Container>
//   <Row>
//     <h1></h1>
//   </Row>
//   <Row>
//     <h5>with this shop homepage template</h5>
//   </Row>
// </Container>
// );
// }

// export default Header;
