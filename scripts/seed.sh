#!/bin/bash

# Exit script on error
set -e

echo "Seeding the database..."

# Run seeding script
npx prisma db seed

echo "Database seeding completed."
