import DataGrid from "react-data-grid";
import "react-data-grid/lib/styles.css";
import { useState, useEffect } from "react";
import Select from "react-select";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import ProgressBar from "@ramonak/react-progress-bar";
export const Todo = () => {
  const options = [
    { value: "todo", label: "Todo" },
    { value: "progress", label: "IN-PROGRESS" },
    { value: "done", label: "Done" },
  ];
  const notify = () =>
    toast.error("Todo is already exist!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const notify1 = () =>
    toast.error("Todo is can not null!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "green",
    });
  const date1 = new Date();
  const [rows1, setRows] = useState([
    {
      id: 0,
      title: "Mua sách",
      time: date1.toString(),
      status: "DONE",
      progress: 100,
    },
    {
      id: 1,
      title: "Học Ngoại Ngữ",
      time: date1.toString(),
      status: "Todo",
      progress: 0,
    },
    {
      id: 2,
      title: "Xem Phim",
      time: date1.toString(),
      status: "DONE",
      progress: 100,
    },
    {
      id: 3,
      title: "Nấu Ăn",
      time: date1.toString(),
      status: "Todo",
      progress: 0,
    },
    {
      id: 4,
      title: "Học lập trình Web",
      time: date1.toString(),
      status: "IN-PROGRESS",
      progress: 25,
    },
    {
      id: 5,
      title: "Đi chợ",
      time: date1.toString(),
      status: "IN-PROGRESS",
      progress: 25,
    },
  ]);
  const [data, setData] = useState([
    {
      id: 0,
      title: "Mua sách",
      time: date1.toString(),
      status: "DONE",
      progress: 100,
    },
    {
      id: 1,
      title: "Học Ngoại Ngữ",
      time: date1.toString(),
      status: "Todo",
      progress: 0,
    },
    {
      id: 2,
      title: "Xem Phim",
      time: date1.toString(),
      status: "DONE",
      progress: 100,
    },
    {
      id: 3,
      title: "Nấu Ăn",
      time: date1.toString(),
      status: "Todo",
      progress: 0,
    },
    {
      id: 4,
      title: "Học lập trình Web",
      time: date1.toString(),
      status: "IN-PROGRESS",
      progress: 25,
    },
    {
      id: 5,
      title: "Đi chợ",
      time: date1.toString(),
      status: "IN-PROGRESS",
      progress: 25,
    },
  ]);
  const [title, setTitle] = useState();
  const [status, setStatus] = useState();
  const [id, setID] = useState();
  const [todos, setTodo] = useState([]);
  const [name, setName] = useState();
  const [progress, setProgress] = useState();
  const onRowSelect = (event) => {
    console.log("on row click", event);
    setID(event["id"]);
    setTitle(event["title"]);
    setStatus(event["status"]);
    setProgress(event["progress"]);
  };

  const columns = [
    { key: "time", name: "Datetime", width: "400px" },
    { key: "id", name: "ID", width: 10 },
    { key: "title", name: "Title", width: "700px" },
    { key: "status", name: "Status", width: "100px" },
  ];
  const add = () => {
    if (title != undefined) {
      const a = data.filter((todo) => todo["title"] === title);
      if (a.length === 0) {
        if (status == "Todo") {
          setData((current) => [
            ...current,
            {
              id: data.length,
              title: title,
              time: date1.toString(),
              status: status,
              progress: 0,
            },
          ]);
          setRows((current) => [
            ...current,
            {
              id: data.length,
              title: title,
              time: date1.toString(),
              status: status,
              progress: 0,
            },
          ]);
        } else if (status == "IN-PROGRESS") {
          setData((current) => [
            ...current,
            {
              id: data.length,
              title: title,
              time: date1.toString(),
              status: status,
              progress: 25,
            },
          ]);
          setRows((current) => [
            ...current,
            {
              id: data.length,
              title: title,
              time: date1.toString(),
              status: status,
              progress: 25,
            },
          ]);
        } else if (status == "DONE") {
          setData((current) => [
            ...current,
            {
              id: data.length,
              title: title,
              time: date1.toString(),
              status: status,
              progress: 100,
            },
          ]);
          setRows((current) => [
            ...current,
            {
              id: data.length,
              title: title,
              time: date1.toString(),
              status: status,
              progress: 100,
            },
          ]);
        }
        setID();
        setProgress();
        setTitle();
        setStatus("Todo");
        console.log("a");
      } else {
        notify();
      }
      console.log(title);
    } else {
      notify1();
    }
    console.log(status);
  };
  const edit = () => {
    if (status == "Todo") {
      const newState = rows1.map((obj) => {
        if (obj.id === id) {
          return {
            ...obj,
            time: date1.toString(),
            title: title,
            status: status,
            progress: 0,
          };
        }
        return obj;
      });
      setRows(newState);
      setData(newState);
      setID();
      setProgress();
      setTitle();
      setStatus("Todo");
    } else if (status == "IN-PROGRESS") {
      if (progress == 100) {
        const newState = rows1.map((obj) => {
          if (obj.id === id) {
            return {
              ...obj,
              time: date1.toString(),
              title: title,
              status: status,
              progress: 25,
            };
          }
          return obj;
        });
        setRows(newState);
        setData(newState);
        setID();
        setProgress();
        setTitle();
        setStatus("Todo");
      } else if (progress > 0) {
        const newState = rows1.map((obj) => {
          if (obj.id === id) {
            return {
              ...obj,
              time: date1.toString(),
              title: title,
              status: status,
              progress: progress,
            };
          }
          return obj;
        });
        setRows(newState);
        setData(newState);
        setID();
        setProgress();
        setTitle();
        setStatus("Todo");
      } else {
        const newState = rows1.map((obj) => {
          if (obj.id === id) {
            return {
              ...obj,
              time: date1.toString(),
              title: title,
              status: status,
              progress: 25,
            };
          }
          return obj;
        });
        setRows(newState);
        setData(newState);
        setID();
        setProgress();
        setTitle();
        setStatus("Todo");
      }
    } else if (status == "DONE") {
      const newState = rows1.map((obj) => {
        if (obj.id === id) {
          return {
            ...obj,
            time: date1.toString(),
            title: title,
            status: status,
            progress: 100,
          };
        }
        return obj;
      });
      setRows(newState);
      setData(newState);
      setID();
      setProgress();
      setTitle();
      setStatus("Todo");
    }
  };
  const deleteTodo = () => {
    const a = rows1.filter((todo) => {
      return todo.id != id;
    });
    setRows(a);
    setData(a);
    setID();
    setProgress();
    setTitle();
    setStatus("Todo");
  };
  const statusChange = (e) => {
    setStatus(e.target.value);
    console.log(status);
  };
  const statusChangeProgress = (e) => {
    setProgress(e.target.value);
  };
  return (
    <div className="data-table">
      <ToastContainer />
      <div>
        <input
          type="text"
          onChange={(e) => {
            if (e.target.value === " " || e.target.value === "") {
              setData(rows1);
              console.log(" no filter");
              console.log(rows1);
            } else {
              setData(
                rows1.filter((todo) =>
                  todo["title"]
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
                )
              );
              console.log("filter");
              console.log(rows1);
            }
          }}
          placeholder="Search by title"
        />
        {name}
      </div>
      <DataGrid
        style={{ width: "100%", height: "100%;" }}
        columns={columns}
        rows={data}
        onRowClick={onRowSelect}
        width={120}
        pagination={true}
        paginationAutoPageSize={true}
        paginationPageSize={10}
      />
      <div className="form-edit">
        <div className="data">
          <label>ID : {id || ""}</label>
          <label>Title :</label>
          <input
            required
            type="text"
            value={title || ""}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />{" "}
          <label>Status :</label>
          <select value={status} onChange={statusChange}>
            <option value="Todo">Todo</option>
            <option value="IN-PROGRESS">IN-PROGRESS</option>
            <option value="DONE">DONE</option>
          </select>
        </div>
        <div className="btn">
          <button onClick={add}>Add</button>
          <button onClick={edit}>Edit</button>
          <button onClick={deleteTodo}>Delete</button>
        </div>
      </div>

      {progress > 0 ? (
        <div className="progress">
          <ProgressBar completed={progress || 0} />
          <select value={progress} onChange={statusChangeProgress}>
            <option value={25}>25%</option>
            <option value={50}>50%</option>
            <option value={75}>75%</option>
          </select>
        </div>
      ) : (
        " "
      )}
    </div>
  );
};
