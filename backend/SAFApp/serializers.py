from rest_framework import serializers
from .models import Budget, Expense


class ExpenseSerializer(serializers.HyperlinkedModelSerializer):

  class Meta:
    model = Expense
    fields = ['id', 'title', 'value', 'budget']
    
    
class BudgetSerializer(serializers.HyperlinkedModelSerializer):
  expenses = ExpenseSerializer(many=True)
  class Meta:
    model = Budget
    fields = ['id', 'title', 'name', 'income', 'expenses']
    
  def create(self, validated_data):
      expense_data = validated_data.pop('expenses')
      budget = Budget.objects.create(**validated_data)
      for expense_data in expense_data:
          Expense.objects.create(budget=budget, **expense_data)
      return budget
    
  def update(self, instance, validated_data):
        expense_data = validated_data.pop('expenses')
        expenses = (instance.expenses).all()
        expenses = list(expenses)
        instance.title = validated_data.get('title', instance.title)
        instance.name = validated_data.get('name', instance.name)
        instance.income = validated_data.get('income', instance.income)
        instance.save()

        for expense_data in expenses_data:
            expense = expenses.pop(0)
            expense.title = expense_data.get('title', expense.title)
            expense.value = expense_data.get('value', expense.value)
            expense.save()
        return instance