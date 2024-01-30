"""
URL configuration for my_list project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from products.views import index, products, delete_row, update_row, sort_table, filter_table

app_name = 'products'

urlpatterns = [
    path('', index.as_view(), name='index'),
    path('products/', products, name='products'),
    path('products/delete_row/<int:id>', delete_row, name='delete_row'),

    path('products/update_row/<int:id>/<str:name>/<str:category>/<str:count>/<str:weight>/<str:comment>/<str:date>/<str:price>/', update_row, name='update_row'),

    path('products/sort/<str:sort_value>', sort_table, name='sort_table'),
    path('products/filter/<str:minVal>/<str:maxVal>', filter_table, name='filter_table'),
]
