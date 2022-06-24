import React, { useState, useEffect } from "react";

function TableData() {
  const [membersData, setMembersData] = useState([]);
  const fetchData = () => {
    fetch("http://164.100.213.102/api_new/membergetdata/getmemberall")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        // setUser(data.results)
        // console.log(data.results)
        setMembersData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="clearfix">
      <div className="row">
        <table
        //   id="member_table"
          className="table table-striped table-bordered table-sm"
        >
          <thead>
            <tr>
              <th>S.No</th>
              <th class="photocolumn">
                Photo
              </th>
              <th>Name</th>
              <th>Party</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {membersData.map((member) => (
              <tr>
                <td>1</td>
                <td class="photocolumn">
                  <img
                    class="membersmallpic"
                    src={member.PHOTO.replace(
                      "http://164.100.47.5/newmembers/",
                      "https://rajyasabha.nic.in/rsnew/member_site/"
                    )}
                  />
                </td>
                <td>
                  <a
                  >
                    {member.MP_NAME}
                  </a>
                </td>
                <td>{member.PARTY_NAME}</td>
                <td>{member.STATE_NAME}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableData;
