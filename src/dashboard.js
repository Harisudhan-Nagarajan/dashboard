import React from "react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CategoryIcon from "@mui/icons-material/Category";
import GroupsIcon from "@mui/icons-material/Groups";
import PendingActionsIcon from "@mui/icons-material/PendingActions";

export function Dashboard() {
  const data = [
    {
      name: "Jan",
      Codeketa: 100,
    },
    {
      name: "Feb",
      Codeketa: 5000,
    },
    {
      name: "Mar",
      Codeketa: 4000,
    },
    {
      name: "Apr",
      Codeketa: 10000,
    },
    {
      name: "May",
      Codeketa: 7000,
    },
    {
      name: "Jun",
      Codeketa: 20000,
    },
    {
      name: "Jul",
      Codeketa: 22000,
    },
    {
      name: "Aug",
      Codeketa: 18000,
    },
    {
      name: "Oct",
      Codeketa: 24000,
    },
    {
      name: "Sep",
      Codeketa: 32000,
    },
    {
      name: "Nov",
      Codeketa: 29000,
    },
    {
      name: "Dec",
      Codeketa: 40000,
    },
  ];
  const datas = [
    {
      name: "Jan",
      user: 1,
    },
    {
      name: "Feb",
      user: 5,
    },
    {
      name: "Mar",
      user: 9,
    },
    {
      name: "Apr",
      user: 8,
    },
    {
      name: "May",
      user: 4,
    },
    {
      name: "Jun",
      user: 14,
    },
    {
      name: "Jul",
      user: 20,
    },
    {
      name: "Aug",
      user: 18,
    },
    {
      name: "Oct",
      user: 17,
    },
    {
      name: "Sep",
      user: 26,
    },
    {
      name: "Nov",
      user: 31,
    },
    {
      name: "Dec",
      user: 36,
    },
  ];
  return (
    <div id="main-content">
      <h2>Dashboard</h2>
      <div id="column-one">
        <div id="column-one-elements">
          <div>
            <span>EARNINGS (ANNUAL)</span>
            <br />
            <b>$270000</b>
          </div>
          <div id="icon-element">
            <AttachMoneyIcon fontSize="large" />
          </div>
        </div>
        <div id="column-one-elements">
          <div>
            <span>Products</span>
            <br />
            <b>3</b>
          </div>
          <div id="icon-element">
            <CategoryIcon fontSize="large" />
          </div>
        </div>
        <div id="column-one-elements">
          <div>
            <span>Mentors</span>
            <br />
            <b>15</b>
          </div>
          <div id="icon-element">
            <GroupsIcon fontSize="large" />
          </div>
        </div>
        <div id="column-one-elements">
          <div>
            <span>Pending Queries</span>
            <br />
            <b>20</b>
          </div>
          <div id="icon-element">
            <PendingActionsIcon fontSize="large" />
          </div>
        </div>
      </div>
      <div id="colmn-two">
        <div id="chart-one">
          <strong>Earnings Overview</strong>
          <div id="charts">
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="Codeketa"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </div>
        </div>
        <div id="chart-two">
          <strong>Users</strong>
          <div id="charts">
            <AreaChart
              width={500}
              height={400}
              data={datas}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="user"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </div>
        </div>
      </div>
    </div>
  );
}
