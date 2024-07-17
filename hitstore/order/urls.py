from django.urls import path 
from . import views


urlpatterns = [
    path('checkout/',views.checkout, name='checkout'),
    path('faq/',views.faq, name='faq'),
    path('shopping/', views.shopping, name='shoping'),
    path('wishlist/',views.wishlist,  name='wishlist'),
]