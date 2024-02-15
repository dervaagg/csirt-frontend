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
    <Menu style={{ background: "none", color: "white" }}>
      <Menu.Item key="edit-layanan" icon={<HomeOutlined />}>
        <Link to="/admin/e-layanan" />
        Home
      </Menu.Item>
      <Menu.Item key="edit-news" icon={<UserOutlined />}>
        Profil
      </Menu.Item>
      <Menu.Item key="edit-panduan" icon={<ContactsOutlined />}>
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
        Berita
      </Menu.Item>
      <Menu.Item key="rfc" icon={<FilePdfOutlined />}>
        RFC 2350
      </Menu.Item>
      <Menu.Item key="panduan" icon={<FileSearchOutlined />}>
        Panduan
      </Menu.Item>
    </Menu>
  );
};

export default ListMenu;
