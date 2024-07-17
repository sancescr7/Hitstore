from django.db import models

# Create your models here.

from hitstore.utils.base import BaseModel

class Blog(BaseModel):

    title = models.CharField(max_length=100, verbose_name='Title of the blog cart', help_text='max 100 characters')
    image = models.ImageField(verbose_name='Image of the blog cart')
    description = models.TextField(verbose_name='Text of the blog cart')
    is_published = models.BooleanField(default=False, verbose_name='Is published?')

class Comments(BaseModel):

    blog = models.ForeignKey(Blog, on_delete=models.CASCADE, related_name='oment_of_th_blog')
    name = models.CharField(verbose_name='Comment name', max_length=255)
    email = models.EmailField(verbose_name='Comment email')
    comment = models.TextField(verbose_name='Comment')

class Brand(BaseModel):
    
    title = models.CharField(max_length=100, verbose_name='Title of the praducts', help_text='max 100 characters')

    class Meta:
        verbose_name = 'Brand'
        verbose_name_plural = 'blog Brand'

    def __str__(self):
        return self.title