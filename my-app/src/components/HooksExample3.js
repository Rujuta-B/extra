import React, { useState } from "react";

export const HooksExample3 = () => {
  const [name, setName] = useState({ firstname: "", lastname: "" });

  return (
    <form>
      <input
        type="text"
        value={name.firstname}
        onChange={(e) => setName({...name, firstname: e.target.value })}
      />
     <h2>your firstname is : {name.firstname}</h2>

     <input
        type="text"
        value={name.lastname}
        onChange={(e) => setName({...name, lastname: e.target.value })}
      />
      <h2>your lastname is : {name.lastname}</h2>
    </form>
  );
};
