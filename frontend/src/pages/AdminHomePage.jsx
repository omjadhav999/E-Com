import { Link } from "react-router-dom";

const AdminHomePage = () => {
    const orders = [
        {
            _id: 123,
            user: {
                name: "Peace B.",
            },
            totalPrice: 190,
            status: "Processing",
        },
        {
            _id: 45,
            user: {
                name: "Roach S.",
            },
            totalPrice: 110,
            status: "Processing",
        },
        {
            _id: 237,
            user: {
                name: "Bobby B.",
            },
            totalPrice: 330,
            status: "Processing",
        },
        {
            _id: 99,
            user: {
                name: "Shani D.",
            },
            totalPrice: 250,
            status: "Processing",
        },
        {
            _id: 143,
            user: {
                name: "Laddu J.",
            },
            totalPrice: 105,
            status: "Processing",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
            <div className="grid grid-col-1 dm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 shadow-md rounded-lg">
                    <h2 className="text-xl font-semibold">Revenue</h2>
                    <p className="text-2xl">$37500</p>
                </div>
                <div className="p-4 shadow-md rounded-lg">
                    <h2 className="text-xl font-semibold">Total Orders</h2>
                    <p className="text-2xl">560</p>
                    <Link to="/admin/orders" className='text-blue-500 hover:underline'>Manage Orders</Link>
                </div>
                <div className="p-4 shadow-md rounded-lg">
                    <h2 className="text-xl font-semibold">TotalProducts</h2>
                    <p className="text-2xl">130</p>
                    <Link to="/admin/products" className='text-blue-500 hover:underline'>Manage Products</Link>
                </div>
            </div>

            <div className="mt-6">
                <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-left text-gray-500">
                        <thead className="bg-gray-100 text-xs text-gray-700">
                            <tr>
                                <th className="py-3 px-4">Order ID</th>
                                <th className="py-3 px-4">User</th>
                                <th className="py-3 px-4">Total Price</th>
                                <th className="py-3 px-4">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length > 0 ? (
                                orders.map((order) => (
                                    <tr key={order._id} className="border-b hover:bg-gray-50 cursor-pointer">
                                        <td className="p-4">{order._id}</td>
                                        <td className="p-4">{order.user.name}</td>
                                        <td className="p-4">{order.totalPrice}</td>
                                        <td className="p-4">{order.status}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr> 
                                     <td colSpan={4} className="p-4 text-center text-gray-500">
                                        No recent orders found.
                                     </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};

export default AdminHomePage;