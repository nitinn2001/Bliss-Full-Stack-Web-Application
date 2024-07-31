import { createContext, useEffect, useState } from "react";
import axios from "axios"


export const StoreContext=createContext(null)

const StoreContextProvider = (props) => {

    const[token,setToken] = useState("")
    const [allProducts, setAllProducts] = useState([])
    const [cartItems,setCartItems] = useState([])
    const [user,setUser] = useState({})

    const getItems = async() => {
        try{
            const response = await axios.get('http://localhost:4000/api/item/getItems')
            setAllProducts(response.data.data)
        }
        catch(err){
            console.log(err)
        }
    }

    const addToBag = async (id,quantity) => {
        try {
            if(!token){
                console.log("Token ella nanba!")
                return response.json({
                    success:false,
                    message:"Please login before attempting to purchase"
                })
            }
          const response = await axios.post('http://localhost:4000/api/cart/addToBag', { itemId: id, quantity }, { headers: { token } });
          if (response.data.success) {
            console.log("Product added successfully");
          }
        } catch (err) {
          console.log(err);
        }
    };

    const clearCartItems = () => {
        // Assuming you have a function to set cart items to an empty object
        setCartItems({});
    };

    const listCartItems = async (token) => {
        try {
            const response = await axios.get('http://localhost:4000/api/cart/listItems', { headers: { token } });
            if (response.data.success) {
                setCartItems(response.data.data);
            } else {
                console.log("Failed to fetch cart items:", response.data.message);
            }
        } catch (err) {
            console.error("Error fetching cart items:", err);
        }
    };

    const removeOne = async(id) => {
        try{
            const response = await axios.post('http://localhost:4000/api/cart/removeOne',{itemId:id},{headers:{token}})
            if(response.data.success){
                setCartItems(response.data.data)
            }
        }
        catch(err){
            console.log(err)
        }
    }

    const addOne = async(id) => {
        try{
            const response = await axios.post('http://localhost:4000/api/cart/addOne',{itemId:id},{headers:{token}})
            if(response.data.success){
                setCartItems(response.data.data)
            }
        }
        catch(err){
            console.log(err)
        }
    }

    const getTotalAmount = () => {
        let total = 0;
        for (const key in cartItems) {
            let product = allProducts.find((product) => product._id === key);
            if (product) {
                total += cartItems[key] * product.price;
            }
        }
        return total;
    };
    
    const logOut = () => {
        localStorage.removeItem("token")
        setToken("")
    }

    const findUser = async(token) => {
        try{
            const response = await axios.post('http://localhost:4000/api/user/findUser',{},{headers:{token}})
            if(response.data.success){
                await setUser(response.data.user)
            }
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        findUser(token)
    },[token])

    const contextValue = {
        token,
        setToken,
        allProducts,
        addToBag,
        cartItems,
        setCartItems,
        listCartItems,
        removeOne,
        addOne,
        getTotalAmount,
        logOut,
        findUser,
        user,
        setUser,
        clearCartItems
    }

    useEffect(()=>{
        getItems()
    },[])

    useEffect(() => {
        async function loadData() {
            const storedToken = localStorage.getItem("token");
            if (storedToken) {
                setToken(storedToken);
                await listCartItems(storedToken);
            }
        }
        loadData();
    }, []);

    useEffect(() => {
    }, [cartItems]);



    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider;

