from django.urls import path
from .views import Home, Login, Register, Error, Logout, Send_data, Send_json_response

urlpatterns = [
    path('', Home, name='home'),
    path('login/', Login, name = 'login'),
    path('register/', Register, name='register'),
    path('error/', Error, name='error'),
    path('logout/', Logout, name='logout'),
    path('send_data/', Send_data, name='send_data'),
    path('json_response/', Send_json_response, name='json_response'),
]
