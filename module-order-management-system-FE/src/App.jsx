import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContext } from "./AppContext";
import Signin from "./pages/Signin";
import ImageLayout from "./layouts/ImageLayout";
import Dishes from "./pages/Customer/Dishes";
import Customer from "./pages/Customer";
import Cart from "./pages/Customer/Cart";
import Staff from "./pages/Staff";
import MainLayout from "./layouts/MainLayout";
import BillManagement from "./pages/Staff/Bill-Management";
import HomeCooker from "./pages/Staff/HomeCooker";
import OpenTable from "./pages/Customer/OpenTable";
import StatusDish from "./pages/Staff/Status-Dish";
import PageNotFound from "./components/PageNotFound";
import signinImage from "./assets/images/signin.png";

function App() {
    return (
        <div className="container">
            <AppContext.Provider value={{ toast }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="*" element={<PageNotFound />} />
                        <Route element={<Customer />}>
                            <Route element={<MainLayout />}>
                                <Route path="/dishes" element={<Dishes />} />
                                <Route path="/cart" element={<Cart />} />
                            </Route>
                            <Route path="/" element={<ImageLayout />}>
                                <Route index element={<OpenTable />} />
                            </Route>
                        </Route>
                        <Route element={<Staff />}>
                            <Route path="/cooker/" element={<MainLayout />}>
                                <Route index element={<HomeCooker />} />
                                <Route path="dishes" element={<StatusDish />} />
                            </Route>
                            <Route path="/admin" element={<MainLayout />}>
                                <Route index element={<BillManagement />} />
                            </Route>
                        </Route>

                        <Route
                            path="/signin"
                            element={<ImageLayout image={signinImage} />}
                        >
                            <Route index element={<Signin />} />
                        </Route>
                    </Routes>
                </BrowserRouter>

                <ToastContainer closeOnClick />
            </AppContext.Provider>
        </div>
    );
}

export default App;
