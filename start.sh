#!/bin/bash

# Portfolio Quick Start Script

echo "🚀 Starting Arnab Mukherjee's Portfolio..."
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

echo "✅ Starting development server..."
echo "📝 Increasing file descriptor limit (fixes macOS watcher errors)..."
ulimit -n 10240
npm run dev

