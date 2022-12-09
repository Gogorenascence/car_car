from django.urls import path

from .views import (
    api_sales_persons,
    api_sales_person,
    api_customers,
    api_customer,
    api_sales,
    api_sale,
)

urlpatterns = [
    path(
        "agents/",
        api_sales_persons,
        name="api_sales_persons",
    ),
    path(
        "agents/<int:id>/",
        api_sales_person,
        name="api_sales_person",
    ),
    path(
        "customers/",
        api_customers,
        name="api_customers",
    ),
    path(
        "customers/<int:id>/",
        api_customer,
        name="api_customer",
    ),
    path(
        "sales/",
        api_sales,
        name="api_create_sales",
    ),
    path(
        "agent/<int:sales_person_id>/sales/",
        api_sales,
        name="api_list_attendees",
    ),
    path(
        "sales/<int:id>/",
        api_sale,
        name="api_sale",
    ),
]
