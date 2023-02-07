import React from "react";
export const Table = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <h1>Table</h1>
      <table border={"1px"} className="Table">
        <tr>
          <th>Employee Name</th>
          <th>Employee Joining Date</th>
          <th>Employee Salary</th>
          <th>Employee Experience</th>
          <th>Employee Age</th>
        </tr>
        <tr>
          <th>Khuzaim</th>
          <th>2021</th>
          <th>70,000</th>
          <th>2 Years</th>
          <th>23</th>
        </tr>
        <tr>
          <th>Ibrahim</th>
          <th>2021</th>
          <th>80,000</th>
          <th>2 Years</th>
          <th>27</th>
        </tr>
        <tr>
          <th>Yusuf</th>
          <th>2021</th>
          <th>90,000</th>
          <th>2 Years</th>
          <th>31</th>
        </tr>
        <tr>
          <th>Sufiyan</th>
          <th>2021</th>
          <th>1,00,000</th>
          <th>2 Years</th>
          <th>26</th>
        </tr>
      </table>
    </div>
  );
};
