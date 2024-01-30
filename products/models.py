from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=150, blank=True)
    count = models.PositiveIntegerField(blank=True, null=True)
    weight = models.PositiveIntegerField(blank=True, null=True)
    # weight = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    comment = models.TextField(blank=True, null=True)
    date_create = models.DateTimeField(auto_now_add=True)
    price = models.PositiveIntegerField(default=0)


    def __str__(self):
        return self.name
