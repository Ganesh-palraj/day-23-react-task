import "./App.css";
import React from "react";
import Navigation from "./Navigation";
import Header from "./header";
import "bootstrap/dist/css/bootstrap.min.css";
import Pricingtable from "./Pricingtable";
import { Badge } from 'reactstrap';
import { Container } from "react-bootstrap";




function App() {
  const student = [
    {
      id:'1',
      type:'FREE',
      price: "$0/ month",
      user: "Single User",
      Storage: "5GB Storage",
      projects: "Unlimited Public Projects",
      access: "Community Access",
      private: "Unlimited Private Projects",
      support: "Dedicated Phone Projects",
      domain: "Free Subdomain",
      report: "Monthly Status Reports",
    },
    {
      id:'2',
      type:'PLUS',
      price: "$9/ month",
      user: "5 Users",
      Storage: "50GB Storage",
      projects: "Unlimited Public Projects",
      access: "Community Access",
      private: "Unlimited Private Projects",
      support: "Dedicated Phone Projects",
      domain: "Free Subdomain",
      report: "Monthly Status Reports",
    },
    {
      id:'3',
      type:'PRO',
      price: "$49/ month",
      user: "Unlimited Users",
      Storage: "5GB Storage",
      projects: "Unlimited Public Projects",
      access: "Community Access",
      private: "Unlimited Private Projects",
      support: "Dedicated Phone Projects",
      domain: "Free Subdomain",
      report: "Monthly Status Reports",
    }
  ];

  

  return (
    <>
      <Navigation />
      <Header />
      <br></br>
      <h6><Badge  color="secondary">Bootstrap 5.1.0</Badge></h6>
      <Container>
        <Pricingtable props={student} />
      </Container>
      
      
    </>
  );
}

export default App;
