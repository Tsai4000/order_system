FORMAT: 1A

# Order_modify API

# Group Order_modify API

## Student Order_modify [/api/order_modify]

### Create Order Information [POST /api/order_modify/student_order_info]

+ Request (application/json)
    + Attributes
        + student_id: `s1051318` (string, required) - student's id.
        + username: `strawberry` (string, required) - user's name.
        + vendor_name: `Alice` (string, required) - the name of the restrunt which user chose.
        + dishes_name: `無骨雞排` (string, required) - the name of the meal which user chose.
        + quantity: 1 (number, required) - the number of meal which user chose.
        + retrieve_time: 1590006605 (number, required) - retrieve time in timestamp of the dishes. It means when should user take the dishes.
        + description: `加蛋` (string, required) - user's special needs of the dishes.

+ Response 204 (application/json)
    + Attributes
        +error_message: `writed fail` (string, required) - return `writed fail` if writed fail.

+ Response 200 (application/json)
    + Attributes
        +message: `writed successful` (string, required) - return `writed successful` if writed successful.

