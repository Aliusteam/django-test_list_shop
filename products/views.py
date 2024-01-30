from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.views.generic.edit import CreateView
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Min, Max
from django.db.models import Q

from .models import Product
from .forms import AddProductForm


class index(CreateView):
    model = Product
    form_class = AddProductForm
    template_name = 'products/index.html'
    success_url = reverse_lazy('products:index')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context = {
            'products': Product.objects.all(),
            'count': Product.objects.all().count(),
            'form': self.form_class()
        }
        return context


def products(request):
    context = {
        'products': Product.objects.all(),
        'min_price': Product.objects.aggregate(min_price=Min('price'))['min_price'],
        'max_price': Product.objects.aggregate(max_price=Max('price'))['max_price'],
    }
    return render(request, 'products/products.html', context)


@csrf_exempt  # csrf_exempt - для решения проблемы с csrf
def delete_row(request, id):
    product = get_object_or_404(Product, id=id)
    product.delete()
    return JsonResponse({'message': f'Успешно удалено объект с id {id}'})


@csrf_exempt
def update_row(request, id, name, category, count, weight, comment, date, price):
    product = get_object_or_404(Product, id=id)
    # Обновляем поля выбранной строки
    print(id, name, category, count, weight, comment, date, price)
    product.name = name
    product.category = category
    product.count = count
    product.weight = weight
    product.comment = comment
    product.date = date
    product.price = price
    product.save()
    # return redirect('products:index')
    return JsonResponse({'message': f'Успешно изменили объект с id {id}'})


# Сортировка таблицы
@csrf_exempt
def sort_table(request, sort_value):
    context = {
        'products': Product.objects.order_by(sort_value)
    }
    return render(request, 'products/products.html', context)


# Фильтр цены
@csrf_exempt
def filter_table(request, minVal, maxVal):
    context = {
        'products': Product.objects.filter(Q(price__gt=minVal) | Q(price__gte=minVal), price__lte=maxVal),
        'min_price': Product.objects.aggregate(min_price=Min('price'))['min_price'],
        'max_price': Product.objects.aggregate(max_price=Max('price'))['max_price'],
    }
    return render(request, 'products/products.html', context)
