from django import forms
from .models import Blog

class ContactUSFORM(forms.Modelform):
    fullname = forms.CharField(max_length=100 , label= 'fullname'
                               ,widget=forms.TextInput(attrs={'class':'form-control',
                                'placeholder': 'Enter your full name' }))
    
    fullname = forms.EmailField(label = 'Email' ,
                               widget=forms.EmailInput(attrs={'class':'form-control',
                                'placeholder': 'Enter your full name' }))
    
    message = forms.CharField(label ='message' 
                               ,widget=forms.Textarea(attrs={'class':'form-control',
                                'placeholder': 'Enter your full name' }))
    
