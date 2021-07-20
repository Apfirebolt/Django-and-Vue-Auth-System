from django.urls import path
from base.views import file_views as views


urlpatterns = [
    path('', views.uploadFile, name="file-upload"),
]
