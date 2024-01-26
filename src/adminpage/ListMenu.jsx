import { Menu } from "antd";
import {
  HomeOutlined,
  FileSearchOutlined,
  UserOutlined,
  FilePdfOutlined,
  ContactsOutlined,
  ReadOutlined,
  FileAddOutlined,
  FileExclamationOutlined,
  FileOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const ListMenu = () => {
  return (
    <Menu
    >
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/" />
        Home
      </Menu.Item>
      <Menu.Item key="profil" icon={<UserOutlined />}>
        Profil
      </Menu.Item>
      <Menu.Item key="kontak" icon={<ContactsOutlined />}>
        Kontak
      </Menu.Item>
      <Menu.SubMenu key="sublayanan" icon={<FileOutlined />} title="Layanan">
        <Menu.Item key="utama" icon={<FileExclamationOutlined />}>
          Utama
        </Menu.Item>
        <Menu.Item key="tambahan" icon={<FileAddOutlined />}>
          Tambahan
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="berita" icon={<ReadOutlined />}>
        <Link to="/news" />
        Berita
      </Menu.Item>
      <Menu.Item key="rfc" icon={<FilePdfOutlined />}>
        <Link to="/rfc2350" />
        RFC 2350
      </Menu.Item>
      <Menu.Item key="panduan" icon={<FileSearchOutlined />}>
        Panduan
      </Menu.Item>
    </Menu>
  );
};


export default ListMenu;