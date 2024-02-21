import BackgroundVideo from "./BackgroundVideo";
import EditLayananU from "./EditLayananU";
import EditLayananT from "./EditLayananT";
import EditNews from "./AddNews";
import EditDeskripsi from "./EditDeskripsi";
import EditVisi from "./EditVisi";
import EditMisi from "./EditMisi";
import EditRFC from "./EditRFC";
import AddNews from "./EditNews";
import EditKontak from "./EditKontak";
import AddPanduan from "./AddPanduan";
import EditGaleri from "./EditGaleri";
import logoWK from "../assets/Logo WSKT.svg";
import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  UserOutlined,
  FilePdfOutlined,
  ContactsOutlined,
  ReadOutlined,
  FileAddOutlined,
  FileExclamationOutlined,
  FileOutlined,
  SolutionOutlined,
  ProfileOutlined,
  ProjectOutlined,
  AppstoreAddOutlined,
  AppstoreOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { useMsal } from "@azure/msal-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { Header, Sider, Content } = Layout;
  const { instance, accounts } = useMsal();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accounts.length) {
      navigate("/admin/login");
    } else {
      const account = accounts[0];
      const tokenRequest = {
        scopes: ["User.Read"],
        account: account,
      };

      instance
        .acquireTokenSilent(tokenRequest)
        .then(() => {})
        .catch((error) => {
          console.error(error);
          navigate("/admin/login");
        });
    }
  }, [accounts, instance, navigate]);

  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [currentPage, setCurrentPage] = useState("");
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
          <Menu.Item key="edit-galeri" icon={<PictureOutlined />}>
            Galeri
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
          <Menu.SubMenu key="subberita" icon={<ReadOutlined />} title="Berita">
            <Menu.Item key="tambah-berita" icon={<AppstoreAddOutlined />}>
              Tambah Berita
            </Menu.Item>
            <Menu.Item key="list-berita" icon={<AppstoreOutlined />}>
              Edit Berita
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="edit-rfc" icon={<FilePdfOutlined />}>
            RFC 2350
          </Menu.Item>
          <Menu.Item key="edit-panduan" icon={<AppstoreAddOutlined />}>
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
              src="../src/assets/avatar.svg"
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
          <button className="Btn">
            <div className="sign">
              <svg viewBox="0 0 512 512">
                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
              </svg>
            </div>
            <div className="textadmin">Keluar</div>
          </button>
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
          {currentPage === "edit-panduan" && <AddPanduan />}
          {currentPage === "tambah-berita" && <EditNews />}
          {currentPage === "list-berita" && <AddNews />}
          {currentPage === "edit-galeri" && <EditGaleri />}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
