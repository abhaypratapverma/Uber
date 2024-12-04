# Backend API Documentation

## User Registration Endpoint

**Method:** `POST`

### Description

This endpoint allows new users to register by providing their first name, last name, email, and password. The password is securely hashed before storing it in the database.

### Request Body

The request body should be a JSON object with the following structure:

- **fullname**: An object containing:
  - **firstname**: _String_, required, minimum 3 characters.
  - **lastname**: _String_, required, minimum 3 characters.
- **email**: _String_, required, must be a valid email address.
- **password**: _String_, required, minimum 6 characters.

**Example:**

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```
### Response

The response will be a JSON object with the following structure:

- **status**: _String_, indicates the success or failure of the registration.
- **message**: _String_, provides additional information about the registration status.
- **data**: _Object_, contains user details if registration is successful.

**Example:**

```json
{
  "status": "success",
  "message": "User registered successfully",
  "data": {
    "id": "12345",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```
