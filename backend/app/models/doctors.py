from sqlalchemy import Column, Integer, String, DateTime,Boolean,LargeBinary
from app.database import Base
import datetime


class Doctors:
    __tablename__='doctors'
    
    id=Column(Integer,primary_key=True,index=True)
    ProfilePicture=Column(LargeBinary)
    Rating=Column(Integer,nullable=False)
    Name=Column(String,nullable=False)
    Specialization=Column(String,nullable=False)
    Qualifications=Column(String,nullable=False)
    AvailabilityTime=Column(String,nullable=False)
    AvailabilityDays=Column(String,nullable=False)