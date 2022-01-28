from django.db import models

# Create your models here.

class Budget(models.Model):
  title = models.CharField(max_length=256)
  name = models.CharField(max_length=256)
  income = models.CharField(max_length=256, null=True)
  
  def __str__(self):
    return self.title
  
  
class Expense(models.Model):
  title = models.CharField(max_length=256)
  value = models.CharField(max_length=256)
  budget = models.ForeignKey(Budget, on_delete=models.CASCADE, related_name='expenses', null=True, blank=True)


  def __str__(self):
    return self.title