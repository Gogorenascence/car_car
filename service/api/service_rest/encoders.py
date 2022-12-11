from common.json import ModelEncoder

from .models import Technician, AutomobileVO, Appointment




class TechnicianModelEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "tech_name",
        "emp_number",
    ]


class AutomobileVOModelEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "id",
        "import_href",
        "vin",
    ]


class AppointmentModelEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "app_vin",
        "cust_name",
        "date",
        "time",
        "reason",
        "vip_status",
        "app_status",
        "technician",
    ]
    encoders = {
        "technician": TechnicianModelEncoder(),
    }
