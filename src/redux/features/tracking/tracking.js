export const tracking = {
    "shipment_id": "SHP-2025-0001",
    "dispatch_date": "2025-04-29T00:00:00.000Z",
    "mode_of_transport": "Air",
    "courier_company": "DHL",

    "sender": {
        "name": "John Doe",
        "id_number": "GHA987654321",
        "address": "45 Industrial Road, Accra, Ghana",
        "contact": "+233555123456",
        "business_registration": "BRN-GHA-2025"
    },

    "recipient": {
        "name": "Jane Smith",
        "id_number": "UK123456789",
        "address": "22 Kingsway, London, UK",
        "contact": "+44 7900 123456",
        "import_license_number": "IMP-UK-8490GEN"
    },

    "shipment_items": [
        {
            "item_description": "Laptops",
            "quantity": 10,
            "weight_kg": 15,
            "category": "Electronics",
            "declared_value_usd": 12000,
            "item_serials": "LT-1001 to LT-1010"
        }
    ],

    "shipment_value_usd": 12000,
    "total_cost_usd": 13500,

    "insurance": {
        "policy_number": "INS-GEN-2025-001",
        "insurer": "Global Cover Ltd.",
        "coverage_usd": 15000
    },

    "documentation": {
        "export_license": "EXP-GHA-2025-7789",
        "certificate_of_origin": "CO-GEN-2025/012",
        "commercial_invoice": "INV-2025-001",
        "packing_list": "PKG-LIST-2025-001",
        "waybill": "WB-2025-0909"
    },

    "tracking_logs": [
        {
            "step_name": "Package Registered",
            "status": "completed",
            "is_current_step": false,
            "timestamp": "2025-04-29T08:00:00.000Z",
            "location": "Accra Warehouse",
            "description": "Package received and registered in the system.",
            "officer_or_system": "John Doe"
        },
        {
            "step_name": "Cleared for Export",
            "status": "completed",
            "is_current_step": false,
            "timestamp": "2025-04-29T09:45:00.000Z",
            "location": "Accra Airport Cargo",
            "description": "Package cleared by Ghana customs.",
            "officer_or_system": "GRA Customs Officer"
        },
        {
            "step_name": "In Transit to UK",
            "status": "in_progress",
            "is_current_step": true,
            "timestamp": "2025-04-29T12:30:00.000Z",
            "location": "Air Freight",
            "description": "Package currently en route to the UK.",
            "officer_or_system": "Automated Flight Tracker"
        }
    ]
}
