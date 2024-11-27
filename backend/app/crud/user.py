from app.models.user import Users

def get_user_by_email(session, email):
    user = session.query(Users).where(email==Users.email).first()
    return user