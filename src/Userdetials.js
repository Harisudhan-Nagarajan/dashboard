import React, { PureComponent } from "react";
import { curveCardinal } from "d3-shape";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export function Userdetials() {
  const data = [
    {
      name: "Jan-Mar",
      Codeketa: 100,
      webketa: 214,
    },
    {
      name: "Mar-May",
      Codeketa: 120,
      webketa: 114,
    },
    {
      name: "May-July",
      Codeketa: 230,
      webketa: 200,
    },
    {
      name: "July-Sep",
      Codeketa: 50,
      webketa: 90,
    },
    {
      name: "Sep-Dec",
      Codeketa: 190,
      webketa: 154,
    },
  ];
  const datas = [
    {
      name: "Task 1",
      rating: 9,
    },
    {
      name: "Task 2",
      rating: 6,
    },
    {
      name: "Task 3",
      rating: 8,
    },
    {
      name: "Task 4",
      rating: 9,
    },
    {
      name: "Task 5",
      rating: 8,
    },
    {
      name: "Task 6",
      rating: 7,
    },
    {
      name: "Task 7",
      rating: 9,
    },
  ];
  const cardinal = curveCardinal.tension(0.2);
  return (
    <div id="main-content">
      <div id="column-one">
        <div id="column-one-elements">
          <div>
            <span>Cource Period</span>
            <br />
            <b>3 Months</b>
          </div>

          <div id="icon-element">
            <AccessTimeIcon fontSize="large" />
          </div>
        </div>
        <div id="column-one-elements">
          <div>
            <span>Total Task</span>s
            <br />
            <b>30</b>
          </div>
          <div id="icon-element">
            <FormatListBulletedIcon fontSize="large" />
          </div>
        </div>
        <div id="column-one-elements">
          <div>
            <span>Task Pending</span>
            <br />
            <b>15</b>
          </div>
          <div id="icon-element">
            <PendingActionsIcon fontSize="large" />
          </div>
        </div>
        <div id="column-one-elements">
          <div>
            <span>OverAll Rating</span>
            <br />
            <b>A+</b>
          </div>
          <div id="icon-element">
            <StarIcon fontSize="large" />
          </div>
        </div>
      </div>
      <div id="colmn-two">
        <div id="chart-one">
          <strong>Codeketa & webketa</strong>
          <div>
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
              <Area
                type="monotone"
                dataKey="webketa"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
            </AreaChart>
          </div>
        </div>
        <div id="chart-two">
          <strong>Task Rating</strong>
          <div>
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
              dataKey="rating"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.3}
            />
          </AreaChart>
          </div>
        </div>
      </div>
    </div>
  );
}
