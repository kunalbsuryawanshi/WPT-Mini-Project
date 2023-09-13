import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import registrationRecord from "../images/registtrationrecord.jpg";
import userRecord from "../images/userRecord.jpg";
import NavigationBar from "../NavigationBar";
import Footer from "../Footer";
function Status() {
  return (
    <>
     <NavigationBar/>
      <div className="row mt-5 justify-content-center align-items-center">
        <h2 className="text-center mb-0"><span className="bg-danger p-2 text-light rounded-4 shadow">Complaint Status</span></h2>
        <div className="col-sm-12 col-md-4 mt-5 d-flex justify-content-center" style={{marginTop : "-100px"}}>
          <Link
            style={{ textDecoration: "none" }}
            to={"/RegistrationRecord"}
          >
            <Card className="shadow-lg" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={registrationRecord} />
              <Card.Body>
                <Card.Title className="text-center">
                  Registered <span className="text-danger">Complaint</span>
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className="col-sm-12 col-md-4 mt-5 d-flex justify-content-center " style={{marginTop : "-100px"}}>
          <Link
            className=""
            style={{ textDecoration: "none" }}
            to={"/UserRecord"}
          >
            <Card className="shadow-lg" style={{ width: "18rem" }}>
              <Card.Img className="border-bottom" variant="top" src={userRecord} />
              <Card.Body>
                <Card.Title className="text-center">
                  User <span className="text-danger">Records</span>
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </div>
      </div>
      <Footer/>
    </>
  );
}
export default Status;
