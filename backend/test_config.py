#!/usr/bin/env python
"""
Test script to verify Django settings and logging configuration.
"""
import os
import sys
from pathlib import Path

# Add the backend directory to the Python path
backend_dir = Path(__file__).parent
sys.path.insert(0, str(backend_dir))

# Set the Django settings module
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'oll_crm.settings')

try:
    import django
    from django.conf import settings
    
    print("Testing Django configuration...")
    
    # Check if logs directory is created
    logs_dir = settings.BASE_DIR / "logs"
    print(f"Logs directory path: {logs_dir}")
    print(f"Logs directory exists: {logs_dir.exists()}")
    
    # Check logging configuration
    logging_config = settings.LOGGING
    print("Logging configuration loaded successfully")
    print(f"File handler filename: {logging_config['handlers']['file']['filename']}")
    
    print("✅ Django settings configuration test passed!")
    
except Exception as e:
    print(f"❌ Error in Django configuration: {e}")
    sys.exit(1)
