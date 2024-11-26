from pydantic import BaseModel


class UserRead(BaseModel):
    name : str
    email : str
    
class UserCreate(BaseModel):
    name : str
    age : int
    email : str
    contact : str