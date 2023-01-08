import React from "react";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import HeaderStats from "components/Headers/HeaderStats.js";


export default function Admin() {
  return (
   <>
      <div className="relative bg-blueGray-100">
        <AdminNavbar/>
        {/* Header */}
        <HeaderStats />
      </div>
   </>
  );
}
