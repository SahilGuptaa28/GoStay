# 🏨 GoStay

**GoStay** is a **full-stack hotel booking web application** that enables users to search, book, and pay for hotel rooms online.  
It features **real-time availability**, **Stripe payment integration**, **Clerk authentication**, and an **admin dashboard** for hotel owners. Fully responsive and production-ready, GoStay ensures a seamless hotel booking experience.

---

## 🌐 Live Demo
- [Try GoStay Live](https://gostay-orcin.vercel.app)

---

## 🏆 Features

### User Features
- 🔐 Secure authentication with [Clerk](https://clerk.com)  
- 🏙️ Search hotels by city with destination dropdown  
- 📅 Book rooms with check-in/check-out validation  
- 💳 Stripe payment integration with real-time payment status  
- 🧾 "My Bookings" page to view past, current, and upcoming reservations  
- 📧 Email confirmations after successful bookings  
- 🕓 Tracks recent searches (up to 4 cities)  
- 📱 Fully responsive UI for all devices

### Admin / Hotel Owner Features
- 🏨 Add, edit, and delete hotel rooms  
- 🧾 Manage bookings and payment records  
- 🖼️ Upload hotel images using Cloudinary  
- 📊 Dashboard analytics for bookings and revenue  

---

## 🧰 Tech Stack

| Category | Technologies |
|----------|--------------|
| Frontend | React, Vite, Tailwind CSS, Context API, Axios |
| Backend  | Node.js, Express.js, MongoDB, Mongoose |
| Authentication | Clerk |
| Payment | Stripe |
| Image Hosting | Cloudinary |
| Email | NodeMailer |
| Deployment | Vercel |

---

## 💳 Payment Flow
1. User clicks **"Pay Now"** → Stripe Checkout opens.  
2. Stripe sends a webhook event to the backend after successful payment.  
3. Backend verifies the event → Updates booking status to **Paid**.  
4. Frontend reflects updated payment status in **My Bookings**.

---

## ☁️ Cloudinary Integration
- All hotel images are uploaded via Cloudinary API.  
- Image URLs are linked with room documents in MongoDB.

---

## 📧 Email Notifications
- Sends booking confirmation emails using **NodeMailer**.  
- Email contains booking details and payment confirmation.

---

## 🔮 Future Enhancements  
- 🎫 Discount coupons  
- 🧳 Wishlist / Favorites  
- 🌐 Multi-language support  
- 📱 Progressive Web App (PWA)  
- 🔔 Push notifications  

---

## ❤️ Acknowledgments
- [Clerk](https://clerk.com) – Authentication  
- [Stripe](https://stripe.com) – Payment processing  
- [Cloudinary](https://cloudinary.com) – Image hosting  
- [Vercel](https://vercel.com) – Deployment  
- Tailwind CSS, React, Node.js, MongoDB community
