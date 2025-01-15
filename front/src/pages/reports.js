import React, { useCallback, useContext, useEffect, useState } from "react";
import Navbar from "../components/navbar";
import MiniNavbar from "../components/miniNavbar";
import Loader from "../components/loader";
import { UserContext } from "../App";
import { toast } from "react-hot-toast";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  Rectangle,
  Label,
} from "recharts";
import { BarChart, Bar } from "recharts";
import "../assets/css/reports.css";

function Reports() {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [donationsData, setDonationsData] = useState([]);
  const [currentDayMonth, setCurrentDayMonth] = useState(new Date());
  const [total, setTotal] = useState(0);
  const [currentYear, setCurrentYear] = useState(new Date());
  const [dayData, setDayData] = useState([]);
  const [monthData, setMonthData] = useState([]);

  const fetchDonations = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get("fetch-transactions-data", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setDonationsData(response.data.transactionsData);
      totalDonations(response.data.transactionsData);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("There seems to be an issue");
      console.log("Error fetching data:", error);
    }
  });

  const totalDonations = (amounts) => {
    let totalAmount = 0;
    amounts.forEach((item) => {
      totalAmount += parseFloat(item.amount) || 0;
    });
    setTotal(totalAmount);
    return totalAmount;
  };

  useEffect(() => {
    if (user) {
      fetchDonations();
    }
  }, [user]);

  const prevNextMonth = useCallback(
    (action) => {
      if (!donationsData || donationsData.length === 0) {
        console.log("donationsData is empty, cannot process day data.");
        return;
      }

      let newDayMonth = new Date(currentDayMonth);

      if (action === "prevDayMonth") {
        newDayMonth.setMonth(newDayMonth.getMonth() - 1);
      } else if (action === "nextDayMonth") {
        newDayMonth.setMonth(newDayMonth.getMonth() + 1);
      } else if (action === "currentDayMonth") {
        newDayMonth = new Date();
      }

      newDayMonth.setDate(1);
      newDayMonth.setHours(0, 0, 0, 0);
      if (newDayMonth.getTime() !== currentDayMonth.getTime()) {
        setCurrentDayMonth(newDayMonth);
      }

      const totalDayAmount = {};
      const updatedDayData = [];
      const daysInMonth = new Date(
        newDayMonth.getFullYear(),
        newDayMonth.getMonth() + 1,
        0
      ).getDate();

      for (let i = 1; i <= daysInMonth; i++) {
        const dayStartDate = new Date(
          newDayMonth.getFullYear(),
          newDayMonth.getMonth(),
          i
        );
        const dayEndDate = new Date(dayStartDate);
        dayEndDate.setHours(23, 59, 59, 999);

        const dailyDonations = donationsData.filter((donation) => {
          const donationDate = new Date(donation.created_date);
          return donationDate >= dayStartDate && donationDate <= dayEndDate;
        });

        const dailyTotalAmount = dailyDonations.reduce(
          (acc, donation) => acc + (parseFloat(donation.amount) || 0),
          0
        );

        totalDayAmount[i] = dailyTotalAmount;

        updatedDayData.push({
          name: `${i}`,
          Donations: dailyTotalAmount,
        });
      }

      setDayData(updatedDayData);
    },
    [donationsData]
  );

  const prevNextYear = useCallback(
    (action) => {
      let newYear = new Date(currentYear);
      if (action === "prevYear") {
        newYear.setFullYear(newYear.getFullYear() - 1);
        newYear.setMonth(0, 1);
      } else if (action === "nextYear") {
        newYear.setFullYear(newYear.getFullYear() + 1);
        newYear.setMonth(0, 1);
      } else if (action === "currentYear") {
        newYear = new Date();
        newYear.setMonth(0, 1);
      }

      if (newYear.getTime() !== currentYear.getTime()) {
        setCurrentYear(newYear);
      }
      const year = newYear.getFullYear();

      const monthsData = {};
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const totalMonthAmount = {};
      for (let i = 0; i < 12; i++) {
        const monthStartDate = new Date(year, i, 1);
        const monthEndDate = new Date(year, i + 1, 0);

        const monthDonations = donationsData.filter((donation) => {
          const donationDate = new Date(donation.created_date);
          return donationDate >= monthStartDate && donationDate <= monthEndDate;
        });

        const monthNumber = i + 1;
        const monthTotalAmount = monthDonations.reduce(
          (acc, donation) => acc + (parseFloat(donation.amount) || 0),
          0
        );

        totalMonthAmount[`month ${monthNumber}`] = monthTotalAmount;

        monthsData[`month ${monthNumber}`] = {
          month: `month ${monthNumber}`,
          startDate: monthStartDate.toISOString().slice(0, 10),
          endDate: monthEndDate.toISOString().slice(0, 10),
          totalAmount: monthTotalAmount,
        };
      }

      const monthlyData = Array.from({ length: 12 }, (_, i) => {
        const monthNumber = i + 1;
        return {
          name: monthNames[i],
          Donations: totalMonthAmount[`month ${monthNumber}`] || 0,
        };
      });
      setMonthData(monthlyData);
    },
    [donationsData]
  );

  useEffect(() => {
    if (donationsData.length > 0) {
      prevNextMonth("currentDayMonth");
      prevNextYear("currentYear");
    }
  }, [
    donationsData,
    currentDayMonth,
    currentYear,
    prevNextMonth,
    prevNextYear,
  ]);

  return (
    <>
      {loading && <Loader />}
      <Navbar />
      <MiniNavbar />
      <div className="reports-container">
        <h1 className="reports-header" style={{ color: "black" }}>
          Reports
        </h1>
        <div className="reports-button">
          <button onClick={() => prevNextMonth("prevDayMonth")}>
            Last Month
          </button>
          <button onClick={() => prevNextMonth("currentDayMonth")}>
            This Month
          </button>
          <button onClick={() => prevNextMonth("nextDayMonth")}>
            Next Month
          </button>
        </div>
        <h2 style={{ textAlign: "center" }}>
          Daily{" "}
          {currentDayMonth.toLocaleDateString("en-UK", {
            month: "long",
            year: "numeric",
          })}{" "}
          Donations
        </h2>
        <div>
          <BarChart
            width={1100}
            height={500}
            data={dayData}
            margin={{ left: 0, right: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" /> <XAxis dataKey="name" />{" "}
            <YAxis tickFormatter={(value) => `${value.toLocaleString()}`}>
              <Label
                value="($)"
                offset={-10}
                position="insideLeft"
                style={{ textAnchor: "middle", fontSize: "16px" }}
              />
            </YAxis>
            <Legend />
            <Tooltip
              formatter={(value) => `$${Number(value).toLocaleString()}`}
            />
            <Bar dataKey="Donations" fill="red">
              {dayData.map((entry, index) => (
                <Rectangle
                  key={`bar-${index}`}
                  width={5}
                  height={entry.Donations}
                  fill="red"
                />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="reports-button">
          <button onClick={() => prevNextYear("prevYear")}>
            Previous Year
          </button>
          <button onClick={() => prevNextYear("currentYear")}>This Year</button>
          <button onClick={() => prevNextYear("nextYear")}>Next Year</button>
        </div>{" "}
        <h2 style={{ textAlign: "center" }}>
          Annual Donations of{" "}
          {currentYear.toLocaleDateString("en-UK", {
            year: "numeric",
          })}
        </h2>
        <div>
          <BarChart
            width={1250}
            height={550}
            data={monthData}
            margin={{ left: 0, right: 0 }}
          >
            {" "}
            <CartesianGrid strokeDasharray="3 3" /> <XAxis dataKey="name" />{" "}
            <YAxis tickFormatter={(value) => `${value.toLocaleString()}`}>
              <Label
                value="($)"
                offset={-10}
                position="insideLeft"
                style={{ textAnchor: "middle", fontSize: "16px" }}
              />
            </YAxis>
            <Legend />
            <Tooltip
              formatter={(value) => `$${Number(value).toLocaleString()}`}
            />
            <Bar dataKey="Donations" fill="red">
              {monthData.map((entry, index) => (
                <Rectangle
                  key={`bar-${index}`}
                  width={5}
                  height={entry.Donations}
                  fill="red"
                />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
    </>
  );
}

export default Reports;
