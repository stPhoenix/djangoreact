from django.db import models

# Create your models here.


class Article(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    text = models.TextField(max_length=500)
    pub_date = models.DateTimeField(auto_now=True)