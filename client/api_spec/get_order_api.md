FORMAT: 1A

# Get_Order API

# Group Get_Order API

## Admin Get_Order [/api/get_order]

### Get Order Infomation [GET /api/get_order/order/{order_id}]

+ Parameters
    + order_id: 02456 (number, required) - id of the order which user searched.

+ Response 200 (application/json)
    + Attributes
        + student_id: `s1051318` (string, required) - student's id.
        + username: `strawberry` (string, required) - user's name.
        + dishes_name: `無骨雞排` (array, required) - the name of the meal which user chose.
        + quantity: 1 (number, required) - the number of meal which user chose.
        + retrieve_time: 1590006605 (number, required) - retrieve time in timestamp of the dishes. It means when should user take the dishes.
        + special_needs: `加蛋` (string, required) - user's special needs of the dishes.

+ Response 204 (application/json)
    + Attributes
        + error_messages: `lost` (string, required) - return `lost` if order not exsit.