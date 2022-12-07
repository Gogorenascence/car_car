from django.db import models


class Sales_person(models.Model):
    sales_name = models.CharField(max_length=150)
    employee = models.CharField(max_length=150, null=True, blank=True)


class Customer(models.Model):
    customer_name = models.CharField(max_length=150)
    address = models.CharField(max_length=150, null=True, blank=True)
    phone_number = models.models.PhoneNumberField(null=True, blank=True)
    new = models.BooleanField()


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)

    def __str__(self):
        return self.vin


class Sale(models.Model):
    price = models.PositiveSmallIntegerField(null=True, blank=True)

    sales_name = models.ForeignKey(
        Sales_person,
        related_name="sales",
        on_delete=models.CASCADE,
    )

    customer_name = models.ForeignKey(
        Customer,
        related_name="sales",
        on_delete=models.CASCADE,
    )

    vin = models.ForeignKey(
        AutomobileVO,
        related_name="sales",
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.id
