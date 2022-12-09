from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .encoders import (
    AutomobileVOModelEncoder,
    TechnicianModelEncoder,
    AppointmentModelEncoder,
)
from .models import AutomobileVO, Technician, Appointment


@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointment = Appointment.objects.all()
        return JsonResponse(
            appointment,
            encoder=AppointmentModelEncoder,
            safe=False
        )
    else: #post/create
        try:
            content = json.loads(request.body)
            emp_number = content["emp_number"]
            technician = Technician.objects.get(emp_number=emp_number)
            content["technician"] = technician
            try:
                app_vin = content["app_vin"]
                AutomobileVO.objects.get(vin=app_vin)
                vip_status= True
                content["vip_staus"]=True
            except:
                pass
            appointment = Appointment.objects.create(**content)
            return JsonResponse(
                appointment,
                encoder=AppointmentModelEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the appointment"}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_appointment(request, id):
    if request.method == "GET":
        try:
            appointment = Appointment.objects.get(id=id)
            return JsonResponse(
                appointment,
                encoder=AppointmentModelEncoder,
                safe=False
            )
        except Appointment.DoesNotExist:
            response = JsonResponse({"message": "Appointment does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            appointment = Appointment.objects.get(id=id)
            appointment.delete()
            return JsonResponse(
                appointment,
                encoder=AppointmentModelEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            return JsonResponse({"message": "Appointment does not exist"})
    else: # PUT
        try:
            content = json.loads(request.body)
            Appointment.objects.filter(id=id).update(**content)
            appointment = appointment.objects.get(id=id)
            return JsonResponse(
                appointment,
                encoder=AppointmentModelEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response


@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianModelEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianModelEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the manufacturer"}
            )
            response.status_code = 400
            return response


# @require_http_methods(["PUT"])
# def api_finished_apt(request, id):
#     appcomp = Appointment.objects.get(id=id)
#     appcomp.completed()
#     return JsonResponse(
#         appcomp,
#         encoder=AppointmentModelEncoder,
#         safe=False,
#     )

# @require_http_methods(["PUT"])
# def api_cancelled_apt(requests, id):
#     appcanc = Appointment.objects.get(id=id)
#     appcanc.cancelled()
#     return JsonResponse(
#         appcanc,
#         encoder=AppointmentModelEncoder,
#         safe=False,
#     )
