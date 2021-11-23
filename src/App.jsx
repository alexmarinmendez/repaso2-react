import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const App = () => {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/category/:idCategory' element={<ItemListContainer />} />
                    <Route path='/item/:idItem' element={<ItemDetailContainer />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    );
}

export default App;