from  app.schemas.user import UserCreate
from app.models.user import Users
from fastapi import Depends, HTTPException, Form
from sqlalchemy.orm import Session
from app.database import get_session
from fastapi import APIRouter
from app.crud.user import get_user_by_email
from app.auth.utils import get_hashed_password


router = APIRouter()

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