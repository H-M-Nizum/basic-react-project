const LoginStatusButton = (status) => {
  return status ? <button>Logout</button> : <button>Login</button>;
};
const ConditionalRendaring = () => {
  return (
    <div>
      <h1>4. Conditional Rendering For Login Status</h1>
      <p>{LoginStatusButton(true)} for status True</p>
      <p>{LoginStatusButton(false)} for status False</p>
    </div>
  );
};

export default ConditionalRendaring;
