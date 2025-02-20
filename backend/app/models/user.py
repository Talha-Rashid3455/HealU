from sqlalchemy import Column, Integer, String, DateTime,Boolean,LargeBinary
from ..database import Base
import datetime




# class Users(Base):
#     __tablename__ = 'users'

#     id = Column(Integer, primary_key=True, index=True)
#     name = Column(String, nullable=False)
#     city = Column(String, nullable=False)
#     age = Column(Integer, nullable=False)
#     gender = Column(String, nullable=False)
#     contact = Column(String, nullable=False)
#     designation = Column(String, nullable=False)
#     email = Column(String, unique=True, index=True, nullable=False)
#     hashed_password = Column(String, nullable=False)

class Users(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    city = Column(String, nullable=False)
    age = Column(Integer, nullable=False)
    gender = Column(String, nullable=False)
    contact = Column(String, nullable=False)
    designation = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    profilepicture = Column(LargeBinary, nullable=True)
    rating = Column(Integer, nullable=True)
    specialization = Column(String, nullable=True)
    qualifications = Column(String, nullable=True)
    availabilitytime = Column(String, nullable=True)
    availabilitydays = Column(String, nullable=True)
    treatable_diseases = Column(String, nullable=True)



class TokenTable(Base):
    __tablename__ = "token"
    user_id = Column(Integer)
    access_toke = Column(String(450), primary_key=True)
    refresh_toke = Column(String(450),nullable=False)
    status = Column(Boolean)
    created_date = Column(DateTime, default=datetime.datetime.now)