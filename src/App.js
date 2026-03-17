// App.js
import React, { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>Users List</h1>
      {loading ? (
        <p style={{ textAlign: "center" }}>Loading users...</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {users.map((user) => (
            <div
              key={user.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "15px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                textAlign: "center",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <h3 style={{ margin: "10px 0" }}>{user.name}</h3>
              <p style={{ margin: "5px 0", color: "#555" }}>{user.email}</p>
              <p style={{ margin: "5px 0", color: "#777" }}>{user.company.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;