import serviceImage1 from "./../assets/images/service-image01.jpg";
import serviceImage2 from "./../assets/images/service-image02.jpg";
import serviceImage3 from "./../assets/images/service-image03.jpg";

import tabImage1 from "./../assets/images/tab-image01.jpg";
import tabImage2 from "./../assets/images/tab-image02.jpg";
import tabImage3 from "./../assets/images/tab-image03.jpg";
import tabImage4 from "./../assets/images/tab-image04.jpg";
import tabImage5 from "./../assets/images/tab-image05.jpg";
import tabImage6 from "./../assets/images/tab-image06.jpg";

import logo1 from "./../assets/images/logo01.jpg";
import logo2 from "./../assets/images/logo02.jpg";
import logo3 from "./../assets/images/logo03.jpg";
import logo4 from "./../assets/images/logo04.jpg";

const offices = [
    {
        title: "Netherlands Office (Head Office)",
        address: "Algerastraat 11C, 3125 BS Schiedam, Netherlands",
        phone: "+1(818) 971 9302",
        email: "neth@titanforwarding.com",
        mapUrl: "https://www.google.com/maps?q=Algerastraat+11C,+3125+BS+Schiedam,+Netherlands"
    },
    {
        title: "Russia Office",
        address: "JXJC+52H Letnii Otdykh, Moscow Oblast",
        phone: "+7 951 465-20-28",
        email: "rus@titanforwarding.com",
        mapUrl: "https://www.google.com/maps?q=JXJC+52H+Letnii+Otdykh,+Moscow+Oblast"
    },
    {
        title: "Spain (Head Office)",
        address: "C. Forjas, 6, Vicálvaro, 28052 Madrid, Spain",
        phone: "+34 (0)6799 975 80",
        email: "spain@titanforwarding.com",
        mapUrl: "https://www.google.com/maps?q=C.+Forjas,+6,+Vicálvaro,+28052+Madrid,+Spain"
    },
    {
        title: "Canada Office (Head Office)",
        address: "85 Citizen Court, #1-3 Markham, ON L6G 1A8, Canada",
        phone: "+122 621 21500",
        email: "can@titanforwarding.com",
        mapUrl: "https://www.google.com/maps?q=85+Citizen+Court,+1-3+Markham,+ON+L6G+1A8,+Canada"
    }
];

const tags = [
    "Freight",
    "Supply Chain",
    "Logistics",
    "Warehousing",
    "Last-Mile Delivery",
    "Route Optimization",
    "Customs",
    "Cargo",
    "Shipping",
    "Inventory Management",
    "Packaging",
    "Air Freight",
    "Sea Freight",
    "Fleet Management",
    "Tracking",
    "Courier Services"
];


const services = [
    "Contract distribution",
    "Ad-hoc transport",
    "Groupage",
    "Tail-lift deliveries",
    "Double-deck trailers",
    "Reverse logistics",
    "Curtain-sided vehicles",
    "Next day delivery",
    "Timed deliveries",
    "AM deliveries"
];

const logisticsServices = [
    {
        title: "Full, Part, and Consolidated Loads",
        description:
            "Our dedicated fleet of vehicles operates nationally throughout our operating countries delivering both full, part, and consolidated loads.",
        image: serviceImage1
    },
    {
        title: "Palletforce Equipments",
        description:
            "Sending smaller consignments of less than 10 pallets used to be expensive business, but we have a solution for you.",
        image: serviceImage2
    },
    {
        title: "European Transport Logistics",
        description:
            "In addition to our UK services, through our trusted and fully-vetted network of partners, we offer a full import and export service.",
        image: serviceImage3
    },
];


const logisticsSolutions = [
    {
        title: "National Freight Forwarding",
        description:
            "Our dedicated fleet of vehicles operates across all our active countries, providing full, part, and consolidated load transport with reliability and scale.",
        image: serviceImage1, // Replace with actual image if needed
    },
    {
        title: "Efficient Supply Chain for Smaller Loads",
        description:
            "Sending smaller consignments of fewer than 10 pallets no longer needs to be costly. We offer tailored solutions to keep your supply chain efficient and affordable.",
        image: serviceImage2, // Replace as needed
    },
    {
        title: "International Freight & Export Services",
        description:
            "In addition to our national operations, we offer a full import and export service through a trusted, fully-vetted network of international logistics partners.",
        image: serviceImage3, // Replace as needed
    },
];

const features = [
    "Dedicated, secure storage facilities",
    "Hassle-free customs clearance",
    "Real-time inventory and reporting dashboard",
    "Complete order management with back-office integration",
];


const values = [
    {
        title: 'Reliability',
        description: 'We deliver on our promises — every time. Our clients trust us to move goods across borders safely and on schedule. Reliability is the foundation of everything we do.'
    },
    {
        title: 'Customer Commitment',
        description: 'Your success is our mission. We prioritize understanding your unique logistics needs and providing solutions that support your business growth and satisfaction.'
    },
    {
        title: 'Integrity',
        description: 'We operate with honesty, transparency, and accountability.From compliance to communication, we hold ourselves to the highest ethical standards in every shipment we handle.'
    },
    {
        title: 'Innovation',
        description: 'Forward-thinking solutions for a dynamic world. We embrace technology and process improvements to enhance visibility, speed, and efficiency across the supply chain.'
    },
    {
        title: 'Global Collaboration',
        description: 'Strong partnerships, seamless coordination.  With a network of vetted international partners, we work across borders and cultures to deliver world-class logistics solutions.'
    },
];

