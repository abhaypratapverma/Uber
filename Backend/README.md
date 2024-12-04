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

## User Login Endpoint

**Method:** `POST`

### Description

This endpoint allows existing users to log in by providing their email and password. If the credentials are valid, the user receives an authentication token.

### Request Body

The request body should be a JSON object with the following structure:

- **email**: _String_, required, must be a valid email address.
- **password**: _String_, required, minimum 6 characters.

**Example:**
```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### Response

The response will be a JSON object with the following structure:

- **status**: _String_, indicates the success or failure of the login attempt.
- **message**: _String_, provides additional information about the login status.
- **token**: _String_, the authentication token if login is successful.

**Example:**

```json
{
  "status": "success",
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

## User Profile Endpoint

**Method:** `GET`

### Description

This endpoint allows authenticated users to retrieve their profile information.

### Headers

- **Authorization**: _String_, required, Bearer token obtained after login.

### Response

The response will be a JSON object containing the user's profile details.

**Example:**
```json
{
  "id": "12345",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

## User Logout Endpoint

**Method:** `POST`

### Description

This endpoint allows authenticated users to log out by invalidating their authentication token.

### Headers

- **Authorization**: _String_, required, Bearer token obtained after login.

### Response

The response will be a JSON object indicating the success or failure of the logout attempt.

**Example:**
```json
{
  "status": "success",
  "message": "Logout successful"
}
```


# Captain Registration API

This project provides an API to register captains, including their personal and vehicle details, and store the information securely in the database.

---

## **API Endpoint: Register a Captain**

### **Route**
`POST /register`

---

### **Description**
This endpoint registers a new captain by validating and storing their details in the database.

---

### **Request Headers**
| Header            | Value               | Required | Description                  |
|--------------------|---------------------|----------|------------------------------|
| `Content-Type`    | `application/json`  | Yes      | Specifies the request body format. |

---

### **Request Body**
| Field                | Type     | Required | Description                                                      |
|-----------------------|----------|----------|------------------------------------------------------------------|
| `email`              | String   | Yes      | The email of the captain (must be a valid email format).         |
| `fullname.firstname` | String   | Yes      | The first name of the captain (minimum 3 characters).            |
| `fullname.lastname`  | String   | Yes      | The last name of the captain.                                    |
| `password`           | String   | Yes      | The password for the captain (minimum 6 characters).             |
| `vehicle.color`      | String   | Yes      | The color of the vehicle (minimum 3 characters).                 |
| `vehicle.plate`      | String   | Yes      | The license plate of the vehicle (minimum 3 characters).         |
| `vehicle.capacity`   | Number   | Yes      | The seating capacity of the vehicle (must be a valid number).    |
| `vehicle.vehicleType`| Enum     | Yes      | The type of vehicle (`car`, `motorcycle`, or `auto`).            |

#### **Request Body Example**
```json
{
  "email": "captain@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "password": "securepassword",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
### **Response**
| Field      | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| `status`   | String   | Indicates the success or failure of the registration. |
| `message`  | String   | Provides additional information about the registration status. |
| `data`     | Object   | Contains captain details if registration is successful. |

#### **Response Example**
```json
{
  "status": "success",
  "message": "Captain registered successfully",
  "data": {
    "id": "67890",
    "email": "captain@example.com",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "vehicle": {
      "color": "Red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```



























