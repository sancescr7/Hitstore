from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request ,"index.html") 

def AboutUs(request):
    return render(request ,"about-us.html") 

def contact(request):
    return render(request ,"contact-us.html")