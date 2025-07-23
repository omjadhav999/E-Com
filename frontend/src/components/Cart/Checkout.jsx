// sb-k47s1m44634140@business.example.com
// 0unsr$qF


import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PayPalButton from "./PayPalButton";

const cart = {
    products: [
        {
            name: "Stylish Jacket",
            size: "M",
            color: "Black",
            price: 35,
            image: "https://picsum.photos/150?random=19",
        },
        {
            name: "Jeans",
            size: "38",
            color: "Blue",
            price: 45,
            image: "https://picsum.photos/150?random=21",
        },
    ],
    totalPrice: 80,
};

const Checkout = () => {
    const navigate = useNavigate();
    const [checkoutId, setCheckoutId] = useState(null);

    const [shippingAdd, setShippingAdd] = useState({
        firstName : "",
        lastName : "", 
        address : "",
        city : "",
        postalCode : "",
        country : "",
        phone : "",
    });

    const handleCreateCheckout = (e) => {
        e.preventDefault();
        setCheckoutId(123);  
    };

    const handlePaymentSuccess = (details) => {
        console.log("Payment Successful", details) ;
        navigate("/order-confirmation");
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
            <div className="bg-white rounded-lg p-6">
                <h2 className="text-2xl uppercase mb-6">Checkout</h2>
                <form onSubmit={handleCreateCheckout}>
                    <h3 className="text-lg mb-4"></h3>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input type="email" value="user@example.com" className="w-full p-2 border rounded" disabled/>
                    </div>
                    <h3 className="text-lg mb-4">Delivery</h3>
                    <div className="mb-4 grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700">First Name</label>
                            <input type="text" value={shippingAdd.firstName} onChange={(e) => setShippingAdd({...shippingAdd, firstName: e.target.value})} className="w-full p-2 border rounded" required/>
                        </div>
                        <div>
                            <label className="block text-gray-700">Last Name</label>
                            <input type="text" value={shippingAdd.lastName} onChange={(e) => setShippingAdd({...shippingAdd, lastName: e.target.value})} className="w-full p-2 border rounded" required/>
                        </div>
                    </div>
                    <div className="mb-4 ">
                        <label className="block text-gray-700">Address</label>
                        <input type="text" value={shippingAdd.address} onChange={(e) => setShippingAdd({...shippingAdd, address: e.target.value})} className="w-full p-2 border rounded" required></input>
                    </div>
                    <div className="mb-4 grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700">City</label>
                            <input type="text" value={shippingAdd.city} onChange={(e) => setShippingAdd({...shippingAdd, city: e.target.value})} className="w-full p-2 border rounded" required/>
                        </div>
                        <div>
                            <label className="block text-gray-700">Pincode</label>
                            <input type="text" value={shippingAdd.postalCode} onChange={(e) => setShippingAdd({...shippingAdd, postalCode: e.target.value})} className="w-full p-2 border rounded" required/>
                        </div> 
                    </div>
                    <div className="mb-4 ">
                        <label className="block text-gray-700">Country</label>
                        <input type="text" value={shippingAdd.country} onChange={(e) => setShippingAdd({...shippingAdd, country: e.target.value})} className="w-full p-2 border rounded" required></input>
                    </div>
                    <div className="mb-4 ">
                        <label className="block text-gray-700">Phone Number</label>
                        <input type="tel" value={shippingAdd.phone} onChange={(e) => setShippingAdd({...shippingAdd, phone: e.target.value})} className="w-full p-2 border rounded" required></input>
                    </div>
                    <div className="mt-6">
                        {!checkoutId ? (
                            <button type="submit" className="w-full bg-black text-white py-3 rounded">Continue to Payment</button>
                        ) : (
                            <div>
                                <h3 className="text-lg mb-4">Pay with Paypal</h3>
                                <PayPalButton amount={80} onSuccess={handlePaymentSuccess} onError={(err) => alert("Payment failed. Try again.")}/>   
                            </div>
                        ) }
                    </div>
                </form>
            </div>

            <div className="bg-grey-50 p-6 rounded-lg">
                <h3 className="text-lg mb-4">Order Summary</h3>
                <div className="border-t py-4 mb-4">
                    {cart.products.map((product, index) => (
                        <div key={index} className="flex items-start justify-between py-2 border-b">
                            <div className="flex items-start">
                                <img src={product.image} alt={product.name} className="w-20 h-24 object-cover mr-4"/>
                                <div>
                                    <h3 className="text-md">{product.name}</h3>
                                    <p className="text-gray-500">Size: {product.size}</p>
                                    <p className="text-gray-500">Color: {product.color}</p>
                                </div>
                            </div>
                            <p className="text-xl">${product.price?.toLocaleString()}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between items-center text-lg mb-4">
                    <p>Subtotal</p>
                    <p>${cart.totalPrice?.toLocaleString()}</p>
                </div>
                <div className="flex justify-between items-center text-lg">
                    <p>Shipping</p>
                    <p>$0</p>
                </div>
                <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
                    <p>Total</p>
                    <p>${cart.totalPrice?.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Checkout;