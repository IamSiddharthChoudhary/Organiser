import "./registerDonor.css";
import React, { useEffect, useState } from "react";

let account = 0;
export function RegisterDonor() {
  async function connection() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
      } catch (err) {
        console.log(err);
      }
      account = await window.ethereum.request({ method: "eth_accounts" });
    } else {
      console.log("Please a install wallet");
    }
  }

  return (
    <div className="registerD">
      <div className="text"> One step short of saving a life</div>
      <div className="cover">
        <button className="Submit" id="connectionButton" onClick={connection}>
          Connect
        </button>
        <div className="form">
          <h1 className="Heading">Register Donor</h1>
          <h3 className="Name">Name</h3>
          <input type="text" placeholder="Name" />
          <h3 className="Name">Age</h3>
          <input type="number" placeholder="Age" />
          <h3 className="Name">Blood Group</h3>
          <input type="text" placeholder="B+/AB+..." />
          <h3 className="Name">Location</h3>
          <input type="text" placeholder="City" />
          <h3 className="Name">Health Status</h3>
          <input type="text" id="two" placeholder="Excellent/Good/Bad" />
          <br />
        </div>

        <button
          onclick
          href="https://www.google.com/maps/search/nearest+hospitals/"
          className="Submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
