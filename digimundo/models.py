from django.db import models
from datetime import datetime
from django.contrib import admin 
from django.db import models
from django.contrib.auth.models import User
from django.db.models.deletion import CASCADE
from django.db.models.fields import EmailField
from django.utils import timezone
# Create your models here.

class Registro (models.Model):
    nombre = models.CharField(max_length=90)
    apellidos = models.CharField(max_length=30)
    correo = models. EmailField(max_length=254)
    telefono = models.CharField(max_length=100)
    empresa = models.CharField(max_length=30)
    cargo = models.CharField(max_length=30)
    comentarios = models.TextField()