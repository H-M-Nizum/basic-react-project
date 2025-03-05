const FromSubmit = () => {
  const SubmitForm = (event) => {
    //  If use this event ignore page reloading.
    event.preventDefault();
    // TODO :
    alert("Form Submited Successfully.");
  };
  return (
    <div>
      <h1>8. Responding to event for form submitting</h1>
      <form onSubmit={SubmitForm}>
        <input type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FromSubmit;
