import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import useAuth from '../../hooks/useAuth'

const Orders = () => {
    const {user} = useAuth();
    const history = useHistory()

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`, {
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
          </div>
        </Row>
        <Row>
          {orders.map((order) => (
            <li key={order._id}>
              {order?.name} : {order?.email}{" "}
            </li>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Orders;
