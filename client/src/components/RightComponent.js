import React, { useEffect, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import axios from "axios";

export default function RightComponent() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/category/")
      .then(({ data }) => {
        console.log(data);
        setPost(data?.data);
        setLoading(!loading);
      })
      .catch(({ response }) => {
        setErr(response?.data);
        setShow(!show);
      });
  }, []);
  return (
    <>
      <div className="card p-2 bg-light">
        <h4>Latest Post</h4>
        <ul className="list-group">
          <li className="list-group-item">A simple list group item</li>
          <li className="list-group-item list-group-item-light">
            A simple primary list group item
          </li>
        </ul>
      </div>
      <div className="card p-2 bg-light mt-4">
        <h4>Trending categories</h4>
        <div>
          {err && show ? (
            <Alert variant="danger" onClose={() => setShow(!show)}>
              <Alert.Heading>
                Oh Snap! Can't fetch categories at the moment
              </Alert.Heading>
            </Alert>
          ) : (
            <ol className="list-group list-group-numbered">
              {post?.map((data) => {
                return (
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">{data?.title}</div>
                      <p style={{ fontStyle: "italic", fontSize: "14px" }}>
                        View {data?.title} trends
                      </p>
                    </div>
                    <span className="badge bg-primary rounded-pill">14</span>
                  </li>
                );
              })}
            </ol>
          )}
        </div>
      </div>
    </>
  );
}
