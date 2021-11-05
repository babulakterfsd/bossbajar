import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import useAuth from '../../hooks/useAuth'

const Orders = () => {
    const {user} = useAuth();
    const history = useHistory()

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://guarded-dawn-79467.herokuapp.com/orders?email=${user?.email}`, {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('idToken')}`
        }
    })
      .then((res) => {
        if(res.status === 200) {
          return res.json(200)
        } else if(res.status === 401) {
           history.push('/login')
        }
      })
      .then((data) => setOrders(data));
  }, []);

  return (
    <section id="orders" className="py-5" style={{ minHeight: "100vh" }}>
      <Container>
        <Row>
          <div className="col-12 col-md-6 mx-auto">
            <h2 className="text-center">
              You have placed {orders.length} order{" "}
            </h2>
            <p className="text-center">We'll deliver as soon as possible</p>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Orders;
