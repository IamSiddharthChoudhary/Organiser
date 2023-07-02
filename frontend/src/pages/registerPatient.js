import "./registerDonor.css";
import React, { useEffect, useState } from "react";

export function RegisterPatient() {
  async function connection() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
      } catch (err) {
        console.log(err);
      }
      const account = await window.ethereum.request({ method: "eth_accounts" });
    } else {
      console.log("Please a install wallet");
    }
  }

  return (
    <div className="registerD">
      <div className="text"> One step short of finding donor</div>
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
          <br />
        </div>

        <button className="Submit"> Submit </button>
      </div>
    </div>
  );
}
