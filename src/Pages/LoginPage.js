const LoginPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <br />
        <br />
        <input type="password" placeholder="Password" required />
        <br />
        <br />
        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
export default LoginPage;
