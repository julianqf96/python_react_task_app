from django.db import models 
from django.utils import timezone

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    creation_date = models.DateTimeField(default=timezone.now)
    updated_date = models.DateTimeField(auto_now=True)
    done = models.BooleanField(default=False)
    
    def __str__(self):
        return self.title
    
   