# NLW Agents

A backend server project developed during the NLW (Next Level Week) event by Rocketseat. This project implements a REST API using modern TypeScript technologies and follows best practices for database management and API development.

## 🚀 Technologies

- **Runtime**: Node.js with TypeScript
- **Framework**: Fastify (high-performance web framework)
- **Database**: PostgreSQL with pgvector extension
- **ORM**: Drizzle ORM
- **Validation**: Zod schema validation
- **Code Quality**: Biome (formatter and linter)
- **Containerization**: Docker & Docker Compose

## 📋 Prerequisites

- Node.js 18+ 
- Docker and Docker Compose
- Git

## 🛠️ Setup Instructions

### 1. Clone the repository
```bash
git clone <repository-url>
cd server
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory:
```env
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
```

### 4. Start the database
```bash
docker-compose up -d
```

### 5. Run database migrations
```bash
npx drizzle-kit push
```

### 6. Seed the database (optional)
```bash
npm run db:seed
```

### 7. Start the development server
```bash
npm run dev
```

The server will be available at `http://localhost:3333`

## 📁 Project Structure

```
src/
├── db/
│   ├── connection.ts      # Database connection
│   ├── migrations/        # Database migrations
│   ├── schema/           # Database schema definitions
│   └── seed.ts           # Database seeding
├── http/
│   └── routes/           # API routes
├── env.ts                # Environment configuration
└── server.ts             # Main server file
```

## 🎯 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run start` - Start production server
- `npm run db:seed` - Seed the database with initial data

## 🔧 API Endpoints

- `GET /health` - Health check endpoint
- `GET /rooms` - Get rooms (implemented in routes)

## 🐳 Docker

The project includes Docker Compose configuration for PostgreSQL with pgvector extension:

```bash
# Start database
docker-compose up -d

# Stop database
docker-compose down
```

## 📝 Development

This project uses:
- **Biome** for code formatting and linting
- **TypeScript** for type safety
- **Zod** for runtime validation
- **Drizzle ORM** for type-safe database operations

## 🎓 About

This project was developed during the NLW (Next Level Week) event by Rocketseat, focusing on modern backend development practices with TypeScript and Node.js. 