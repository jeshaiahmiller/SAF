from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from SAFApp import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


router = routers.DefaultRouter()
router.register('budget', views.BudgetViewSet)
router.register('expense', views.ExpenseViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api-token', TokenObtainPairView.as_view()),
    path('api-token/refresh', TokenRefreshView.as_view()),
]
