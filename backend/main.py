from app.core.factory import create_app
import uvicorn

app = create_app()
from fastapi.middleware.cors import CORSMiddleware


# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React's development server
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

if __name__ == "__main__":

    uvicorn.run(
        "main:app",
        host="127.0.0.1",
        reload=True,
        port=8000,
    )