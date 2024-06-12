import React from "react";

function StatisticsPage() {
  return (
    <div>
      <table className="table w-50">
        <tbody>
          <tr>
            <th className="border-end" scope="row">Games</th>
            <td>100</td>
          </tr>
          <tr>
            <th className="border-end" scope="row">Wins</th>
            <td>50</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StatisticsPage;