from django import forms
from django.core.validators import MinValueValidator

from products.models import Product

# Наследуемся от готовой формы AuthenticationForm
class AddProductForm(forms.ModelForm):
    name = forms.CharField(widget=forms.TextInput(attrs={
        'class': 'form-control',
        'placeholder': 'Введите название товара'
    }))
    category = forms.CharField(widget=forms.TextInput(attrs={
        'class': 'form-control',
        'placeholder': 'Введите категорию товара'
    }), required=False)
    count = forms.IntegerField(widget=forms.NumberInput(attrs={
            'class': 'form-control',
            'placeholder': 'Введите количество товара'
        }), validators=[MinValueValidator(0)], required=False, initial=0)
    weight = forms.IntegerField(widget=forms.NumberInput(attrs={
        'class': 'form-control',
        'placeholder': 'Введите вес товара в кг.'
    }), validators=[MinValueValidator(0)], required=False, initial=0)
    comment = forms.CharField(widget=forms.TextInput(attrs={
        'class': 'form-control',
        'placeholder': 'Комментарий по товару'
    }), required=False)
    price = forms.IntegerField(widget=forms.NumberInput(attrs={
        'class': 'form-control',
        'placeholder': 'Введите цену товара'
    }), validators=[MinValueValidator(0)], required=False, initial=0)

    class Meta:
        model = Product
        fields = ('name', 'category', 'count', 'weight', 'comment', 'price')

