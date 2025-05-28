# Sales Pro API

A modern NestJS-based API for managing sales, leads, and deals with team collaboration features.

## Features

- User authentication and authorization
- Team management
- Lead tracking
- Deal pipeline management
- Deal stages and status tracking

## Tech Stack

- NestJS
- PostgreSQL
- Prisma ORM
- JWT Authentication
- TypeScript

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL
- npm or yarn

## Development Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd sales-pro-new-api
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/sales_pro_db"
JWT_SECRET="your-secret-key"
```

4. Run database migrations:
```bash
npx prisma migrate dev
```

5. Start the development server:
```bash
npm run start:dev
```

The API will be available at `http://localhost:3000`

## Database Migrations

### Creating a new migration

1. Make changes to the Prisma schema in `prisma/schema.prisma`
2. Generate the migration:
```bash
npx prisma migrate dev --name your_migration_name
```

### Applying migrations in production

```bash
npx prisma migrate deploy
```

### Resetting the database (development only)

```bash
npx prisma migrate reset
```

## API Endpoints

### Authentication

- `POST /auth/signup` - Register a new user
- `POST /auth/login` - Login user
- `GET /auth/me` - Get current user info

### Teams

- `GET /teams` - List all teams
- `POST /teams` - Create a new team
- `GET /teams/:id` - Get team details
- `PATCH /teams/:id` - Update team
- `DELETE /teams/:id` - Delete team

### Leads

- `GET /leads` - List all leads
- `POST /leads` - Create a new lead
- `GET /leads/:id` - Get lead details
- `PATCH /leads/:id` - Update lead
- `DELETE /leads/:id` - Delete lead

### Deals

- `GET /deals` - List all deals
- `POST /deals` - Create a new deal
- `GET /deals/:id` - Get deal details
- `PATCH /deals/:id` - Update deal
- `DELETE /deals/:id` - Delete deal

## Development Commands

- `npm run start:dev` - Start development server with hot reload
- `npm run build` - Build the application
- `npm run start:prod` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests
- `npm run test:e2e` - Run end-to-end tests

## Project Structure

```
src/
├── auth/           # Authentication related code
├── teams/          # Team management
├── leads/          # Lead management
├── deals/          # Deal management
├── deal-stages/    # Deal stage management
├── decorators/     # Custom decorators
├── jwt-auth/       # JWT authentication
└── main.ts         # Application entry point
```

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Run tests and ensure they pass
4. Submit a pull request

## License

This project is private and unlicensed.
