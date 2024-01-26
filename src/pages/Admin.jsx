import { Routes, Route } from "react-router-dom";
import EditLayanan from "../adminpage/EditLayanan";
import Sidebar from "../adminpage/Sidebar";

export default function Admin() {
  return (
    <>
    <Sidebar />
    <Routes>
      <Route path='/admin/edit-layanan' element={<EditLayanan />} />
    </Routes>
    </>
  )
}
