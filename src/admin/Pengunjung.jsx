import { useState, useEffect } from "react";
import { Table } from "antd";
import axios from "axios";
import { InfoCircleOutlined } from "@ant-design/icons";

export default function EditKontak() {
  const [trackVisitors, setTrackVisitors] = useState([]);

  useEffect(() => {
    getVisitors();
    const refreshInterval = setInterval(() => {
      getVisitors();
    }, 1000);
    return () => clearInterval(refreshInterval);
  }, []);

  const getVisitors = async () => {
    try {
      const response = await axios.get("http://localhost:4001/tracks");
      const mappedData = response.data.map((visitor, index) => ({
        key: String(index + 1),
        ip: visitor.ip,
        createdAt: visitor.createdAt,
      }));
      setTrackVisitors(mappedData);
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const columns = [
    {
      title: "Nomor",
      dataIndex: "key",
    },
    {
      title: "IP",
      dataIndex: "ip",
    },
    {
      title: "Tanggal Masuk",
      dataIndex: "createdAt",
      sorter: {
        compare: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
        multiple: 3,
      },
    },
  ];

  return (
    <div className="flex flex-col bg-white min-h-full rounded-lg p-4 shadow-sm">
      <h2 className="mt-4 mb-5 text-black font-bold text-3xl">IP PENGUNJUNG</h2>
      <h2 className="mt-4 mb-4 text-base font-semibold">
        <InfoCircleOutlined /> Berikut ini adalah daftar IP pengunjung website
        Waskita CSIRT
      </h2>
      <Table
        columns={columns}
        dataSource={trackVisitors}
        rowKey={(record) => record.key}
        pagination={{ pageSize: 10 }}
        onChange={onChange}
      />
    </div>
  );
}
