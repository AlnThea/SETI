# 🚀 SETI Knowledge & Impact Hub - Installation Guide

Complete step-by-step installation guide for setting up the SETI Knowledge & Impact Hub on your local machine.

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [System Requirements](#system-requirements)
3. [Installation Steps](#installation-steps)
4. [Database Setup](#database-setup)
5. [Environment Configuration](#environment-configuration)
6. [Running the Application](#running-the-application)
7. [Troubleshooting](#troubleshooting)
8. [Next Steps](#next-steps)

---

## ✅ Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software

| Software | Minimum Version | Download Link |
|----------|----------------|---------------|
| Node.js | 18.17.0+ | [nodejs.org](https://nodejs.org/) |
| npm | 9.0.0+ | Included with Node.js |
| Git | 2.0.0+ | [git-scm.com](https://git-scm.com/) |

### Optional (Recommended)

- **pnpm** (faster than npm): `npm install -g pnpm`
- **yarn** (alternative): `npm install -g yarn`
- **VS Code**: [code.visualstudio.com](https://code.visualstudio.com/)

### Required Accounts (Free Tier)

1. **Supabase Account** - For PostgreSQL database
   - Sign up: [supabase.com](https://supabase.com)
   - Free tier: Unlimited API requests, 500MB database

2. **Google Gemini API Key** - For AI features
   - Get API key: [makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)
   - Free tier: 60 requests/minute, 1500 requests/day

---

## 💻 System Requirements

### Minimum Requirements
- **OS:** Windows 10/11, macOS 10.15+, or Linux
- **RAM:** 4GB
- **Storage:** 2GB free space
- **Internet:** Stable connection for API calls

### Recommended Requirements
- **OS:** Windows 11, macOS 12+, or Ubuntu 20.04+
- **RAM:** 8GB or more
- **Storage:** 5GB free space
- **Internet:** High-speed connection

---

## 📥 Installation Steps

### Step 1: Verify Prerequisites

Open your terminal and verify installations:

```bash
# Check Node.js version (should be 18.17.0 or higher)
node --version

# Check npm version (should be 9.0.0 or higher)
npm --version

# Check Git version
git --version
```

**Expected Output:**
```
v18.17.0 (or higher)
9.0.0 (or higher)
git version 2.x.x
```

---

### Step 2: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/yourusername/seti-knowledge-hub.git

# Navigate to project directory
cd seti-knowledge-hub

# Verify you're in the correct directory
pwd
```

**Expected Output:**
```
/path/to/seti-knowledge-hub
```

---

### Step 3: Install Dependencies

Choose one of the following package managers:

#### Using npm (Default)
```bash
npm install
```

#### Using pnpm (Faster)
```bash
pnpm install
```

#### Using yarn
```bash
yarn install
```

**Installation Time:** 2-5 minutes depending on your internet speed

**Expected Output:**
```
added 1234 packages in 3m
```

---

## 🗄️ Database Setup

### Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click **"New Project"**
3. Fill in project details:
   - **Name:** `seti-knowledge-hub`
   - **Database Password:** Create a strong password (save it!)
   - **Region:** Choose closest to you
4. Click **"Create new project"**
5. Wait 2-3 minutes for setup

### Step 2: Get Database Connection String

1. In Supabase dashboard, go to **Settings** → **Database**
2. Scroll to **Connection string** section
3. Select **"URI"** tab
4. Copy the connection string
5. Replace `[YOUR-PASSWORD]` with your database password

**Example:**
```
postgresql://postgres:[YOUR-PASSWORD]@db.xxxxxxxxxxxxx.supabase.co:5432/postgres
```

### Step 3: Setup Prisma

```bash
# Generate Prisma Client
npx prisma generate

# Push database schema
npx prisma db push

# Seed database with sample data
npx prisma db seed
```

**Expected Output:**
```
✔ Generated Prisma Client
✔ Database schema pushed
✔ Database seeded with sample data
```

---

## ⚙️ Environment Configuration

### Step 1: Create Environment File

```bash
# Copy example environment file
cp .env.example .env.local

# Or create manually
touch .env.local
```

### Step 2: Configure Environment Variables

Open `.env.local` in your text editor and add:

```env
# ==============================================
# DATABASE CONFIGURATION
# ==============================================
# Get this from Supabase Dashboard → Settings → Database → Connection String
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.xxxxxxxxxxxxx.supabase.co:5432/postgres"

# ==============================================
# GEMINI AI CONFIGURATION
# ==============================================
# Get your API key from: https://makersuite.google.com/app/apikey
GEMINI_API_KEY="your-gemini-api-key-here"

# ==============================================
# APPLICATION CONFIGURATION
# ==============================================
# Local development URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# ==============================================
# OPTIONAL: AUTHENTICATION (if using NextAuth)
# ==============================================
# NEXTAUTH_URL="http://localhost:3000"
# NEXTAUTH_SECRET="generate-a-random-secret-here"

# ==============================================
# OPTIONAL: ANALYTICS (if using Vercel Analytics)
# ==============================================
# NEXT_PUBLIC_VERCEL_ANALYTICS_ID="your-analytics-id"
```

### Step 3: Get Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Click **"Create API Key"**
3. Select **"Create API key in new project"**
4. Copy the generated API key
5. Paste it in `.env.local` as `GEMINI_API_KEY`

### Step 4: Verify Environment Variables

```bash
# Check if .env.local exists
ls -la | grep .env.local

# Verify file content (be careful not to share this!)
cat .env.local
```

---

## 🏃 Running the Application

### Development Mode

```bash
# Start development server
npm run dev

# Or with pnpm
pnpm dev

# Or with yarn
yarn dev
```

**Expected Output:**
```
▲ Next.js 15.0.0
- Local:        http://localhost:3000
- Network:      http://192.168.1.x:3000

✓ Ready in 2.3s
```

### Open in Browser

1. Open your browser
2. Navigate to: `http://localhost:3000`
3. You should see the SETI homepage

### Production Build (Testing)

```bash
# Build for production
npm run build

# Start production server
npm run start
```

---

## 🔧 Troubleshooting

### Common Issues and Solutions

#### Issue 1: Node.js Version Error
```
Error: The engine "node" is incompatible with this module
```

**Solution:**
```bash
# Update Node.js to version 18+
# Download from: https://nodejs.org/

# Or use nvm (Node Version Manager)
nvm install 18
nvm use 18
```

---

#### Issue 2: Database Connection Failed
```
Error: Can't reach database server
```

**Solution:**
1. Check your internet connection
2. Verify `DATABASE_URL` in `.env.local`
3. Ensure Supabase project is active
4. Check if password contains special characters (escape them)

```bash
# Test database connection
npx prisma db pull
```

---

#### Issue 3: Gemini API Error
```
Error: Invalid API key
```

**Solution:**
1. Verify `GEMINI_API_KEY` in `.env.local`
2. Check if API key is active in [Google AI Studio](https://makersuite.google.com/app/apikey)
3. Ensure no extra spaces in the key
4. Try generating a new API key

---

#### Issue 4: Port Already in Use
```
Error: Port 3000 is already in use
```

**Solution:**
```bash
# Option 1: Kill process on port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9

# Option 2: Use different port
npm run dev -- -p 3001
```

---

#### Issue 5: Module Not Found
```
Error: Cannot find module 'xyz'
```

**Solution:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Or clear npm cache
npm cache clean --force
npm install
```

---

#### Issue 6: Prisma Client Not Generated
```
Error: @prisma/client did not initialize yet
```

**Solution:**
```bash
# Generate Prisma Client
npx prisma generate

# If still fails, reinstall
npm install @prisma/client
npx prisma generate
```

---

### Getting Help

If you encounter issues not listed here:

1. **Check the logs** - Look for error messages in terminal
2. **Search GitHub Issues** - Someone might have faced the same issue
3. **Ask for help** - Create a new issue with:
   - Error message
   - Steps to reproduce
   - Your environment (OS, Node version, etc.)

---

## 🎯 Next Steps

After successful installation:

### 1. Explore the Application
- Browse the homepage
- Try the search functionality
- Explore different themes
- Check the project repository

### 2. Review Documentation
- Read [DOCUMENTATION.md](DOCUMENTATION.md) for technical details
- Check [PLANNING.md](PLANNING.md) for project roadmap
- Review [TASKS.md](TASKS.md) for development tasks

### 3. Start Development
- Create a new branch: `git checkout -b feature/your-feature`
- Make changes
- Test locally
- Commit and push

### 4. Optional: Setup Development Tools

#### VS Code Extensions (Recommended)
```
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- Prisma
- GitLens
```

#### Install Extensions
```bash
# Open VS Code
code .

# Install recommended extensions
# VS Code will prompt you to install workspace recommendations
```

---

## 📚 Additional Resources

### Official Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Gemini API Docs](https://ai.google.dev/docs)

### Video Tutorials
- [Next.js 15 Tutorial](https://www.youtube.com/results?search_query=nextjs+15+tutorial)
- [Prisma Setup Guide](https://www.youtube.com/results?search_query=prisma+setup)
- [Tailwind CSS Crash Course](https://www.youtube.com/results?search_query=tailwind+css+crash+course)

### Community
- [Next.js Discord](https://discord.gg/nextjs)
- [Prisma Discord](https://discord.gg/prisma)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

---

## ✅ Installation Checklist

Use this checklist to verify your installation:

- [ ] Node.js 18+ installed
- [ ] Git installed
- [ ] Repository cloned
- [ ] Dependencies installed (`npm install`)
- [ ] Supabase project created
- [ ] Database connection string obtained
- [ ] `.env.local` file created
- [ ] Environment variables configured
- [ ] Gemini API key obtained and added
- [ ] Prisma client generated (`npx prisma generate`)
- [ ] Database schema pushed (`npx prisma db push`)
- [ ] Database seeded (`npx prisma db seed`)
- [ ] Development server running (`npm run dev`)
- [ ] Application accessible at `http://localhost:3000`
- [ ] No console errors in browser
- [ ] Homepage loads correctly

---

## 🎉 Success!

If you've completed all steps and the application is running, congratulations! 🎊

You're now ready to:
- Explore the codebase
- Start developing features
- Contribute to the project
- Deploy to production

---

**Need Help?** Open an issue on [GitHub](https://github.com/yourusername/seti-knowledge-hub/issues)

**Last Updated:** 2026-06-17