const stats = [
    {
        title: "Operating Centres",
        value: 175,
    },
    {
        title: "Countries Worldwide",
        value: 120,
    },
    {
        title: "Logistics Professionals",
        value: 50000,
    },
    {
        title: "Containers of Freight",
        value: 450000,
    },
    {
        title: "Project Delivery Vehicles",
        value: 35000,
    },
    {
        title: "sq.ft of Warehousing",
        value: 20000
    },
];

const milestones = [
    {
        title: "ISO Accreditation Achieved",
        description: "In November 2016, after extensive effort, the company earned ISO 9001 and ISO 27001 certifications, officially complying with global standards for import, export, and logistics services.",
        date: "November 23, 2016",
    },
    {
        title: "Brand Relaunch",
        description: "In 2016, we unveiled a fresh new identity — featuring a new logo, updated website, and a refined brand direction, while keeping our trusted team and core values intact.",
        date: "November 23, 2016",
    },
    {
        title: "Acquisition of Logistics PVT",
        description: "In September 2015, our company acquired shares of Logistics PVT, expanding our footprint and strengthening our global logistics capabilities under the Atlas Logistics brand.",
        date: "November 23, 2016",
    },
    {
        title: "Expansion to Larger Warehousing",
        description: "In March 2013, both of our offices relocated to larger facilities — including a 30,000 sq.ft. logistics warehouse in Markham — to accommodate growing operations.",
        date: "November 23, 2016",
    },
    {
        title: "WCA Network Membership",
        description: "In June 2012, Titan Forwarding joined WCA — the world’s largest and most powerful network of independent freight forwarders — further expanding our global reach.",
        date: "November 23, 2016",
    },
    {
        title: "Our Beginning",
        description: "In October 2009, Logistics Ltd was founded as an independent logistics company, operating through strategic partnerships and share ownership.",
        date: "November 23, 2016",
    },
];

const industries = [
    {
        label: "Postal",
        image: tabImage1,
        description:
            "The postal industry is increasingly impacted by global economic shifts. To ensure profitability and service excellence, operators must streamline the movement of mail and packages — from distribution hubs to doorsteps — powered by timely, accurate data.",
    },
    {
        label: "Retail",
        image: tabImage2,
        description:
            "Retail success hinges not just on quality products and service, but on adapting to economic trends. Leading retailers optimize operations by enhancing visibility across their supply chain and using real-time data to drive better decision-making.",
    },
    {
        label: "Logistics",
        image: tabImage3,
        description:
            "Logistics organizations must adapt quickly to market conditions and customer demands. Operational efficiency, real-time data, and predictive planning are essential to ensure seamless movement of goods from supplier to customer.",
    },
    {
        label: "Ticketing",
        image: tabImage4,
        description:
            "In the ticketing industry, timely access to data is crucial for managing demand, pricing, and distribution. Forward-thinking organizations leverage digital solutions to ensure seamless customer experiences and operational agility.",
    },
    {
        label: "Industrial",
        image: tabImage5,
        description:
            "Industrial supply chains face pressure to remain agile amidst global uncertainty. Smart data use enables businesses to optimize material flows, minimize downtime, and increase asset performance across complex operations.",
    },
    {
        label: "Other",
        image: tabImage6,
        description:
            "Regardless of the sector, modern organizations rely on accurate data and responsive systems to optimize performance. Our solutions help you navigate complexity, reduce risk, and drive operational excellence.",
    },
];

const team = [
    {
        name: "Ivan Hilton",
        role: "Chief Operations Officer",
        image: "https://randomuser.me/api/portraits/men/51.jpg",
    },
    {
        name: "Paul McJones",
        role: "Head of Administration",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
        name: "Fred William Johnson",
        role: "Financial Manager",
        image: "https://randomuser.me/api/portraits/men/36.jpg",
    },
];

const brands = [
    {
        image: logo1,
    },
    {
        image: logo2,
    },
    {
        image: logo3,
    },
    {
        image: logo4,
    }
];

export const testimonials = [
    {
        name: "Michael Zhang",
        role: "Head of Supply Chain, TekNova Asia",
        quote:
            "Thanks to Titan’s real-time tracking and seamless customs handling, we’ve reduced delays and saved significantly on logistics overhead.",
    },
    {
        name: "Arun Patel",
        role: "Director, Patel Industrial Solutions",
        quote:
            "Their warehousing and fulfillment services have streamlined our entire distribution workflow. Titan Forwarding is now our go-to logistics partner.",
    }
];


export const TITAN_FORWARDING_DATA = {
    offices,
    tags,
    services,
    logisticsServices,
    logisticsSolutions,
    features,
    values,
    stats,
    milestones,
    industries,
    team,
    brands,
    testimonials
}