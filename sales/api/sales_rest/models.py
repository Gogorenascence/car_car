from django.db import models


class Sales_person(models.Model):
    sales_name = models.CharField(max_length=150)
    employee_number = models.CharField(
        max_length=150,
        null=True, blank=True,
        unique=True,
    )
    def __str__(self):
        return self.sales_name


class Customer(models.Model):
    customer_name = models.CharField(max_length=150)
    address = models.CharField(max_length=150, null=True, blank=True)
    phone_number = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return self.customer_name


class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    vin = models.CharField(max_length=17, unique=True)

    def __str__(self):
        return self.vin


class Sale(models.Model):


    price = models.PositiveSmallIntegerField(null=True, blank=True)

    customer = models.ForeignKey(
        Customer,
        related_name="sales",
        on_delete=models.CASCADE,
    )

    sales_person = models.ForeignKey(
        Sales_person,
        related_name="sales",
        on_delete=models.CASCADE,
    )

    auto = models.ForeignKey(
        AutomobileVO,
        related_name="sales",
        on_delete=models.CASCADE,
    )
