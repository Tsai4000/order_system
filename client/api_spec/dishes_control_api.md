FORMAT: 1A

# Dishes_Control API

# Group Dishes_Control API

## Admin Dishes_Control [/api/dishes_control]

### Create Order to complete order list [POST /api/dishes_control/complete_order_list]

+ Request (application/json)
    + Attributes
        + dishes_id: 02543 (array, required) - different dish's id should be different.
        + dishes_name: `無骨雞排` (array, required) - the name of the meal which user chose.It should correspond to the dish's id array.
        + price: 80 (array, required) - the price of the meal which user chose. It should correspond to the dish's name array.

+ Response 204 (application/json)
    + Attributes
        + error_message: `writed fail` (string, required) - return `writed fail` if writed fail.

+ Response 200 (application/json)