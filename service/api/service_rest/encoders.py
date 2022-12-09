from common.json import ModelEncoder

from .models import Technician, AutomobileVO, Appointment




class TechnicianModelEncoder(ModelEncoder):
    model = Technician
    properties = [
        "tech_name",
        "emp_number",
        "id",
    ]


class AutomobileVOModelEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "href",
        "vin",
        "id",
    ]


class AppointmentModelEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "app_vin",
        "cust_name",
        "date",
        "time",
        "reason",
        "vip_status",
        "app_status",
        "automobile",
        "technician",
        "id",
    ]
    encoders = {
        "technician": TechnicianModelEncoder(),
    }
