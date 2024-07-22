#!/bin/bash

# Exit script on error
set -e

echo "Running database migrations..."

# Run migrations using Prisma
npx prisma migrate deploy

echo "Database migrations completed."
