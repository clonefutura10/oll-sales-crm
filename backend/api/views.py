from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
import json


@csrf_exempt
@require_http_methods(["GET"])
def health_check(request):
    """
    Health check endpoint for load balancers and monitoring systems
    """
    return JsonResponse(
        {"status": "healthy", "message": "OLL CRM API is running", "version": "1.0.0"},
        status=200,
    )


@csrf_exempt
@require_http_methods(["GET"])
def api_info(request):
    """
    API information endpoint
    """
    return JsonResponse(
        {
            "name": "OLL Sales CRM API",
            "version": "1.0.0",
            "description": "Customer Relationship Management API",
            "endpoints": {
                "health": "/health/",
                "admin": "/admin/",
                "api": "/api/",
            },
        },
        status=200,
    )


# Create your views here.
