"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { notFound } from 'next/navigation';

const products = [
  {
    id: "boat-airdopes",
    name: 'boAt Airdopes Alpha with 35 HRS Playback, 13mm Drivers, Dual Mics ENx & Beast Mode Bluetooth  (Jet Black, In the Ear)',
    price: 799,
    originalPrice: 3490,
    discount: '77% off',
    rating: 4.4,
    reviews: 776,
    imageUrl: '/earbuds/boat.png',
    color: 'Jet Black',
    category: 'True Wireless',
    description: "Experience the ultimate sound quality with boAt Airdopes Alpha, designed for music lovers.",
    offers: 'Available offers',
    allOffers: `💳5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarter
    💳5% cashback on Axis Bank Flipkart Debit Card up to ₹750
    💳Bank Offer10% off up to ₹1,250 on Axis Bank Credit Card Txns, Min Txn Value: ₹4,990
    🟩No Cost EMI on Credit/Debit Cards
    ☑️1 Year Warranty from the Date of Purchase
    🚚 Cash on Delivery available
    • 7 Days Replacement Policy
    • GST invoice available
    • 35 HRS Playback & ASAP Charge`,

  },
  {
    id: "techio-tws",
    name: "Techio TWS AIRPOD black Earbud AN_1 Bluetooth  (Black, True Wireless)",
    price: 599,
    originalPrice: 1499,
    discount: '65% off',
    rating: 3.2,
    reviews: 0,
    imageUrl: '/earbuds/tws-airpod.png',
    color: 'Black',
    category: 'True Wireless',
    description: "Experience the best in wireless audio with Techio TWS AIRPOD. Perfect for music lovers on the go.",
    offers: 'Available offers',
    allOffers: `💳5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarter
   💳5% cashback on Axis Bank Flipkart Debit Card up to ₹750
    💳Bank Offer10% off up to ₹1,250 on Axis Bank Credit Card Txns, Min Txn Value: ₹4,990
    🟩No Cost EMI on Credit/Debit Cards
    ☑️1 Year Warranty from the Date of Purchase
    🚚 Cash on Delivery available
    • 7 Days Replacement Policy
    • GST invoice available
    • 20Hrs Battery Life & ASAP Charge`,

  },
  {
    id: "sony-wf",
    name: "SONY WF-C710N Noise Cancellation Wireless Earbuds with AI Call Quality, 30Hrs Battery Bluetooth  (Pink, In the Ear)",
    price: 7990,
    originalPrice: 12999,
    discount: '38% off',
    rating: 4.8,
    reviews: 5,
    imageUrl: '/earbuds/sony-wf.png',
    color: 'Pink',
    category: 'In the Ear',
    description: "Enjoy superior sound quality with SONY's advanced noise cancellation technology.",
    offers: "Available offers",
    allOffers: `💳5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarter
    💳5% cashback on Axis Bank Flipkart Debit Card up to ₹750
    💳10% off up to ₹1,250 on Axis Bank Credit Card Txns, Min Txn Value: ₹4,990
    💳Get extra 28% off (price inclusive of cashback/coupon)
    ☑️1 Year Warranty from the Date of Purchase
    🚚 Cash on Delivery available
    • 7 Days Replacement Policy
    • GST invoice available
    • 30Hrs Battery Life & ASAP Charge`,
  },
  {
    id: "bolt-z",
    name: "Boult Z40 with Zen ENC Mic, 60H Battery Life, Low Latency Gaming, Made In India, 5.3 Bluetooth",
    price: 999,
    originalPrice: 4999,
    discount: '80% off',
    rating: 4.1,
    reviews: 400,
    imageUrl: '/earbuds/bolt.png',
    color: 'Brown',
    category: 'In the Ear',
    description: ' Boult Z40 offers exceptional sound quality with a long battery life, perfect for gaming and music.',
    offers: 'Available offers',
    allOffers: `💳5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarter
    💳5% cashback on Axis Bank Flipkart Debit Card up to ₹750
    💳10% off up to ₹1,250 on Axis Bank Credit Card Txns, Min Txn Value: ₹4,990
    💳Get extra 28% off (price inclusive of cashback/coupon)
    ☑️1 Year Warranty from the Date of Purchase
    🚚 Cash on Delivery available
    • 7 Days Replacement Policy
    • GST invoice available
    • 60H Battery Life & ASAP Charge`,
  },
  {
    id: "Boult-Astra",
    name: "Boult Astra with Quad Mic ENC, 48Hrs Battery, Low Latency Gaming, Made in India, 5.3v Bluetooth",
    price: 1199,
    originalPrice: 3499,
    discount: '65%  off',
    rating: 4.2,
    reviews: 1200,
    imageUrl: '/earbuds/bolt-astra.png',
    color: 'White Opal',
    category: 'True Wireless',
    description: ' Boult Astra delivers high-quality sound with advanced features for an immersive audio experience.',
    offers: 'Available offers',
    allOffers: `💳5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarter
     💳5% cashback on Axis Bank Flipkart Debit Card up to ₹750
    💳10% off up to ₹1,250 on Axis Bank Credit Card Txns, Min Txn Value: ₹4,990
    💳Get extra 28% off (price inclusive of cashback/coupon)
    ☑️1 Year Warranty from the Date of Purchase
    🚚 Cash on Delivery available
    • 7 Days Replacement Policy
    • GST invoice available
    • 48Hrs Battery Life & ASAP Charge`,
  },
  {
    id: "navo-buds",
    name: "Number Navo Buds X1 w/ 50H Playtime, Dual Pairing, 13mm Speakers, ENC, 45ms Low Latency Bluetooth",
    price: 599,
    originalPrice: 3999,
    discount: '85%  off',
    rating: 3.7,
    reviews: 938,
    imageUrl: '/earbuds/navo.png',
    color: 'Black Sun',
    category: 'In the Ear',
    description: ' Number Navo Buds X1 offers an impressive 50-hour playtime with advanced features for a superior audio experience.',
    offers: 'Available offers', 
    allOffers: `💳5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarter
    💳5% cashback on Axis Bank Flipkart Debit Card up to ₹750
    💳10% off up to ₹1,250 on Axis Bank Credit Card Txns, Min Txn Value: ₹4,990
    💳Get extra 28% off (price inclusive of cashback/coupon)
    ☑️1 Year Warranty from the Date of Purchase
    🚚 Cash on Delivery available
    • 7 Days Replacement Policy
    • GST invoice available
    • 50H Playtime & ASAP Charge`,
  },
  {
    id: "trigger",
    name: "TRIGGR Ultrabuds N4 with Premium Finish, Rubber Grip Design, 40H Battery, 13 mm Drivers Bluetooth",
    price: 899,
    originalPrice: 1999,
    discount: '55%  off',
    rating: 4.2,
    reviews: 278,
    imageUrl: '/earbuds/triger.png',
    color: 'Jungle Green',
    category: 'True Wireless',
    description: ' TRIGGR Ultrabuds N4 combines style and performance with a premium finish and long battery life.',
    offers: 'Available offers', 
    allOffers: `💳5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarter
    💳5% cashback on Axis Bank Flipkart Debit Card up to ₹750
    💳10% off up to ₹1,250 on Axis Bank Credit Card Txns, Min Txn Value: ₹4,990
    💳Get extra 28% off (price inclusive of cashback/coupon)
    ☑️1 Year Warranty from the Date of Purchase
    🚚 Cash on Delivery available
    • 7 Days Replacement Policy
    • GST invoice available
    • 40H Battery Life & ASAP Charge`
  },
  {
    id: "mivi-duopods",
    name: "Mivi Duopods K6, 50Hrs PT, HD Call, Fast Charging, 50ms Latency, IPX4,Voice Asst.5.3v Bluetooth Gaming",
    price: 699,
    originalPrice: 3999,
    discount: '82%  off',
    rating: 4.2,
    reviews: 693,
    imageUrl: '/earbuds/mivi.png',
    color: 'Black',
    category: 'True Wireless',
    description: "Mivi Duopods K6 offers an immersive audio experience with advanced features and long battery life.",
    offers: 'Available offers',
    allOffers: `💳5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarter
    💳5% cashback on Axis Bank Flipkart Debit Card up to ₹750
    💳10% off up to ₹1,250 on Axis Bank Credit Card Txns, Min Txn Value: ₹4,990
    💳Get extra 28% off (price inclusive of cashback/coupon)
    ☑️1 Year Warranty from the Date of Purchase
    🚚 Cash on Delivery available
    • 7 Days Replacement Policy
    • GST invoice available
    • 50Hrs PT & ASAP Charge`,
  },
];

