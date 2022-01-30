# Generated by Django 4.0.1 on 2022-01-29 01:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('SAFApp', '0003_budget_income_alter_expense_budget'),
    ]

    operations = [
        migrations.AlterField(
            model_name='expense',
            name='budget',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='expenses', to='SAFApp.budget'),
        ),
    ]