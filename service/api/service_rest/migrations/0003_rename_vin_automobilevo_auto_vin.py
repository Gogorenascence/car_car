# Generated by Django 4.0.3 on 2022-12-10 03:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0002_remove_appointment_automobile'),
    ]

    operations = [
        migrations.RenameField(
            model_name='automobilevo',
            old_name='vin',
            new_name='auto_vin',
        ),
    ]