function UserCard({ name, email }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      margin: "10px",
      padding: "10px",
      borderRadius: "8px"
    }}>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}

export default UserCard;