export const PRODUCTS = [
    {
        id: "1",
        name: "Wireless Noise-Canceling Headphones",
        price: 299.99,
        rating: 4.8,
        category: "Audio",
        stock: 15,
        description:
            "Experience premium sound quality with active noise cancellation and 30-hour battery life for uninterrupted listening sessions.",
        images: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop&q=80",
        ],
    },
    {
        id: "2",
        name: "Ergonomic Mechanical Keyboard",
        price: 149.99,
        rating: 4.6,
        category: "Accessories",
        stock: 22,
        description:
            "Customizable RGB backlit mechanical keyboard designed for optimal typing comfort, tactile feedback, and speed.",
        images: [
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&auto=format&fit=crop&q=80",
        ],
    },
    {
        id: "3",
        name: "Ultra-Slim 4K Monitor",
        price: 450.0,
        rating: 4.9,
        category: "Displays",
        stock: 8,
        description:
            "Stunning 27-inch 4K UHD display with ultra-thin bezels, HDR support, and accurate color reproduction for professionals.",
        images: [
            "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1586210515243-7f2150a045ff?w=600&auto=format&fit=crop&q=80",
        ],
    },
    {
        id: "4",
        name: "Precision Wireless Mouse",
        price: 79.99,
        rating: 4.7,
        category: "Accessories",
        stock: 30,
        description:
            "Ergonomic wireless mouse with adjustable DPI tracking, silent clicks, and customizable side shortcut buttons.",
        images: [
            "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&auto=format&fit=crop&q=80",
        ],
    },
    {
        id: "5",
        name: "Smart Fitness Tracker Watch",
        price: 199.99,
        rating: 4.5,
        category: "Wearables",
        stock: 12,
        description:
            "Track your health, heart rate, blood oxygen, sleep patterns, and daily workouts with precision GPS.",
        images: [
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=80",
        ],
    },
    {
        id: "6",
        name: "Professional Studio Microphone",
        price: 129.99,
        rating: 4.8,
        category: "Audio",
        stock: 19,
        description:
            "Crystal clear USB condenser microphone for podcasting, live streaming, gaming, and vocal recordings.",
        images: [
            "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1583795128737-6049d942e78a?w=600&auto=format&fit=crop&q=80",
        ],
    },
    {
        id: "7",
        name: "Portable Aluminum Laptop Stand",
        price: 49.99,
        rating: 4.4,
        category: "Accessories",
        stock: 40,
        description:
            "Foldable, lightweight, and adjustable aluminum stand designed to improve your ergonomic posture and laptop cooling.",
        images: [
            "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop&q=80",
        ],
    },
    {
        id: "8",
        name: "HD Webcam 1080p with Ring Light",
        price: 89.99,
        rating: 4.3,
        category: "Cameras",
        stock: 25,
        description:
            "High-definition webcam featuring built-in adjustable ring light brightness and dual noise-canceling microphones.",
        images: [
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80",
        ],
    },
    {
        id: "9",
        name: "RGB Gaming Headset Stand",
        price: 39.99,
        rating: 4.5,
        category: "Accessories",
        stock: 35,
        description:
            "Sturdy headset stand with vibrant customizable RGB lighting modes and convenient USB passthrough ports.",
        images: [
            "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
        ],
    },
    {
        id: "10",
        name: "External Solid State Drive 1TB",
        price: 119.99,
        rating: 4.9,
        category: "Storage",
        stock: 14,
        description:
            "Lightning-fast portable SSD with high transfer speeds, compact aluminum form factor, and shock-resistant casing.",
        images: [
            "https://images.unsplash.com/photo-1531492738989-227357492c0c?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&auto=format&fit=crop&q=80",
        ],
    },
    // Generating items 11 through 50 dynamically for completeness
    ...Array.from({ length: 40 }, (_, index) => {
        const id = (index + 11).toString();
        return {
            id,
            name: `Tech Product Item ${id}`,
            price: Number((Math.random() * 300 + 20).toFixed(2)),
            rating: Number((Math.random() * 1.5 + 3.5).toFixed(1)),
            category: [
                "Audio",
                "Accessories",
                "Displays",
                "Wearables",
                "Storage",
            ][index % 5],
            stock: Math.floor(Math.random() * 50) + 5,
            description: `High performance tech product item ${id} built with durable components for everyday professional and personal use.`,
            images: [
                "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=600&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=80",
            ],
        };
    }),
];
