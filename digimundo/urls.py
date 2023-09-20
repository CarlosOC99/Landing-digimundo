from django.urls import path
from django.conf.urls import url
from . import views
urlpatterns = [
    path('', views.index, name ="index"),
    url('^servicios/$' , views.servicios, name="servicios"),
    url('^nosotros/$' , views.nosotros, name="nosotros"),
    url('^contactanos/$' , views.contactanos, name="contactanos"),
]
