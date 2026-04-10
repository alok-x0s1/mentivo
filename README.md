# Mentivo

An AI-powered learning partner matching platform that connects learners with compatible partners based on their learning goals and interests. Collaborate, chat, and grow together with AI-driven guidance and insights.

![Next.js](https://img.shields.io/badge/Next.js-16.1.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-cyan)
![Drizzle ORM](https://img.shields.io/badge/Drizzle-ORM-orange)
[![Vercel](https://img.shields.io/badge/Vercel-Portfolio-000000?logo=vercel&logoColor=white)](https://yalok.vercel.app)

## Features

- **Smart Partner Matching**: AI analyzes your goals, interests, and skill level to connect you with learners who are the right fit
- **Real-Time Conversations**: Chat seamlessly with your learning partners, share resources, schedule sessions, and stay connected
- **AI-Powered Summaries**: Receive intelligent summaries, key takeaways, and action items after every conversation
- **Goal Tracking**: Set learning objectives, monitor your progress, and stay focused on achieving meaningful milestones
- **Learning Communities**: Join communities built around shared interests, skills, and topics to learn alongside like-minded people
- **Subscription Tiers**: Flexible free and paid plans to suit different learning needs

## Tech Stack

### Frontend

- **Next.js 16** - React framework with App Router
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Reusable UI components built on Radix UI
- **Motion** - Animation library

### Backend & Database

- **Hono** - Lightweight web framework for API routes
- **Drizzle ORM** - Type-safe SQL toolkit
- **PostgreSQL (Neon)** - Serverless PostgreSQL database
- **Clerk** - Authentication and user management
- **TanStack Query** - Data fetching and state management

### AI & APIs

- **Vercel AI SDK** - AI integration framework
- **OpenAI GPT-4o-mini** - AI model for matching and summaries
- **@ai-sdk/openai** - OpenAI provider for AI SDK

### Development

- **Bun** - Fast JavaScript runtime and package manager
- **ESLint** - Code linting

## Prerequisites

- Node.js 18+ or Bun runtime
- PostgreSQL database (Neon recommended)
- Clerk account for authentication
- OpenAI API key for AI features

## Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/alok-x0s1/mentivo
    cd mentivo
    ```

2. **Install dependencies**

    ```bash
    bun install
    # or
    npm install
    ```

3. **Set up environment variables**

    Create a `.env` file in the root directory:

    ```env
    DATABASE_URL=your_postgresql_database_url
    CLERK_SECRET_KEY=your_clerk_secret_key
    CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    OPENAI_API_KEY=your_openai_api_key
    ```

4. **Set up the database**

    Generate database migrations:

    ```bash
    bun run db:generate
    ```

    Push the schema to your database:

    ```bash
    bun run db:push
    ```

    (Optional) Seed the database with sample data:

    ```bash
    bun run db:seed
    ```

5. **Run the development server**

    ```bash
    bun run dev
    # or
    npm run dev
    ```

6. **Open your browser**

    Navigate to [http://localhost:3000](http://localhost:3000)

## Database Schema

The application uses the following database tables:

- **users** - User profiles with Clerk integration and subscription tiers
- **communities** - Learning communities created by users
- **community_members** - Membership relationships between users and communities
- **learning_goals** - Learning goals set by users within communities
- **matches** - AI-generated matches between users in communities
- **conversations** - Chat conversations between matched users
- **messages** - Individual messages in conversations
- **conversation_summaries** - AI-generated summaries with action items and key points
- **newsletter_subscribers** - Newsletter subscription list

## Scripts

- `bun run dev` - Start the development server
- `bun run build` - Build the application for production
- `bun run start` - Start the production server
- `bun run lint` - Run ESLint
- `bun run db:generate` - Generate database migrations
- `bun run db:migrate` - Run database migrations
- `bun run db:push` - Push schema changes to database
- `bun run db:studio` - Open Drizzle Studio for database management
- `bun run db:seed` - Seed the database with sample data

## How It Works

1. **Join a Community** - Explore communities that align with your interests and learning objectives
2. **Set Your Goals** - Share what you're learning, your current skill level, and the goals you want to achieve
3. **Get Matched** - Our AI connects you with learners who have similar interests, goals, and learning paths
4. **Learn Together** - Chat, collaborate, schedule study sessions, and stay motivated while making progress together

## AI Features

### Smart Matching

The AI uses GPT-4o-mini to analyze learning goals and find compatible partners based on:

- Semantic similarity of learning goals
- Complementary skill levels
- Potential for mutual learning
- Common interests and learning paths

### Conversation Summaries

After conversations, AI generates:

- Concise summary of discussions
- Key points and insights
- Action items mentioned
- Next steps for learning partners

## API Routes

The application uses Hono for backend API routes:

- `/api/communities` - Community management
- `/api/conversations` - Chat conversations
- `/api/learning-goals` - Learning goal management
- `/api/matches` - Partner matching
- `/api/newsletter` - Newsletter subscriptions
- `/api/users` - User management

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Connect With Me

[![GitHub](https://img.shields.io/badge/GitHub-Alok%20Yadav-181717?logo=github)](https://github.com/alok-x0s1)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Alok%20Yadav-0A66C2?logo=linkedin&logoColor=white)](https://linkedin.com/in/alok-x0s1)
[![LinkedIn](https://img.shields.io/badge/Instagram-Alok%20Yadav-E4405F?logo=instagram&logoColor=white)](https://instagram.com/03aey)
