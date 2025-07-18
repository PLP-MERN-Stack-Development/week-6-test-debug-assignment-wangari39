import React from 'react';

function BugForm() {
  return (
    <form>
      <h2>Submit Bug</h2>
      <input placeholder="Title" />
      <textarea placeholder="Description"></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default BugForm;