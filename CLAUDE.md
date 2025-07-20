# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a typing practice game inspired by e-typing, designed as a full-stack web application. The project is in its initial phase and currently contains only documentation files.

## Planned Architecture

- **Frontend**: React SPA with TailwindCSS, TanStack Router, and TanStack Query
- **Backend**: Cloudflare Workers with tRPC for API endpoints
- **Database**: Drizzle ORM (instead of Prisma due to size constraints)
- **Deployment**: Cloudflare Workers for both frontend and API

## Key Features (Planned)

1. **Authentication System**: Email/password registration and login
2. **Typing Practice**: 15-word random questions from uploaded word datasets
3. **Practice Results**: Detailed metrics including WPM, accuracy, initial speed, RKPM
4. **Practice History**: Paginated history with detailed per-word statistics

## Development Phases

1. **Setup**: Create UI mockups, set up Cloudflare Workers project with tRPC
2. **Core Typing**: Implement typing practice functionality without persistence
3. **Database**: Add authentication, result persistence, and history APIs
4. **Polish**: Bug fixes and testing

## Word Data Source

The application will parse and use XML word files from e-typing (https://uaaaaaaaa.com/typing/word) for practice content.

## Project Status

This is a new project with only initial documentation. No code has been implemented yet - the repository contains only README.md and design.md files outlining the project requirements and technical approach.