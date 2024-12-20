from fastapi import APIRouter
from app.core import *
from app.api import (
    user
)

api_router = APIRouter()

api_router.include_router(user.router, tags=["Users"])
