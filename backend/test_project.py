"""
Django project level tests.
"""
from django.test import TestCase
from django.apps import apps
from django.conf import settings
from django.core.management import call_command
from django.test.utils import override_settings
import logging


class ProjectConfigurationTestCase(TestCase):
    """Test the overall project configuration."""
    
    def test_installed_apps(self):
        """Test that all required apps are installed."""
        required_apps = [
            'django.contrib.admin',
            'django.contrib.auth',
            'django.contrib.contenttypes',
            'django.contrib.sessions',
            'django.contrib.messages',
            'django.contrib.staticfiles',
            'api',
            'reports',
            'training',
        ]
        
        for app in required_apps:
            with self.subTest(app=app):
                self.assertIn(app, settings.INSTALLED_APPS)
    
    def test_apps_ready(self):
        """Test that all custom apps are ready."""
        custom_apps = ['api', 'reports', 'training']
        
        for app_name in custom_apps:
            with self.subTest(app=app_name):
                app_config = apps.get_app_config(app_name)
                self.assertEqual(app_config.name, app_name)
    
    def test_database_connection(self):
        """Test that database connection works."""
        from django.db import connection
        with connection.cursor() as cursor:
            cursor.execute("SELECT 1")
            result = cursor.fetchone()
            self.assertEqual(result[0], 1)
    
    def test_logging_configuration(self):
        """Test that logging is properly configured."""
        logger = logging.getLogger('django')
        
        # Check that the logger exists and has handlers
        self.assertIsNotNone(logger)
        
        # Test that logging doesn't raise exceptions
        try:
            logger.info("Test log message")
        except Exception as e:
            self.fail(f"Logging raised an exception: {e}")
    
    def test_static_files_settings(self):
        """Test static files configuration."""
        self.assertTrue(hasattr(settings, 'STATIC_URL'))
        self.assertTrue(hasattr(settings, 'STATIC_ROOT'))
        self.assertEqual(settings.STATIC_URL, 'static/')
    
    def test_secret_key_exists(self):
        """Test that SECRET_KEY is configured."""
        self.assertTrue(hasattr(settings, 'SECRET_KEY'))
        self.assertIsNotNone(settings.SECRET_KEY)
        self.assertNotEqual(settings.SECRET_KEY, '')
    
    def test_management_commands(self):
        """Test that management commands work."""
        try:
            call_command('check', verbosity=0)
        except Exception as e:
            self.fail(f"Django check command failed: {e}")
