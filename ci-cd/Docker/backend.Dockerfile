# Use the official Python image
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Copy requirements and install dependencies
COPY backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY backend/ ./

# Expose port 5000
EXPOSE 5000

# Run the application
CMD ["uvicorn", "src.app:app", "--host", "0.0.0.0", "--port", "5000"]
