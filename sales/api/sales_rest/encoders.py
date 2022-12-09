from .models import Sales_person, Customer, Sale, AutomobileVO
from common.json import ModelEncoder


class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "import_href", "id"]


class Sales_personDetailEncoder(ModelEncoder):
    model = Sales_person
    properties = ["sales_name", "employee_number", "id"]


class CustomerDetailEncoder(ModelEncoder):
    model = Customer
    properties = ["customer_name", "address", "phone_number", "id"]


class SaleDetailEncoder(ModelEncoder):
    model = Sale
    properties = ["price", "sales_person", "customer", "auto", "id"]
    encoders = {
        "sales_person": Sales_personDetailEncoder(),
        "customer": CustomerDetailEncoder(),
        "auto": AutomobileVODetailEncoder(),
    }
