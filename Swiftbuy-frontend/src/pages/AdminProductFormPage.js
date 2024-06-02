import AdminProductDetail from "../features/admin/components/AdminProductDetail";
import AdminProductForm from "../features/admin/components/AdminProductForm";
import NavBar from "../features/navbar/Navbar";

function AdminProductFormPage() {
  return (
    <div>
      <NavBar>
        <AdminProductForm />
      </NavBar>
    </div>
  );
}

export default AdminProductFormPage;
