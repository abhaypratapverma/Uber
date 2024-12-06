
# Backend API Documentation

## User Endpoints

### User Registration Endpoint

**Method:** `POST /user/register`

#### Description

This endpoint allows new users to register by providing their first name, last name, email, and password. The password is securely hashed before storing it in the database.

#### Request Body

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

#### Response

The response will be a JSON object:

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

---

### User Login Endpoint

**Method:** `POST /user/login`

#### Description

Allows users to log in with their email and password. A token is generated upon successful login.

#### Request Body

```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

#### Response

```json
{
  "status": "success",
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

### User Profile Endpoint

**Method:** `GET /user/profile`

#### Description

Retrieves the profile information of the authenticated user.

#### Headers

- **Authorization**: Bearer token.

#### Response

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

---

### User Logout Endpoint

**Method:** `POST /user/logout`

#### Description

Logs out the user by invalidating their authentication token.

#### Response

```json
{
  "status": "success",
  "message": "Logout successful"
}
```

---

## Captain Endpoints

### Captain Registration Endpoint

**Method:** `POST /captain/register`

#### Description

Registers a new captain with their details.

#### Request Body

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
```

#### Response

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

---

### Captain Login Endpoint

**Method:** `POST /captain/login`

#### Description

Allows a captain to log in with their email and password.

#### Request Body

```json
{
  "email": "captain@example.com",
  "password": "securepassword"
}
```

#### Response

```json
{
  "status": "success",
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

### Captain Profile Endpoint

**Method:** `GET /captain/profile`

#### Description

Retrieves the profile information of the authenticated captain.

#### Headers

- **Authorization**: Bearer token.

#### Response

```json
{
  "id": "67890",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "captain@example.com",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

---

### Captain Logout Endpoint

**Method:** `POST /captain/logout`

#### Description

Logs out the captain by invalidating their authentication token.

#### Response

```json
{
  "status": "success",
  "message": "Logout successful"
}
```
