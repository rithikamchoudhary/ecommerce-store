const RegisterPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <br />
        <br />
        <input type="email" placeholder="Email" required />
        <br />
        <br />
        <input type="password" placeholder="Password" required />
        <br />
        <br />
        <button className="btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
