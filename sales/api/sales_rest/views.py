from django.http import JsonResponse
from .models import Sales_person, Customer, Sale, AutomobileVO
from .encoders import (
    Sales_personDetailEncoder,
    CustomerDetailEncoder,
    SaleDetailEncoder,
    )
from django.views.decorators.http import require_http_methods
import json


@require_http_methods(["GET", "POST"])
def api_sales_persons(request):
    if request.method == "GET":
        sales_persons = Sales_person.objects.all()
        return JsonResponse(
            {"sales_persons": sales_persons},
            encoder=Sales_personDetailEncoder,
            safe=False,
        )
    else:
        try:
            content = json.loads(request.body)
            sales_person = Sales_person.objects.create(**content)
            return JsonResponse(
                sales_person,
                encoder=Sales_personDetailEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Employee already exists"}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE", "GET", "PUT"])
def api_sales_person(request, id):
    if request.method == "GET":
        sales_person = Sales_person.objects.get(id=id)
        return JsonResponse(
            sales_person,
            encoder=Sales_personDetailEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count, _ = Sales_person.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        content = json.loads(request.body)

        Sales_person.objects.filter(id=id).update(**content)

        sales_person = Sales_person.objects.get(id=id)
        return JsonResponse(
            sales_person,
            encoder=Sales_personDetailEncoder,
            safe=False,
        )


@require_http_methods(["GET", "POST"])
def api_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerDetailEncoder,
            safe=False,
        )
    else:
        try:
            content = json.loads(request.body)
            customer = Customer.objects.create(**content)
            return JsonResponse(
                customer,
                encoder=CustomerDetailEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Customer already exists"}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE", "GET", "PUT"])
def api_customer(request, id):
    if request.method == "GET":
        customer = Customer.objects.get(id=id)
        return JsonResponse(
            customer,
            encoder=CustomerDetailEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count, _ = Customer.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        content = json.loads(request.body)

        Customer.objects.filter(id=id).update(**content)

        customer = Customer.objects.get(id=id)
        return JsonResponse(
            customer,
            encoder=CustomerDetailEncoder,
            safe=False,
        )


@require_http_methods(["GET", "POST"])
def api_sales(request, sales_person_id=None):
    if request.method == "GET":
        if sales_person_id is not None:
            sales = Sale.objects.filter(sales_person=sales_person_id)
        else:
            sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SaleDetailEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        try:
            sales_name = content["sales_person"]
            sales_person = Sales_person.objects.get(sales_name=sales_name)
            content["sales_person"] = sales_person
            print(sales_person)
        except Sales_person.DoesNotExist:
            return JsonResponse(
                {"message": "We do not have an agent with this name"},
                status=404,
            )
        try:
            customer_name = content["customer"]
            customer = Customer.objects.get(customer_name=customer_name)
            content["customer"] = customer
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "We do not have that customer in our records"},
                status=404,
            )
        try:
            vin = content["auto"]
            auto = AutomobileVO.objects.get(vin=vin)
            content["auto"] = auto
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "We do not have that vehicle in our inventory"},
                status=404,
            )
        sale = Sale.objects.create(**content)
        return JsonResponse(
            sale,
            encoder=SaleDetailEncoder,
            safe=False,
        )



@require_http_methods(["DELETE", "GET", "PUT"])
def api_sale(request, id):
    if request.method == "GET":
        sale = Sale.objects.get(id=id)
        return JsonResponse(
            sale,
            encoder=SaleDetailEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count, _ = Sale.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        content = json.loads(request.body)

        Sale.objects.filter(id=id).update(**content)

        sale = Sale.objects.get(id=id)
        return JsonResponse(
            sale,
            encoder=SaleDetailEncoder,
            safe=False,
        )
