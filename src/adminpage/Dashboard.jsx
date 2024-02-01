import BackgroundVideo from "./BackgroundVideo";
import EditLayananU from "./EditLayananU";
import EditLayananT from "./EditLayananT";
import EditNews from "./EditNews";
import EditPanduan from "./EditPanduan";
import EditDeskripsi from "./EditDeskripsi";
import EditVisi from "./EditVisi";
import EditMisi from "./EditMisi";
import EditRFC from "./EditRFC";
import logoWK from "../assets/Logo WSKT.svg";

import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  FileSearchOutlined,
  UserOutlined,
  FilePdfOutlined,
  ContactsOutlined,
  ReadOutlined,
  FileAddOutlined,
  FileExclamationOutlined,
  FileOutlined,
  LoginOutlined,
  SolutionOutlined,
  ProfileOutlined,
  ProjectOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import EditKontak from "./EditKontak";

const { Header, Sider, Content } = Layout;
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const [currentPage, setCurrentPage] = useState("");

  const handleMenuClick = (event) => {
    setCurrentPage(event.key);
  };

  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          background: "#d4dadf",
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full">
          <img
            src={logoWK}
            className="bi bi-person-fill text-white dark:text-indigo-300"
            alt=""
          />
        </div>
        <Menu
          onClick={handleMenuClick}
          style={{ background: "none", color: "black" }}
        >
          <Menu.Item key="" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.SubMenu key="subprofil" icon={<UserOutlined />} title="Profil">
            <Menu.Item key="edit-deskripsi" icon={<SolutionOutlined />}>
              Deskripsi
            </Menu.Item>
            <Menu.Item key="edit-visi" icon={<ProjectOutlined />}>
              Visi
            </Menu.Item>
            <Menu.Item key="edit-misi" icon={<ProfileOutlined />}>
              Misi
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="edit-kontak" icon={<ContactsOutlined />}>
            Kontak
          </Menu.Item>
          <Menu.SubMenu
            key="sublayanan"
            icon={<FileOutlined />}
            title="Layanan"
          >
            <Menu.Item key="edit-utama" icon={<FileExclamationOutlined />}>
              Utama
            </Menu.Item>
            <Menu.Item key="edit-tambahan" icon={<FileAddOutlined />}>
              Tambahan
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="edit-news" icon={<ReadOutlined />}>
            Berita
          </Menu.Item>
          <Menu.Item key="edit-rfc" icon={<FilePdfOutlined />}>
            RFC 2350
          </Menu.Item>
          <Menu.Item key="edit-panduan" icon={<FileSearchOutlined />}>
            Panduan
          </Menu.Item>
        </Menu>
        <div
          className="mb-8 fixed flex justify-center bottom-0 uppercase"
          style={{
            marginLeft: isButtonClicked ? "14px" : "65px",
            transition: "margin-left 0.3s ease-in-out",
          }}
        >
          <div className="flex items-center gap-4 tracking-tighter left-10 flex-col">
            <img
              className="w-10 h-10 rounded-full ml-1"
              src="./public/avatar.svg"
              alt="avatar"
            />
            <div className="font-medium dark:text-black">
              <h5>Admin</h5>
            </div>
          </div>
        </div>
      </Sider>
      <Layout
        style={{
          marginLeft: isButtonClicked ? "80px" : "200px",
          transition: "margin-left 0.3s ease-in-out",
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => {
              setCollapsed(!collapsed);
              setIsButtonClicked(!isButtonClicked);
            }}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Button
            type="primary"
            danger
            icon={<LoginOutlined />}
            style={{ marginRight: "20px" }}
          >
            Logout
          </Button>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
          }}
        >
          {currentPage === "" && <BackgroundVideo />}
          {currentPage === "edit-deskripsi" && <EditDeskripsi />}
          {currentPage === "edit-visi" && <EditVisi />}
          {currentPage === "edit-misi" && <EditMisi />}
          {currentPage === "edit-kontak" && <EditKontak />}
          {currentPage === "edit-utama" && <EditLayananU />}
          {currentPage === "edit-tambahan" && <EditLayananT />}
          {currentPage === "edit-news" && <EditNews />}
          {currentPage === "edit-rfc" && <EditRFC />}
          {currentPage === "edit-panduan" && <EditPanduan />}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
