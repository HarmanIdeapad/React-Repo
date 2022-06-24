import React, { useState, useEffect } from "react";

export default function Card() {
  const [membersData, setMembersData] = useState([]);
  /* const fetchData = () => {
        fetch("https://randomuser.me/api/?results=20").then((response) => {
            if (!response.ok) {
                throw new Error(
                  `This is an HTTP error: The status is ${response.status}`
                );
              }
              return response.json()
        })
        .then((data) => {
            setUser(data.results)
            console.log(data.results)
        }).catch((err) => {
            console.log(err.message);
           })
    } */
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
        {membersData.map((member) => (
          <div className="col-md-4 animated fadeIn" key={member.MP_CODE}>
            <div className="card">
              <div className="card-body">
                <div className="avatar">
                  <img
                    src={member.PHOTO.replace(
                      "http://164.100.47.5/newmembers/",
                      "https://rajyasabha.nic.in/rsnew/member_site/"
                    )}
                    className="card-img-top"
                    alt=""
                  />
                </div>
                <h5 className="card-title">
                  {member.MP_NAME + " (" + member.hMP_NAME + ")"}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  // return (
  //     <div className="clearfix">
  //     <div className="row">
  //       {user.map((data, index) => (
  //         <div className="col-md-4 animated fadeIn" key={index}>
  //           <div className="card">
  //             <div className="card-body">
  //               <div className="avatar">
  //                 <img
  //                   src={data.picture.large}
  //                   className="card-img-top"
  //                   alt=""
  //                 />
  //               </div>
  //               <h5 className="card-title">
  //                 {data.name.first +
  //                   " " +
  //                   data.name.last}
  //               </h5>
  //               <p className="card-text">
  //                 {data.location.city +
  //                   ", " +
  //                   data.location.state}
  //                 <br />
  //                 <span className="phone">{data.phone}</span>
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //     </div>

  //   </div>
  // )
}
