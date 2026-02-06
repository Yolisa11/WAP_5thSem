from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

def Register(request):
    if request.method == 'POST':
        username = request.POST.get('name')
        password = request.POST.get('password')
        email = request.POST.get('email')
        
        user = User.objects.create_user(
            username = username, 
            password = password,
            email = email,
            )
       
    return render(request, 'register.html')

def Login(request):
    if request.method == 'POST':
        username = request.POST.get('name')
        password = request.POST.get('password')
        
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            return redirect('error')
    return render(request, 'login.html')

def Logout(request):
    logout(request)
    return redirect('login')

@login_required(login_url='login') # to prevent broken access control
@csrf_exempt # to allow POST requests without CSRF token
def Home(request):
    return render(request, 'home.html')

def Error(request):
    return render(request, 'error.html')

@login_required(login_url='login')

def Send_data(request):
    if request.method == 'POST':
        msg = request.POST.get('data')
        print("message received:", msg)
    return HttpResponse('Data received')

def Send_json_response(request):
    data = {
        "message": "This is a JSON response",
        "status": "success",
        "numbers": [1, 2, 3, 4, 5],
    }
    return JsonResponse(data)
