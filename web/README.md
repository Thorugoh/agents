# NLW Agents

A modern web application built during the **NLW (Next Level Week)** event by Rocketseat. This project demonstrates the implementation of a real-time collaborative application using cutting-edge web technologies.

## 🚀 Technologies

### Core Framework
- **React 19** - Latest version of React with concurrent features
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server

### UI & Styling
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful & consistent icon toolkit
- **Class Variance Authority** - Type-safe component variants

### State Management & Data Fetching
- **TanStack Query** - Powerful data synchronization library
- **React Router DOM** - Client-side routing

### Development Tools
- **Biome** - Fast formatter and linter
- **Ultracite** - Enhanced development experience

## 📁 Project Structure

```
src/
├── components/
│   └── ui/          # shadcn/ui components
├── lib/
│   └── utils.ts     # Utility functions
├── pages/
│   ├── create-room.tsx
│   └── room.tsx
├── app.tsx          # Main application component
└── main.tsx         # Application entry point
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎯 Features

- **Real-time collaboration** - Multi-user room system
- **Modern UI/UX** - Clean and responsive design
- **Type safety** - Full TypeScript implementation
- **Performance optimized** - Built with Vite for fast development and builds

## 🏗️ Architecture Patterns

- **Component-based architecture** with React
- **Route-based code splitting** with React Router
- **State management** with TanStack Query for server state
- **Utility-first styling** with Tailwind CSS
- **Accessible components** with Radix UI primitives

## 📝 Development Guidelines

- Use TypeScript for all new code
- Follow the existing component structure
- Utilize shadcn/ui components for consistency
- Implement proper error boundaries and loading states
- Maintain accessibility standards

---

**Built during NLW by Rocketseat** 