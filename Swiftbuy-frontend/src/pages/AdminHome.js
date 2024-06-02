import AdminProductList from "../features/admin/components/AdminProductList";
import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/ProductList";

function AdminHome() {
    return ( 
        <div>
            <NavBar>
                <AdminProductList/>
            </NavBar>
        </div>
     );
}

export default AdminHome;