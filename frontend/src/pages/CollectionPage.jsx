import { useState, useEffect, useRef } from 'react';
import { FaFilter } from 'react-icons/fa'
import FilterSidebar from '../components/Products/FilterSidebar';
import SortOptions from '../components/Products/SortOptions';
import ProductGrid from '../components/Products/ProductGrid';

const CollectionPage = () => {
    const [products, setProducts] = useState([]);
    const sidebarRef = useRef(null);
    const [isSidebarOpen, setIsSideBArOpen] = useState(false);

    const toggkeSidebar = () => {
        setIsSideBArOpen(!isSidebarOpen);
    }
    
    const handleClickOutside = (e) => {
        if(sidebarRef.current && !sidebarRef.current.contains(e.target)){
            setIsSideBArOpen(false);
        }

    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return() => {
            document.addEventListener("mousedown", handleClickOutside);

        }
    }, []);

    useEffect (() => {
        setTimeout(() => {
            const fetchedProducts = [
     {
            _id : "7",
            name: "Casual Shirt",
            price : 25.99,
            images : [{url : "https://picsum.photos/500/500?random=32"}],
        },
        {
            _id : "8",
            name: "Hoodie",
            price : 25.99,
            images : [{url : "https://picsum.photos/500/500?random=35"}],
        },
        {
            _id : "9",
            name: "T-Shirt",
            price : 25.99,
            images : [{url : "https://picsum.photos/500/500?random=36"}],
        },
        {
            _id : "10",
            name: "Oversized Sweater",
            price : 25.99,
            images : [{url : "https://picsum.photos/500/500?random=31"}],
        },
         {
            _id : "1",
            name: "Casual Shirt",
            price : 25.99,
            images : [{url : "https://picsum.photos/500/500?random=4"}],
        },
        {
            _id : "2",
            name: "Hoodie",
            price : 25.99,
            images : [{url : "https://picsum.photos/500/500?random=5"}],
        },
        {
            _id : "3",
            name: "T-Shirt",
            price : 25.99,
            images : [{url : "https://picsum.photos/500/500?random=6"}],
        },
        {
            _id : "4",
            name: "Oversized Sweater",
            price : 25.99,
            images : [{url : "https://picsum.photos/500/500?random=11"}],
        },
    ]; setProducts(fetchedProducts);
        }, 1000)
    }, [])

    return (
        <div className='flex flex-col lg:flex-row'>
            <button onClick={toggkeSidebar} className='lg:hidden border p-2 justify-center items-center'>
                <FaFilter className='mr-2'/>
            </button>

            <div ref={sidebarRef} className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}> 
                <FilterSidebar />
            </div>

            <div className='flex-scroll p-4 '>
                <h2 className='text-2xl uppercase mb-4'>All Collection</h2>

                <SortOptions />

                <ProductGrid products={products}/>
            </div>
        </div>
    )
}

export default CollectionPage;