# Use official lightweight Python image
FROM python:3.11-slim

# Set working directory inside container
WORKDIR /app

# Copy project files (app.py and requirements.txt)
COPY . .

# Install Python dependencies
RUN pip install -r requirements.txt

# Expose port 6000 for Flask
EXPOSE 6000

# Run Flask app
CMD ["python", "app.py"]
