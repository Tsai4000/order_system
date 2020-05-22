FORMAT: 1A

# Login API

# Group Login API

## User Login [/api/login]

### Get User Certification [GET /api/login/user{?id,password}]

+ Parameters
    + id: s1051318 (string, required) - user's id
    + password: 042360ab (string, required) - user's password

+ Response 200 (application/json)
    + Attributes
        + identification: `normal user` (string, required) - return user identity if user data exist. return `admin` if id belongs to admin.

+ Response 204 (application/json)
    + Attributes
        + error_messages: `Wrong password` (string, required) - return user `wrong password` if user data exist but password are wrong, return `Wrong id` if user data not exist.