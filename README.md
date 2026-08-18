# SeguiPro

![SeguiPro Preview](https://via.placeholder.com/1200x630/0A0A0B/FF5A1F?text=SeguiPro+Premium+Digital+Agency)

**SeguiPro** is a premium, cinematic marketing website built for a digital agency offering high-end Instagram growth, web development, and digital marketing services. The project is designed with an emphasis on high-performance animations, fluid typography, and a sophisticated dark-mode aesthetic.

## ✨ Key Features

- **Cinematic UI/UX:** A sleek, dark-themed design with vibrant orange accents (`#FF5A1F`), glassmorphism effects, and highly art-directed layouts.
- **Lenis Smooth Scrolling:** Implements Studio Freight's Lenis for buttery-smooth vertical scrolling, perfectly synced with intersection observers and parallax elements.
- **Dynamic Quote System:** Features a smart, progressive disclosure form powered by `EmailJS` that adapts questions based on the selected service (Instagram, Web, etc.).
- **Awwwards-Level Testimonials:** A completely custom, asymmetrical testimonial grid featuring massive portraits, scroll-triggered entrance animations, and mouse-follow 3D parallax effects.
- **Performant Animations:** Uses CSS hardware-accelerated transforms (`translate3d`) and `requestAnimationFrame` for stutter-free micro-interactions.

## 🛠 Tech Stack

- **Framework:** React + Vite
- **Styling:** Vanilla CSS Modules with root variables and BEM-inspired architecture
- **Scroll Engine:** [Lenis](https://lenis.studiofreight.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Form Handling:** [EmailJS](https://www.emailjs.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/seguipro.git
   cd seguipro
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Copy the example environment file and fill in your EmailJS credentials:
   ```bash
   cp .env.example .env
   ```
   *Required variables:*
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## 📂 Project Structure

```
seguipro/
├── public/                 # Static assets (logo, favicon, etc.)
├── src/
│   ├── components/         # Modular React UI components
│   │   ├── Navbar.jsx      # Sticky navigation & mobile menu
│   │   ├── Hero.jsx        # Premium hero section
│   │   ├── QuoteForm.jsx   # Dynamic EmailJS integration
│   │   ├── Testimonials.jsx# Cinematic parallax testimonials
│   │   └── ...
│   ├── hooks/
│   │   └── useScrollReveal.js # Custom IntersectionObserver hook
│   ├── App.jsx             # Main routing & Lenis provider
│   ├── index.css           # Global tokens & utility classes
│   └── main.jsx            # Entry point
├── .env.example            # EmailJS environment template
└── package.json
```

## 🎨 Design System

The project relies heavily on a centralized design token system defined in `index.css`:
- **Backgrounds:** `#050505`, `#0A0A0B` (Dark cinematic base)
- **Accents:** `#FF5A1F` (Electric Orange gradient)
- **Typography:** `Inter` (sans-serif) and `Playfair Display` (editorial italic serif)

## 📄 License

This project is proprietary. All rights reserved by SeguiPro.
