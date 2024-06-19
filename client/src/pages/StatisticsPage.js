import React, { useCallback, useContext, useEffect, useState } from "react";
import useHttp from "../hooks/http.hook";
import AuthContext from "../context/AuthContext";

function StatisticsPage() {
  const [statistics, setStatistics] = useState({});
  const { request } = useHttp();
  const { token } = useContext(AuthContext);

  const getStatisticsData = useCallback(async () => {
    const response = await request('/api/statistic', 'GET', null, {Authorization: `Bearer ${token}`});
    const data = await response.json();
    setStatistics(data);
  }, [token, request]);

  useEffect(() => {
    getStatisticsData()
  }, [getStatisticsData]);

  return (
    <div>
      <table className="table w-50">
        <tbody>
          <tr>
            <th className="border-end" scope="row">Games</th>
            <td>{statistics.games}</td>
          </tr>
          <tr>
            <th className="border-end" scope="row">Wins</th>
            <td>{statistics.wins}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StatisticsPage;