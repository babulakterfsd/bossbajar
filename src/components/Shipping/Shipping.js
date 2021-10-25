import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {clearTheCart, getStoredCart} from '../../utilities/fakedb'
import useAuth from "../../hooks/useAuth";

const Shipping = () => {
  const { user } = useAuth();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
      const savedCart = getStoredCart();
      data.order = savedCart;

      fetch(`http://localhost:5000/orders`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(result => {
        if(result.insertedId) {
          alert('Order Processed Successfully !');
          clearTheCart();
          reset();
        }
      })
  };
  return (
    <Container>
      <Row style={{ minHeight: "100vh" }}>
        <div className="col-12 col-md-10 col-lg-8 mx-auto">
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="shadow-sm px-2 px-md-5 py-3 mt-5 text-secondary"
          >
            <h2 className="mb-4"> Please, Provide your shipment details!</h2>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  value={user?.displayName}
                  className="text-secondary fw-semi-bold"
                  readOnly
                  {...register("name", { required: true })}
                  {...(errors.name && <span>Name is required</span>)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={user?.email}
                  className="text-secondary fw-semi-bold"
                  readOnly
                  {...register("email", { required: true })}
                  {...(errors.email && <span>Email is required</span>)}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPostCode">
                <Form.Label>ZIP</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="5850"
                  {...register("zip", { required: true })}
                  {...(errors.exampleRequired && (
                    <span>This field is required</span>
                  ))}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>City / State</Form.Label>
                <Form.Select
                  defaultValue="Rajshahi"
                  className="text-secondary"
                  {...register("city", { required: true })}
                  {...(errors.city && <span>This field is required</span>)}
                >
                  <option>Dhaka</option>
                  <option>Rangpur</option>
                  <option>Rajshahi</option>
                  <option>Dinajpur</option>
                  <option>Mymensing</option>
                  <option>Khulna</option>
                  <option>Sylhet</option>
                  <option>Barisal</option>
                  <option>Comilla</option>
                  <option>Chittagong</option>
                  <option>Choose...</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  placeholder="Bangladesh"
                  {...register("country", { required: true })}
                  {...(errors.country && <span>This field is required</span>)}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress">
              <Form.Label>Detailed Address</Form.Label>
              <Form.Control
                placeholder="Ward-7, Dhunat Pourashova, Dhunat, Bogra, Rajshahi, Bangladesh"
                {...register("address", { required: true })}
                {...(errors.address && <span>This field is required</span>)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="+88-01740-020464"
                {...register("phone", { required: true })}
                {...(errors.address && <span>This field is required</span>)}
              />
            </Form.Group>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Cash On Delivery" />
            </Form.Group>

             {/* <Link to="/placeOrder"> */}
              <Button
                variant="success"
                type="submit"
                className="px-3 py-2 fw-bold"
              >
                <i className="fas fa-clipboard-check text-warning me-2"></i>
                Confirm Order
              </Button>
            {/* </Link>  */}
          </Form>
        </div>

        {/* <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ margin: "50px 0px", display: "block" }}
        >
          <input
            defaultValue="test"
            {...register("name")}
            style={{ display: "block", marginBottom: "15px", width: "90vw" }}
          />

          <input
            {...register("email", { required: true })}
            style={{ display: "block", marginBottom: "5px", width: "90vw" }}
          />

          {errors.email && (
            <span
              style={{ color: "red", display: "block", marginBottom: "15px" }}
            >
              This field is required
            </span>
          )}

          <input type="submit" />
        </form> */}
      </Row>
    </Container>
  );
};

export default Shipping;
