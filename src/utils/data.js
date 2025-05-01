import serviceImage1 from "./../assets/images/service-image01.jpg";
import serviceImage2 from "./../assets/images/service-image02.jpg";
import serviceImage3 from "./../assets/images/service-image03.jpg";

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

export const TITAN_FORWARDING_DATA = {offices, tags, services, logisticsServices, logisticsSolutions, features}