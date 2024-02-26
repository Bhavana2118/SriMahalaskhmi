import React from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
const Users = () => {
  return (
    <div className="flex bg">
      <Header />
      <Sidebar />
      <div className="containerr pt-20">
        <header>Add Users</header>

        <form method="post" style={{ minHeight: "135px" }}>
          <div className="form first">
            <div className="details personal">
              {/* <span className="title">Personal Details</span> */}

              <div className="fields">
                <div className="input-field">
                  <label>User Id</label>
                  <input
                    type="text"
                    name="User_id"
                    required
                    placeholder="User Id"
                  />
                </div>
                <div className="input-field">
                  <label>User Name</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="User Name"
                  />
                </div>
                <div className="input-field">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                  />
                </div>
                <div className="input-field">
                  <label>Password</label>
                  <input
                    type="text"
                    name="password"
                    required
                    placeholder="Password"
                  />
                </div>

                <div className="input-field">
                  <label>Role</label>
                  <select id="stock" name="Role">
                    <option className="subcat" value="">
                      Select Role
                    </option>
                    <option>Super Admin</option>
                    <option>Admin</option>
                    <option>Production Manager</option>
                    <option>Supervisior</option>
                    <option>Quality Check</option>
                    <option>Accounts</option>
                  </select>
                </div>
                <div className="input-field">
                  <input
                    type="text"
                    name="salary"
                    placeholder="Salary"
                    hidden
                  />
                </div>
              </div>
            </div>

            <div className="buttons">
              <button className="submit">
                <span className="submit">submit</span>
                <i className="uil uil-navigator"></i>
              </button>
            </div>
          </div>
        </form>
        <div id="wrapper" className="scroll-bar">
          <div className="headerr">
            <header>Users</header>

            <div className="fields">
              <div className="input-field">
                <input
                  type="text"
                  name="Search"
                  required
                  placeholder="Search"
                  style={{
                    position: "relative",
                    left: "356px",
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <table cellSpacing="0" cellPadding="0">
              <thead style={{ border: "1px solid" }}>
                <tr>
                  <th>
                    <span className="heading">User Id</span>
                  </th>
                  <th>
                    <span className="heading">UserName</span>
                  </th>
                  <th>
                    <span className="heading">Email</span>
                  </th>
                  <th>
                    <span className="heading">Password</span>
                  </th>
                  <th>
                    <span className="heading">Role</span>
                  </th>
                  
                  <th>
                    <span className="heading">Action</span>
                  </th>
                  <th>
                    <span className="heading">Disable </span>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="body">1</td>
                  <td className="body">Bhavana</td>
                  <td className="body">bhavana@gmail.com</td>
                  <td className="body">asdfgh</td>
                  <td className="body">Production Manager</td>
                 
                  <td className="body">
                    <>
                      <button className="pl-2">
                        <i
                          className="fa-solid fa-pen-to-square fa-lg"
                          style={{ color: "#ff0000" }}
                        ></i>
                      </button>
                    </>
                  </td>
                  <td className="body">
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td className="body">2</td>
                  <td className="body">Vishnu</td>
                  <td className="body">Vishnu@gmail.com</td>
                  <td className="body">e563rthj</td>
                  <td className="body">Supervisior</td>
                 
                  <td className="body">
                    <>
                      <button className="pl-2">
                        <i
                          className="fa-solid fa-pen-to-square fa-lg"
                          style={{ color: "#ff0000" }}
                        ></i>
                      </button>
                    </>
                  </td>
                  <td className="body">
                    <input type="checkbox" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
