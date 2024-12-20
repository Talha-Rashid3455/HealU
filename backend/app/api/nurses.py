# from fastapi import FastAPI, File, UploadFile, Form, Depends
# from sqlalchemy import Column, Integer, String, Float, LargeBinary, Text
# from sqlalchemy.orm import declarative_base, sessionmaker,session as SessionLocal 
# from sqlalchemy import create_engine
# from typing import List
# import json
# from fastapi import APIRouter 
# from app.database import get_session
# from app.crud.user import get_user_by_email
# from app.database import get_session as get_db
# from app.auth.utils import get_hashed_password
# from app.models import nurses
# from sqlalchemy.orm import Session
# from app.database import SessionLocal as session
# from app.models.user import Users

# nurse_router=APIRouter(prefix="/nurses",tags=["Nurse"])

# @nurse_router.get("/get_data")
# async def get_data(session: Session = Depends(get_session)):
#     users=session.query(Users).all()
#     return users