import React from "react";

const Users = () => {
  const makeAdmin = (id) => {
    alert();
  };

  const removeUser = (id) => {
    const proceed = window.confirm("Are you want to remove this uer?");
    if (proceed) {
      const url = `https://localhost:5000/users/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(";data deleted", data);
        });
    }
  };
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-serif font-semibold font-accent text-center mb-12 text-accent">
        Remove Or Make admin <span className="text-secondary">Users</span>
      </h1>
      <div className="grid md:grid-cols-1 gap-4">
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th className="font-serif text-accent font-semibold">Name</th>
                <th className="font-serif text-accent font-semibold">Email</th>
                <th className="font-serif text-accent font-semibold">
                  Remove User
                </th>
                <th className="font-serif text-accent font-semibold">
                  Make Admin
                </th>
              </tr>
            </thead>
            <tbody>
              <ShowUser removeUser={removeUser} makeAdmin={makeAdmin} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;

const ShowUser = ({ removeUser, makeAdmin }) => {
  return (
    <>
      <tr>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>
          <button
            onClick={() => removeUser("1")}
            className="btn btn-sm btn-primary text-accent font-sans"
          >
            Remove User
          </button>
        </td>
        <td>
          <button
            onClick={() => makeAdmin("1")}
            className="btn btn-sm btn-secondary text-accent font-sans"
          >
            Make Admin
          </button>
        </td>
      </tr>
    </>
  );
};
