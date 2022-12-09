from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    vin = models.CharField(max_length=17, unique=True)

    def __str__(self):
        return self.vin



class Technician(models.Model):
    tech_name = models.CharField(max_length=100)
    emp_number = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.tech_name

    # def get_api_url(self):
    #     return reverse("technician", kwargs={"id": self.id})


class Appointment(models.Model):
    app_vin = models.CharField(max_length=17, unique=True)
    cust_name = models.CharField(max_length=100, null=True, blank=True)
    date = models.CharField(max_length=100, null=True, blank=True)
    time = models.CharField(max_length=100, null=True, blank=True)
    reason = models.CharField(max_length=100, null=True, blank=True)
    vip_status = models.BooleanField(default=False,null=True, blank=True)
    app_status = models.CharField(default="APPROVED", max_length=10)
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="appointment",
        on_delete=models.PROTECT,
    )
    technician =models.ForeignKey(
        Technician,
        related_name="appointment",
        on_delete=models.PROTECT,
    )

    def __str__(self):
        return self.cust_name
