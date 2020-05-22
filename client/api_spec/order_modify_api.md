FORMAT: 1A

# Order_modify API

# Group Order_modify API

## Student Order_modify [/api/order_modify]

### Create Order Information [POST /api/order_modify/student_order_info]

+ Request (application/json)
    + Attributes
        + student_id: `s1051318` (string, required) - write student id to database.
        + username: `strawberry` (string, required) - write user name to database.
        + vendor_name: `Alice` (string, required) - write vendor name to database.
        + dishes_name: `無骨雞排` (string, required) - write dishes name to database. Dishes could be two or more.
        + quantity: 1 (number, required) - write quintity of the dishes to database.
        + retrieve_time: 1590006605 (number, required) - write retrieve time in timestamp of the dishes to database. It means when will you take the dishes.
        + description: `加蛋` (string, required) - write description of the dishes to database.

+ Response 204 (application/json)
    + Attributes
        +error_message: `writed fail` (string, required) - return `writed fail` if writed fail.

+ Response 200 (application/json)
    + Attributes
        +message: `writed successful` (string, required) - return `writed successful` if writed successful.

