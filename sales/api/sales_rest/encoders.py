from .models import Sales_person, Customer, Sale, AutomobileVO
from common.json import ModelEncoder


class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "import_href", "id"]


# class Sales_personListEncoder(ModelEncoder):
#     model = Sales_person
#     properties = ["name"]


class Sales_personDetailEncoder(ModelEncoder):
    model = Sales_person
    properties = ["name", "employee_number"]


# class CustomerListEncoder(ModelEncoder):
#     model = Customer
#     properties = ["name"]


class CustomerDetailEncoder(ModelEncoder):
    model = Customer
    properties = ["name", "address", "phone_number", "new", "id"]


# class SaleListEncoder(ModelEncoder):
#     model = Sale
#     properties = ["price", "id"]


class SaleDetailEncoder(ModelEncoder):
    model = Sale
    properties = ["price", "sales_name", "customer_name", "vin", "id"]
    encoders = {
        "sales_name": Sales_personDetailEncoder(),
        "customer_name": CustomerDetailEncoder(),
        "vin": AutomobileVODetailEncoder(),
    }
