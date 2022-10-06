import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import auth from "../../Firebase/firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import useUsers from "../../Hooks/useUsers";
import Loader from "../../Shared/Loader/Loader";

const Users = () => {
  const [user, loading, error] = useAuthState(auth);
  // console.log("name", user?.displayName);

  const [users] = useUsers();
  // console.log("users", users);

  const [admin, adminLoading] = useAdmin(user);

  if (loading) {
    return <Loader />;
  }

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
              {users.map((user, idx) => (
                <ShowUser key={idx} user={user} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;

const ShowUser = ({ user }) => {
  const { name, email, role } = user;

  const makeAdmin = (email) => {
    const proceed = window.confirm("Are you want to Make ADMIN?");
    if (proceed) {
      const url = `http://localhost:5000/user/admin/${email}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 403) {
            Swal.fire({
              title: "Failed to make Admin",
              icon: "error",
            });
          }
          return res.json();
        })
        .then((data) => {
          if (data.acknowledged) {
            Swal.fire({
              title: "Made an Admin",
              icon: "success",
            });
          }
        });
    }
  };

  const removeUser = (id) => {
    const proceed = window.confirm("Are you want to remove this user?");
    if (proceed) {
      const url = `http://localhost:5000/users/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            Swal.fire({
              title: "User Removed!",
              icon: "success",
            });
          }
        });
    }
  };

  return (
    <>
      <tr>
        <td>{name ? name : "Name not found"}</td>
        <td>{email}</td>
        <td>
          {role !== "admin" ? (
            <button
              onClick={() => removeUser(user._id)}
              className="btn btn-sm btn-primary text-accent font-sans"
            >
              Remove User
            </button>
          ) : (
            <button className="btn btn-sm btn-secondary text-accent font-sans">
              ADMIN
            </button>
          )}
        </td>
        <td>
          {role !== "admin" && (
            <button
              onClick={() => makeAdmin(email)}
              className="btn btn-sm btn-secondary text-accent font-sans"
            >
              Make Admin
            </button>
          )}
        </td>
      </tr>
    </>
  );
};
