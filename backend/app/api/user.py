from  app.schemas.user import UserCreate
from app.models.user import Users
from fastapi import Depends, HTTPException, Form,File,UploadFile
from sqlalchemy.orm import Session,session as SessionLocal 
import json
from app.database import get_session
from fastapi import APIRouter 
from app.crud.user import get_user_by_email
from app.auth.utils import get_hashed_password
from app.database import get_session as get_db
from app.api.chatbot import loaded_model,all_symptoms
import numpy as np

router=APIRouter()

# user_router = APIRouter(prefix="/user",tags=["User"])


@router.post("/register", response_model=UserCreate)
async def register_user(
    session: Session = Depends(get_session), 
    name:str = Form(...),
    city:str = Form(...), 
    age:int = Form(...), 
    gender:str = Form(...), 
    contact:str = Form(...),
    designation:str = Form(...), 
    email:str = Form(...), 
    password:str = Form(...)
):
    
    existing_user = get_user_by_email(session, email)
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    encrypted_password =get_hashed_password(password)

    new_user = Users(
        name=name, 
        city=city, 
        age=age, 
        gender=gender, 
        contact=contact, 
        email=email, 
        designation = designation,
        hashed_password=encrypted_password)

    session.add(new_user)
    session.commit()
    session.refresh(new_user)

    return new_user

@router.get("/get_data")
async def register_user(
    session: Session = Depends(get_session)):
    users=session.query(Users).all()
    return users

@router.get("/nurse_data")
async def get_data(session: Session = Depends(get_session)):
    users=session.query(Users).filter(Users.designation=="Nurse").all()
    return users

@router.get("/doctor_data")
async def get_data(session: Session = Depends(get_session)):
    users=session.query(Users).filter(Users.designation=="Doctor").all()
    return users

@router.get("/doctor_data_specific_field")
async def get_data(session: Session = Depends(get_session)):
    users=session.query(Users).filter(Users.designation=="Doctor").all()
    return users

@router.get("/chatbot")
async def get_data(chat:str,session: Session = Depends(get_session)):
    print(chat)
    chat=chat.split()
    reported_symptoms = chat  
    print(all_symptoms)
    print(reported_symptoms)
    binary_vector = np.array([1 if symptom in reported_symptoms else 0 for symptom in all_symptoms])
    print(binary_vector)
    result=loaded_model.predict(
    np.array([binary_vector])
    )
    print(result)
    return {'result':result[0]}
