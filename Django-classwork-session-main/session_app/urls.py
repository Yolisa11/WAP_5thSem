from django.urls import path
from .views import Home, Page

urlpatterns = [
    path('',Home, name='home'),
    path('page/', Page, name='page')
]
