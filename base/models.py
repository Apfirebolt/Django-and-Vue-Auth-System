from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Portfolio(models.Model):
    user_id=models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True,
                              default='/placeholder.png')
    description = models.TextField(null=True, blank=True)
    total = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now=True)
    updatedAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class DirectoryUsers(models.Model):
    uploaded_by = models.ForeignKey(User, on_delete=models.CASCADE)
    userId = models.IntegerField()
    title = models.CharField(max_length=256)
    body = models.TextField()

    def __str__(self):
        return str(self.userId)









