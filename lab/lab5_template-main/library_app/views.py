from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout  
from django.contrib.auth.decorators import login_required  

from datetime import datetime
from .models import User , Book , Borrow 
@login_required(login_url='login')
def Home(request):
    return render(request, 'home.html')

@login_required(login_url='login')
def Write(request):
    users = User.objects.all()
    books = Book.objects.all()
    if request.method == 'POST':
        if 'user_submit' in request.POST:
            name = request.POST.get('name')
            email = request.POST.get('email')
            phone = request.POST.get('phone')
            # Create a user entry
            User.objects.create(name=name, email=email, phone=phone)

        elif 'book_submit' in request.POST:
            title = request.POST.get('title')
            author = request.POST.get('author')
            isbn = request.POST.get('isbn')
            # Create a book entry
            Book.objects.create(title=title, author=author, isbn=isbn)

        elif 'borrow_submit' in request.POST:
            user_id = request.POST.get('user_id')
            book_id = request.POST.get('book_id')
            return_date_str = request.POST.get('return_date')

            # Convert IDs into actual objects from the database
            user = User.objects.get(user_id=user_id)
            book = Book.objects.get(book_id=book_id)

            # Create a Borrow entry
            Borrow.objects.create(user_id=user, book_id=book)

        elif 'return_submit' in request.POST:
            user_id = request.POST.get('user_id')
            book_id = request.POST.get('book_id')
            return_date_str = request.POST.get('return_date')

            return_date = datetime.strptime(return_date_str, "%Y-%m-%d").date()

            # Get the actual objects
            user = User.objects.get(user_id=user_id)
            book = Book.objects.get(book_id=book_id)

            # Find the active borrow (return_date is None) for this user + book
            try:
                borrow = Borrow.objects.filter(user_id=user, book_id=book,
            return_date__isnull=True).latest('borrow_id')
                # Update return date
                borrow.return_date = return_date
                borrow.save()
            except Borrow.DoesNotExist:
                pass  # do nothing

    return render(request, 'Write.html', {'users': users, 'books': books})

@login_required(login_url='login')
def Read(request):
    user = User.objects.all()
    book = Book.objects.all()
    borrow = Borrow.objects.all()
    return render(request, 'Read.html', {
        'users': user,
        'books': book,
        'borrows': borrow,
    })

@login_required(login_url='login')
def Delete(request):
    users = User.objects.all()
    books = Book.objects.all()
    
    if request.method == 'POST':
        if 'user_submit' in request.POST:
            user_id = request.POST.get('user_id')
            if user_id:
                User.objects.filter(user_id=user_id).delete()
                
        if 'book_submit' in request.POST:
            book_id = request.POST.get('book_id')
            if book_id:
                Book.objects.filter(book_id=book_id).delete()
          
    return render(request, 'Delete.html', {
        'users': users,
        'books': books
    })

@login_required(login_url='login')
def Update(request):
    users = User.objects.all()
    books = Book.objects.all()
    
    if request.method == 'POST':
        if 'user_submit' in request.POST:
            user_id = request.POST.get('user_id')
            if user_id:
                return redirect('edit_user', user_id = user_id)  # Redirect to edit user page
        if 'book_submit' in request.POST:
            book_id = request.POST.get('book_id')
            if book_id:
                return redirect('edit_book', book_id = book_id)  # Redirect to edit book page
          
    return render(request, 'Update.html', {
        'users': users,
        'books': books
    })

@login_required(login_url='login')
def EditUser(request, user_id):
    user = User.objects.get(user_id=user_id)

    if request.method == 'POST':
        if 'user_submit' in request.POST:
            user.name = request.POST.get('name')
            user.email = request.POST.get('email')
            user.phone = request.POST.get('phone')
            user.save()

            return redirect('update')
    return render(request, 'edituser.html')

def EditBook(request, book_id):
    book = Book.objects.get(book_id=book_id)
    if request.method == 'POST':
        if 'book_submit' in request.POST:
            book.title = request.POST.get('title')
            book.author = request.POST.get('author')
            book.isbn = request.POST.get('isbn')
            book.save()

            return redirect('update')
    return render(request, 'editbook.html')

def Login(request):
    if request.method == 'POST':
        if 'verify' in request.POST:
            username = request.POST.get('username')
            password = request.POST.get('password')

            # Authenticate user credentials
            user = authenticate(request, username=username, password=password)

            if user is not None:
                # Log the user in and start session
                login(request, user)
                request.session.set_expiry(0)  # Session expires on browser close
                return redirect('home')
            else:
                # Redirect if authentication fails
                return redirect('error')

    # Render login page for GET request
    return render(request, 'login.html')

@login_required(login_url='login')
def Logout(request):
    # End user session and log out
    logout(request)
    return redirect('login')