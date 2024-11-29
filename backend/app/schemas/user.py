from pydantic import BaseModel
import datetime

class UserRead(BaseModel):
    name : str
    email : str
    
class UserCreate(BaseModel):
    name : str
    age : int
    email : str
    contact : str


#For authentication
class requestdetails(BaseModel):
    email:str
    password:str
        
class TokenSchema(BaseModel):
    access_token: str
    refresh_token: str

class changepassword(BaseModel):
    email:str
    old_password:str
    new_password:str

class TokenCreate(BaseModel):
    user_id:str
    access_token:str
    refresh_token:str
    status:bool
    created_date:datetime.datetime