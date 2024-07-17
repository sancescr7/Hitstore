from django.shortcuts import render

# Create your views here.

def product(request):
    # Your view logic here
    return render(request, 'shop.html')

def product_detail(request):
    # Your view logic here
    return render(request, 'single-product.html')