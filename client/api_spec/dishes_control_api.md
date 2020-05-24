FORMAT: 1A

# Dishes_Control API

# Group Dishes_Control API

## Admin Dishes_Control [/api/dishes_control]

### Create Order to complete order list [POST /api/dishes_control/complete_order_list]

+ Request (application/json)
    + Attributes
        + dishes_id: 02543 (number, required) - different dishes' id should be different.
        + vendorname: `蘭媽` (string, required) -  the name of the restrunt which user chose.
        + dishes_name: `無骨雞排` (string, required) - the name of the meal which user chose.
        + price: 80 (number, required) - the price of the meal which user chose.

+ Response 204 (application/json)
    + Attributes
        + error_message: `writed fail` (string, required) - return `writed fail` if writed fail.

+ Response 200 (application/json)
    + Attributes
        + message: `writed successful` (string, required) - return `writed successful` if writed successful.
