import { TbPlaceholder } from 'react-icons/tb';
import Hero from '../components/Layout/Hero';
import GenderCollectionSection from '../components/Products/GenderCollectionSection.jsx';
import NewArrivals from '../components/Products/NewArrivals.jsx';
import ProductDetails from '../components/Products/ProductDetails.jsx';
import ProductGrid from '../components/Products/ProductGrid.jsx';
import FeaturedProducts from '../components/Products/FeaturedProducts.jsx';
import FeaturesSection from '../components/Products/FeaturesSection.jsx';

const placeholderProducts = [
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
]

const Home = () => {
    return (
        <div>
           <Hero /> 
           <GenderCollectionSection />
           <NewArrivals />

           <h2 className='text-3xl text-center font-bold mb-4'>
            Best Seller
           </h2>
           <ProductDetails />

           <div className='container mx-auto'>
            <h2 className='text-3xl text-center font-bold mb-4'>
                Top Wear for Women
            </h2>
            <ProductGrid products={placeholderProducts}/>
           </div>

           <FeaturedProducts />
           <FeaturesSection />
        </div>
    ) 
}

export default Home;