from django.shortcuts import render
from rest_framework import generics
from .models import Animal
from .serializer import AnimalSerializer

# Create your views here.
class AnimalListView(generics.ListCreateAPIView):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer

class AnimalDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer