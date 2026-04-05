import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  // Fetch API data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filter users based on search
  const filteredData = data.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  // Loading state
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Error state
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>User Dashboard</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px",
          margin: "10px",
          width: "200px"
        }}
      />

      {/* User List */}
      {filteredData.length > 0 ? (
        filteredData.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
          />
        ))
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
}

export default App;