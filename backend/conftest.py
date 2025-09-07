"""
Pytest configuration for the OLL CRM Backend.
"""
import os
import django
from django.conf import settings
from django.test.utils import get_runner


def pytest_configure():
    """Configure Django settings for pytest."""
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "oll_crm.settings")
    django.setup()


def pytest_runtest_setup(item):
    """Set up individual test items."""
    pass


def pytest_collection_modifyitems(config, items):
    """Modify collected test items."""
    pass
