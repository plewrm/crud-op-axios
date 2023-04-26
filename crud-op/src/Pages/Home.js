import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

const Home = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3000/user");
    setUser(result.data.reverse());
  };

  const deleteHandler = async (id) => {
    await axios.delete(`http://localhost:3000/user/${id}`);
    loadUser();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
            {user &&
              user?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>

                  <td>
                    <Link
                      to={`/operation/${item.id}`}
                      className="btn btn-primary"
                    >
                      View
                    </Link>
                    &nbsp;
                    <Link
                      class="btn btn-outline-primary mr-2"
                      to={`/operation/edit/${item.id}`}
                    >
                      Edit
                    </Link>
                    &nbsp;
                    <Link
                      onClick={() => deleteHandler(item.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </Link>
                    &nbsp;
                  </td>
                </tr>
              ))}
          </thead>
          <tbody></tbody>
        </Table>
      </div>
    </div>
  );
};

export default Home;
