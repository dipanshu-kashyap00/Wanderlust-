# 🌍 Wanderlust

A full-stack travel listing web application inspired by Airbnb, where users can explore, create, and review travel stays from around the world.

🔗 **Live Demo**: [https://wanderlust-8ybi.onrender.com](https://wanderlust-8ybi.onrender.com)

---

## 📸 Screenshots

> Home page showing all listings, individual listing details, and user authentication.

---

## 🚀 Features

- 🏠 Browse 50+ travel listings from around the world
- 🔐 User authentication (Register / Login / Logout)
- ➕ Create, Edit, and Delete your own listings
- ⭐ Add and delete reviews on listings
- 🖼️ Image upload via Cloudinary
- 🗺️ Location-based listing display
- 📦 Session-based authentication with Passport.js
- ☁️ MongoDB Atlas for cloud database storage
- 🔒 Authorization — only owners can edit/delete their listings

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Backend** | Node.js, Express.js |
| **Frontend** | EJS, EJS-Mate, Bootstrap |
| **Database** | MongoDB, Mongoose |
| **Cloud DB** | MongoDB Atlas |
| **Authentication** | Passport.js, passport-local-mongoose |
| **File Upload** | Multer, Cloudinary |
| **Session Store** | connect-mongo |
| **Validation** | Joi |
| **Deployment** | Render |

---

## 📁 Project Structure

```
Wanderlust/
├── controllers/        # Route controllers
├── models/             # Mongoose models
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── routes/             # Express routes
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── views/              # EJS templates
│   ├── listings/
│   ├── users/
│   └── layouts/
├── public/             # Static assets (CSS, JS)
├── utils/              # Utility functions
├── init/               # Database initialization
│   ├── index.js
│   └── data.js
├── cloudConfig.js      # Cloudinary configuration
├── middleware.js       # Custom middleware
├── schema.js           # Joi validation schemas
└── app.js              # Main application file
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v20+
- MongoDB installed locally
- Cloudinary account
- MongoDB Atlas account

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/dipanshu-kashyap00/Wanderlust-.git
cd Wanderlust-
```

2. **Install dependencies**
```bash
npm install
```

3. **Create a `.env` file** in the root directory
```env
ATLASDB_URL=your_mongodb_atlas_url
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
SECRET_KEY=your_session_secret
NODE_ENV=development
```

4. **Initialize the database** with sample data
```bash
node init/index.js
```

5. **Start the server**
```bash
node app.js
```

6. **Open your browser**
```
http://localhost:8080/listings
```

---

## 🌐 Environment Variables

| Variable | Description |
|---|---|
| `ATLASDB_URL` | MongoDB Atlas connection string |
| `CLOUD_NAME` | Cloudinary cloud name |
| `CLOUD_API_KEY` | Cloudinary API key |
| `CLOUD_API_SECRET` | Cloudinary API secret |
| `SECRET_KEY` | Session secret key |
| `NODE_ENV` | Environment (development/production) |

---

## 📦 Dependencies

```json
{
  "cloudinary": "^2.10.0",
  "connect-flash": "^0.1.1",
  "connect-mongo": "^6.0.0",
  "ejs": "^5.0.2",
  "ejs-mate": "^4.0.0",
  "express": "^5.2.1",
  "express-session": "^1.19.0",
  "joi": "^18.1.2",
  "mongoose": "^9.6.2",
  "multer": "^2.1.1",
  "passport": "^0.7.0",
  "passport-local": "^1.0.0",
  "passport-local-mongoose": "^9.1.0"
}
```

---

## 🔐 Authentication Flow

1. User registers with username, email, and password
2. Password is hashed using passport-local-mongoose
3. Session is stored in MongoDB via connect-mongo
4. Protected routes check if user is authenticated
5. Authorization checks if user owns the listing/review

---

## 🚀 Deployment

This app is deployed on **Render** with:
- **MongoDB Atlas** for database
- **Cloudinary** for image storage
- **Auto-deploy** on every GitHub push

---

## 👨‍💻 Author

**Dipanshu Kashyap**
- GitHub: [@dipanshu-kashyap00](https://github.com/dipanshu-kashyap00)

---

## 📄 License

This project is licensed under the ISC License.

---

⭐ **If you like this project, give it a star!**
