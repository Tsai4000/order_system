FORMAT: 1A

# Get_Order API

# Group Get_Order API

## Admin Get_Order [/api/get_order]

### Get Order Infomation [GET /api/get_order/order{?order_id,student_id}]

+ Parameters
    + order_id: 02456 (number, required) - id of the order which user searched.
    + student_id: `s1051318` (string, required) - student's id of the order which user searched.

+ Response 200 (application/json)
    + Attributes
        + search_result: `exsit` (string, required) - return `exsit` if order exsit.

+ Response 204 (application/json)
    + Attributes
        + error_messages: `lost` (string, required) - return `lost` if order not exsit.