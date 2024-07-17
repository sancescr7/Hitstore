from django.shortcuts import render
from .models import Blogs
from .forms import ContactUSFORM

# Create your views here.

def blogs(request):
    all_blogs = Blogs.objects.all()

    context ={
        'Blogs': all_blogs,
        'form' : ContactUSFORM()
    }


def blog(request):
    return render(request, 'blog.html')

def blog_details(request):
    return render(request, 'blog-details.html')

def contact(request):
    return render(request ,"contact-us.html")
