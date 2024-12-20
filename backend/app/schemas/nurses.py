from pydantic import BaseModel
from typing import Optional, List

class Nurses(BaseModel):    
    id: int 
    rating: float  # Assuming rating is a float value
    name: str
    specialization: str
    qualifications: List[str]  # List of qualifications
    availability_time: str  # Time range in a string format, e.g., "9 AM - 5 PM"
    availability_days: str  # List of available days, e.g., ["Monday", "Wednesday"]

    class Config:
        orm_mode = True  # Allows compatibility with SQLAlchemy models
