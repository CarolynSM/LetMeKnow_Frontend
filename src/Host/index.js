import React from "react";

const GuestList = () => (
  <table>
    <tr>
      <th>Name</th>
      <th>RSVPd?</th>
      <th>Coming?</th>
      <th>Bring a guest?</th>
      <th>Total No. Attending</th>
    </tr>
  </table>
);

const Dashboard = () => <GuestList />;

export default Dashboard;