const ProductPage = () => {
  const params = useParams();
  const router = useRouter();

  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return <div className="text-center p-10">Product not found.</div>;
  }


  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCart = [...existingCart, product];
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    router.push("/cart"); 
  };

  return (
    <div className="max-w-full mx-auto p-4 bg-white mt-4 mb-6 shadow-sm">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-78 object-contain  border-gray-200 p-2 "
          />
          <div className="flex mt-4 w-full space-x-4">
            <button
              className="bg-[#ff9f00] w-full font-semibold text-white px-4 py-3 cursor-pointer mt-4"
              onClick={() => {
                handleAddToCart(); 
              }}
            >
              Add to Cart
            </button>
            <button className="px-4 py-3 w-full font-semibold bg-[#fb641b] cursor-pointer text-white mt-4">
              Buy Now
            </button>

          </div>

        </div>

        <div>
          <h1 className="text-xl font-semibold mb-2">{product.name}</h1>
          <p className="text-sm text-gray-500 mb-1">
            {product.category} | {product.color}
          </p>
          <div className="flex items-center mb-1">
            <span className="text-green-600 text-xl font-bold mr-2">
              ₹{product.price}
            </span>
            <span className="line-through text-gray-400 text-sm">
              ₹{product.originalPrice}
            </span>
            <span className="ml-2 text-green-600 text-sm">
              {product.discount}
            </span>
          </div>
          <div className="text-sm text-gray-600 mb-4">
            {product.rating} ★ ({product.reviews} reviews)
          </div>
          <p className="text-base text-sm text-gray-600 mb-4">{product.description}</p>
          <p className="text-base">{product.offers}</p>
          {product.allOffers.split('\n').map((line, index) => (
            <p key={index} className="text-base text-xsm text-gray-600 mb-2">{line}</p>
          ))}


          {/* <div className="mt-6 space-x-4">
            <button
              className="bg-[#ff9f00] text-white px-4 py-2 cursor-pointer"
              onClick={() => {
                handleAddToCart(); // Call the function to add to cart
              }}
            >
              Add to Cart
            </button>
            <button className="px-4 py-2 bg-[#fb641b] cursor-pointer text-white">
              Buy Now
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;


