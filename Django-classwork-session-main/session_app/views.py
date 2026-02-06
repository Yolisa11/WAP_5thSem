from django.shortcuts import render

def Home(request):
    return render(request, 'home.html')

def Page(request):
    return render(request, 'page.html')