from  app.schemas.user import UserCreate, TokenSchema, UserRead
from app.models.user import Users, TokenTable
from fastapi import Depends, HTTPException, Form, status
from sqlalchemy.orm import Session
from app.database import get_session
from fastapi import APIRouter
from app.crud.user import get_user_by_email
from app.auth.utils import get_hashed_password
from app.auth.utils import create_access_token,create_refresh_token,verify_password,get_hashed_password
from app.crud.user import(
    get_user_by_email,
    get_indoor_patients,
) 
from typing import List


router = APIRouter()

@router.post("/register", response_model=UserCreate)
async def register_user(
    session: Session = Depends(get_session), 
    name:str = Form(...),
    city:str = Form(...), 
    age:int = Form(...), 
    gender:str = Form(...), 
    contact:str = Form(...),
    designation = Form(...), 
    email:str = Form(...), 
    password:str = Form(...)
):
    
    existing_user = get_user_by_email(session, email)
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    encrypted_password =get_hashed_password(password)

    new_user = Users(name=name, city=city, age=age, gender=gender, contact=contact, designation=designation, email=email, hashed_password=encrypted_password)

    session.add(new_user)
    session.commit()
    session.refresh(new_user)
    return new_user


@router.post('/login' ,response_model=TokenSchema)
async def login(
    session = Depends(get_session),
    email:str = Form(...),
    password:str = Form(...), 
):
    
    user = get_user_by_email(session, email)
    if not user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Incorrect email")
    
    hashed_pass = user.hashed_password
    if not verify_password(password, hashed_pass):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Incorrect password")
    
    access=create_access_token(user.id)
    refresh = create_refresh_token(user.id)

    token_db = TokenTable(user_id=user.id,  access_toke=access,  refresh_toke=refresh, status=True)
    session.add(token_db)
    session.commit()
    session.refresh(token_db)
    return {
        "access_token": access,
        "refresh_token": refresh,
        "data": user,
    }

@router.get("/get indoor patient", response_model=List[UserRead])
async def getIndoorPatient(
    session = Depends(get_session),
):
    users = get_indoor_patients(session)
    if not users:
        raise HTTPException(status_code=200, detail="No indoor patient")
    return users
