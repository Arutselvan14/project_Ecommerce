# Generated by Django 5.1.5 on 2025-02-05 10:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MainApp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='productlist',
            name='product_kg',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='productlist',
            name='product_quantity',
            field=models.IntegerField(default=0),
        ),
    ]
