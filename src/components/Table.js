import React from "react";

const Table = ({ slot, hits }) => (
  <table>
    <tbody>
      <tr>
        <td />
        <td colSpan="5" className="cold">
          Cold
        </td>
        <td colSpan="27" className="neutral">
          Neutral
        </td>
        <td colSpan="5" className="hot">
          Hot
        </td>
      </tr>
      <tr>
        <td>Slot</td>
        {slot}
      </tr>
      <tr>
        <td>Hits</td>
        {hits}
      </tr>
    </tbody>
  </table>
);

export default Table;
