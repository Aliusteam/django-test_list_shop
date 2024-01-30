from django.contrib import admin
from products.models import Product

# Регистрация наших моделей models
admin.site.register(Product)
