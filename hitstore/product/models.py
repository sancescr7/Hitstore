from django.db import models

# Create your models here.

from hitstore.utils.base import BaseModel

class Brand(BaseModel):
    
    title = models.CharField(max_length=100, verbose_name='Title of the praducts', help_text='max 100 characters')

    class Meta:
        verbose_name = 'Brand'
        verbose_name_plural = 'All Brand'

    def __str__(self):
        return self.title

class Praducts(BaseModel):
    
    title = models.CharField(max_length=100, verbose_name='Title of the praducts', help_text='max 100 characters')
    image = models.ImageField(verbose_name='Image of the praducts')
    price = models.IntegerField(verbose_name='Price of the praducts')
    brand = models.ManyToManyField(Brand, max_length=255, related_name='product_brand')
    is_published = models.BooleanField(default=False, verbose_name='Is published?')

    class Meta:
        verbose_name = 'Praducts'
        verbose_name_plural = 'All Praducts'

    def __str__(self):
        return self.title
    


        
        


