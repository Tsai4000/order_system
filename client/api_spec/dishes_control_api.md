FORMAT: 1A

# Dishes_Control API

# Group Dishes_Control API

## Admin Dishes_Control [/api/dishes_control]

### Create Order to complete order list [POST /api/dishes_control/complete_order_list]

+ Request (application/json)
    + Attributes
        + dishes_id: 02543 (number, required) - write dishes_id to database.
        + vendorname: `蘭媽` (string, required) -  write vendorname to database.
        + dishes_name: `無骨雞排` (strimg, required) - write dishes_name to database.
        + price: 80 (number, required) - write price to database.

+ Response 204 (application/json)
    + Attributes
        + error_message: `writed fail` (string, required) - return `writed fail` if writed fail.

+ Response 200 (application/json)
    + Attributes
        + message: `writed successful` (string, required) - return `writed successful` if writed successful.
